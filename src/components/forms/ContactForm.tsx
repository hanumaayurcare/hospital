'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { submitContactForm } from '@/app/contact/actions'

export function ContactForm() {
  const [isPending, setIsPending] = useState(false)
  const [state, setState] = useState<{ success?: string; error?: string } | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsPending(true)
    setState(null)

    const formData = new FormData(e.currentTarget)
    const result = await submitContactForm(formData)

    setIsPending(false)
    setState(result)

    if (result.success) {
      ;(e.target as HTMLFormElement).reset()
    }
  }

  return (
    <div className="space-y-6">
      {state?.success && (
        <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center gap-3">
          <CheckCircle2 className="h-5 w-5 shrink-0" />
          <p className="text-sm font-bold">{state.success}</p>
        </div>
      )}

      {state?.error && (
        <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive flex items-center gap-3">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p className="text-sm font-bold">{state.error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold">Full Name</label>
            <Input 
              name="full_name" 
              className="h-12 rounded-xl" 
              placeholder="John Doe" 
              required 
              disabled={isPending}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold">Email Address</label>
            <Input 
              name="email" 
              type="email" 
              className="h-12 rounded-xl" 
              placeholder="john@example.com" 
              required 
              disabled={isPending}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold">Subject</label>
          <Input 
            name="subject" 
            className="h-12 rounded-xl" 
            placeholder="Query about Panchakarma" 
            disabled={isPending}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold">Message</label>
          <Textarea 
            name="message" 
            className="min-h-[150px] rounded-xl" 
            placeholder="How can we help you?" 
            required 
            disabled={isPending}
          />
        </div>
        <Button 
          type="submit" 
          size="lg" 
          className="w-full rounded-xl font-bold h-14" 
          disabled={isPending}
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" /> Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
