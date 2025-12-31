import { PortalLayout } from '@/components/layout/PortalLayout'

export default function AppointmentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PortalLayout>{children}</PortalLayout>
}
