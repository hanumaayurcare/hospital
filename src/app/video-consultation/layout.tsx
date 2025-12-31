import { PortalLayout } from '@/components/layout/PortalLayout'

export default function VideoConsultationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PortalLayout>{children}</PortalLayout>
}
