-- Create hospital schema if it doesn't exist
CREATE SCHEMA IF NOT EXISTS hospital;

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Profiles table (public schema) for RBAC
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  role TEXT CHECK (role IN ('patient', 'doctor', 'staff', 'admin')) DEFAULT 'patient',
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- 2. Locations (hospital schema)
CREATE TABLE IF NOT EXISTS hospital.locations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  address TEXT,
  contact TEXT,
  opd_timings JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Patients (hospital schema)
CREATE TABLE IF NOT EXISTS hospital.patients (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  dob DATE,
  gender TEXT,
  contact TEXT,
  address TEXT,
  medical_history TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Doctors (hospital schema)
CREATE TABLE IF NOT EXISTS hospital.doctors (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  specialities TEXT[],
  locations UUID[] DEFAULT '{}', -- Array of location IDs
  contact TEXT,
  bio TEXT,
  profile_image TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Appointments (hospital schema)
CREATE TABLE IF NOT EXISTS hospital.appointments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  patient_id UUID REFERENCES hospital.patients(id),
  doctor_id UUID REFERENCES hospital.doctors(id),
  location_id UUID REFERENCES hospital.locations(id),
  type TEXT CHECK (type IN ('opd', 'video', 'panchakarma', 'ipd')),
  status TEXT CHECK (status IN ('pending', 'confirmed', 'ongoing', 'completed', 'canceled')) DEFAULT 'pending',
  scheduled_at TIMESTAMPTZ NOT NULL,
  ipd_room_id UUID, -- Will link to rooms table
  created_at TIMESTAMPTZ DEFAULT NOW(),
  google_meet_link TEXT
);

-- 6. Rooms (hospital schema)
CREATE TABLE IF NOT EXISTS hospital.rooms (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  location_id UUID REFERENCES hospital.locations(id),
  room_number TEXT NOT NULL,
  category TEXT CHECK (category IN ('general', 'private', 'deluxe')),
  status TEXT CHECK (status IN ('available', 'occupied', 'maintenance')) DEFAULT 'available',
  assigned_patient_id UUID REFERENCES hospital.patients(id),
  ipd_admission_date TIMESTAMPTZ,
  ipd_discharge_date TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Link appointments to rooms (circular ref handled by nullable field)
ALTER TABLE hospital.appointments ADD FOREIGN KEY (ipd_room_id) REFERENCES hospital.rooms(id);

-- 7. Prescriptions (hospital schema)
CREATE TABLE IF NOT EXISTS hospital.prescriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  appointment_id UUID REFERENCES hospital.appointments(id),
  doctor_id UUID REFERENCES hospital.doctors(id),
  patient_id UUID REFERENCES hospital.patients(id),
  medicines JSONB NOT NULL DEFAULT '[]',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. Panchakarma Sessions (hospital schema)
CREATE TABLE IF NOT EXISTS hospital.panchakarma_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  patient_id UUID REFERENCES hospital.patients(id),
  doctor_id UUID REFERENCES hospital.doctors(id),
  therapist_id UUID REFERENCES public.profiles(id), -- Therapist is a user with 'staff' role
  therapy_type TEXT NOT NULL,
  duration_days INTEGER DEFAULT 1,
  scheduled_date DATE,
  status TEXT CHECK (status IN ('pending', 'ongoing', 'completed')) DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. Blogs (hospital schema)
CREATE TABLE IF NOT EXISTS hospital.blogs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  category TEXT,
  tags TEXT[] DEFAULT '{}',
  author_id UUID REFERENCES public.profiles(id),
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. Testimonials (hospital schema)
CREATE TABLE IF NOT EXISTS hospital.testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  patient_id UUID REFERENCES hospital.patients(id),
  patient_name TEXT, -- Fallback if not linked
  content TEXT NOT NULL,
  video_url TEXT,
  treatment_type TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS POLICIES (Basic Example)
-- More specific policies will be needed for each table

-- Profiles Policy: Users can view all profiles but only update their own
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Trigger for creating profile on auth signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (new.id, new.email, new.raw_user_meta_data->>'full_name', 'patient');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Uncomment after setting up in Supabase
-- CREATE TRIGGER on_auth_user_created
--   AFTER INSERT ON auth.users
--   FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
