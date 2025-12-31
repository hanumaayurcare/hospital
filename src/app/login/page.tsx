import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { login, signInWithGoogle } from './actions'

export default function LoginPage({
  searchParams,
}: {
  searchParams: { message: string, error: string }
}) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full border-none shadow-2xl rounded-3xl overflow-hidden pt-0 text-center">
        <CardHeader className="bg-primary text-white p-10">
          <CardTitle className="text-3xl font-bold">Welcome Back</CardTitle>
          <CardDescription className="text-primary-foreground/80 mt-2">
            Access your medical records and appointments securely.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-10 space-y-6">
          {searchParams?.message && (
            <div className="p-4 rounded-xl bg-blue-50 text-blue-700 text-sm font-bold border border-blue-100 italic">
              {searchParams.message}
            </div>
          )}
          {searchParams?.error && (
            <div className="p-4 rounded-xl bg-red-50 text-red-700 text-sm font-bold border border-red-100 italic">
              {searchParams.error}
            </div>
          )}
          
          <form className="space-y-6 text-left">
            <div className="space-y-2">
              <label className="text-sm font-bold px-1">Email Address</label>
              <Input name="email" className="h-12 rounded-xl" type="email" placeholder="name@example.com" required />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between px-1">
                <label className="text-sm font-bold">Password</label>
                <Link href="#" className="text-xs text-primary font-bold hover:underline">Forgot Password?</Link>
              </div>
              <Input name="password" className="h-12 rounded-xl" type="password" placeholder="••••••••" required />
            </div>
            <Button formAction={login} className="w-full h-14 rounded-xl font-bold text-lg shadow-lg shadow-primary/20">Sign In</Button>
          </form>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t"></span></div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-widest"><span className="bg-white px-4 text-muted-foreground font-bold">Or continue with</span></div>
          </div>
          
          <form>
            <Button 
              formAction={signInWithGoogle} 
              variant="outline" 
              className="w-full h-14 rounded-xl font-bold border-2 flex gap-3 hover:bg-muted/50"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Google Login
            </Button>
          </form>
        </CardContent>
        <CardFooter className="p-10 pt-0 text-center justify-center border-t border-muted/50 bg-muted/10">
          <p className="text-sm text-muted-foreground font-medium italic">
            Don&apos;t have an account? <Link href="/register" className="text-primary font-bold hover:underline not-italic">Create Account</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
