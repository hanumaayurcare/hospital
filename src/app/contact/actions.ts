'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function submitContactForm(formData: FormData) {
  const supabase = await createClient()

  const data = {
    full_name: formData.get('full_name') as string,
    email: formData.get('email') as string,
    subject: formData.get('subject') as string,
    message: formData.get('message') as string,
  }

  // Basic validation
  if (!data.full_name || !data.email || !data.message) {
    return { error: 'Please fill in all required fields.' }
  }

  const { error } = await supabase
    .from('hospital_contactus_submission')
    .insert([data])

  if (error) {
    console.error('Submission error:', error)
    return { error: 'Something went wrong. Please try again later.' }
  }

  revalidatePath('/contact')
  return { success: 'Thank you! Your message has been sent successfully.' }
}
