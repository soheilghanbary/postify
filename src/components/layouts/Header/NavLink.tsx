import { cn } from '@/lib/utils'
import Link from 'next/link'

type Props = {
  icon: any
  label: string
  href: string
}

export const NavLink = ({ icon: Icon, label, href }: Props) => {
  // const pathname = usePathname()
  const isActive = false

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-xs/5 transition-all hover:bg-muted/40',
        isActive && 'text-primary'
      )}
    >
      <Icon className="size-5 text-current" />
      {label}
    </Link>
  )
}
