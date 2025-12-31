import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Edit, Trash2, FileText, Sparkles, Stethoscope, Search, LayoutDashboard, Image as ImageIcon } from 'lucide-react'

export default function AdminContentPage() {
  const contentCategories = [
    { title: 'Services', count: 24, icon: Sparkles, color: 'text-orange-500' },
    { title: 'Specialities', count: 8, icon: Stethoscope, color: 'text-blue-500' },
    { title: 'Diseases', count: 120, icon: LayoutDashboard, color: 'text-primary' },
    { title: 'Blog Posts', count: 45, icon: FileText, color: 'text-green-500' },
  ]

  const recentContent = [
    { id: 1, title: 'Abhyanga Massage Guide', category: 'Services', status: 'Published', date: 'Jan 02, 2026' },
    { id: 2, title: 'Understanding Vata Dosha', category: 'Blog', status: 'Draft', date: 'Jan 04, 2026' },
    { id: 3, title: 'Infertility Treatment', category: 'Diseases', status: 'Published', date: 'Dec 15, 2025' },
  ]

  return (
    <div className="py-12 bg-muted/20 min-h-screen">
      <div className="container space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
           <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">Content Management (CMS)</h1>
              <p className="text-lg text-muted-foreground font-medium">Control all public-facing clinical content and educational resources.</p>
           </div>
           <Button className="rounded-full px-8 font-bold shadow-lg shadow-primary/20 flex gap-2">
              <Plus className="h-5 w-5" /> Create New Entry
           </Button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {contentCategories.map((cat) => (
             <Card key={cat.title} className="border-none shadow-xl rounded-[2.5rem] bg-white hover:translate-y-[-5px] transition-transform">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                   <div className={`h-16 w-16 rounded-[1.5rem] bg-muted flex items-center justify-center ${cat.color}`}>
                      <cat.icon className="h-8 w-8" />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold italic">{cat.title}</h3>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{cat.count} Active Items</p>
                   </div>
                   <Button variant="ghost" size="sm" className="font-bold text-primary hover:bg-primary/5">Manage All</Button>
                </CardContent>
             </Card>
           ))}
        </div>

        {/* Recent Items / Table */}
        <Card className="border-none shadow-xl rounded-[2.5rem] overflow-hidden bg-white">
           <CardHeader className="p-8 border-b bg-muted/10 flex flex-row items-center justify-between">
              <CardTitle className="font-bold italic">Recently Modified Content</CardTitle>
              <div className="flex gap-4">
                 <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input className="bg-white rounded-lg pl-9 pr-4 py-2 text-xs font-bold outline-none shadow-sm" placeholder="Search content..." />
                 </div>
              </div>
           </CardHeader>
           <CardContent className="p-0">
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead className="bg-muted/5 text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] border-b">
                       <tr>
                          <th className="p-8">Title</th>
                          <th className="p-8">Category</th>
                          <th className="p-8">Date</th>
                          <th className="p-8">Status</th>
                          <th className="p-8 text-right">Actions</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-muted/30">
                       {recentContent.map((item) => (
                         <tr key={item.id} className="hover:bg-muted/5 transition-colors group">
                            <td className="p-8 font-bold text-lg italic group-hover:text-primary transition-colors">{item.title}</td>
                            <td className="p-8 font-bold text-muted-foreground text-sm uppercase tracking-widest">{item.category}</td>
                            <td className="p-8 text-sm font-medium">{item.date}</td>
                            <td className="p-8">
                               <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                                 item.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                               }`}>
                                  {item.status}
                               </span>
                            </td>
                            <td className="p-8 text-right">
                               <div className="flex justify-end gap-2 text-muted-foreground">
                                  <Button variant="ghost" size="icon" className="group-hover:text-primary"><Edit className="h-4 w-4" /></Button>
                                  <Button variant="ghost" size="icon" className="group-hover:text-red-500"><Trash2 className="h-4 w-4" /></Button>
                               </div>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </CardContent>
        </Card>
      </div>
    </div>
  )
}
