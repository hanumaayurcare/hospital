import { PortalLayout } from '@/components/layout/PortalLayout'

export default function PrescriptionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PortalLayout>{children}</PortalLayout>
}
