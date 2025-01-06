import { SidebarContent } from './SidebarContent'

export const Sidebar = () => {
  return (
    <aside className="sticky top-0 hidden h-screen w-64 flex-shrink-0 bg-card p-2 md:inline-block">
      <SidebarContent />
    </aside>
  )
}
