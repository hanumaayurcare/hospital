import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { forgotPassword } from '../actions'

export default function ForgotPasswordPage({
  searchParams,
}: {
  searchParams: { message: string, error: string }
}) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full border-none shadow-2xl rounded-3xl overflow-hidden pt-0 text-center">
        <CardHeader className="bg-primary text-white p-10">
          <CardTitle className="text-3xl font-bold">Recover Password</CardTitle>
          <CardDescription className="text-primary-foreground/80 mt-2">
            Enter your email to receive a reset link.
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
          
          <form className="space-y-6 text-left" action={forgotPassword}>
            <div className="space-y-2">
              <label className="text-sm font-bold px-1">Email Address</label>
              <Input name="email" className="h-12 rounded-xl" type="email" placeholder="name@example.com" required />
            </div>
            <Button className="w-full h-14 rounded-xl font-bold text-lg shadow-lg shadow-primary/20">Send Reset Link</Button>
          </form>
        </CardContent>
        <CardFooter className="p-10 pt-0 text-center justify-center border-t border-muted/50 bg-muted/10">
          <p className="text-sm text-muted-foreground font-medium italic">
            Remembered your password? <Link href="/auth/login" className="text-primary font-bold hover:underline not-italic">Sign In</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
