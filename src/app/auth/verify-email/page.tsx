import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Mail } from 'lucide-react'

export default function VerifyEmailPage({
  searchParams,
}: {
  searchParams: { message: string, error: string }
}) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full border-none shadow-2xl rounded-3xl overflow-hidden pt-0 text-center">
        <CardHeader className="bg-primary text-white p-10">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-white/20 rounded-full">
              <Mail className="h-10 w-10 text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold">Verify Email</CardTitle>
          <CardDescription className="text-primary-foreground/80 mt-2">
            We&apos;ve sent a verification link to your inbox.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-10 space-y-6">
          <div className="space-y-4">
             <div className="p-4 rounded-xl bg-muted/50 text-sm font-medium text-muted-foreground italic">
               &ldquo;Please click the link in the email to activate your account and access all features of the Hanuma Ayurcare Platform.&rdquo;
             </div>
             
             {searchParams?.error && (
               <div className="p-4 rounded-xl bg-red-50 text-red-700 text-sm font-bold border border-red-100 italic">
                 {searchParams.error}
               </div>
             )}
          </div>
          
          <div className="flex flex-col gap-3">
            <Button asChild className="h-14 rounded-xl font-bold text-lg shadow-lg shadow-primary/20">
              <Link href="/auth/login">I&apos;ve Verified My Email</Link>
            </Button>
            <p className="text-xs text-muted-foreground">
              Didn&apos;t receive the email? Check your spam folder or try again.
            </p>
          </div>
        </CardContent>
        <CardFooter className="p-10 pt-0 text-center justify-center border-t border-muted/50 bg-muted/10">
          <p className="text-sm text-muted-foreground font-medium italic">
            Need help? <Link href="/contact" className="text-primary font-bold hover:underline not-italic">Contact Support</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
