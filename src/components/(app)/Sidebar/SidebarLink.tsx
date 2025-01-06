import Link, { type LinkProps } from 'next/link'

type Props = LinkProps & {
  href: string
  label: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}

export const SidebarLink = ({ href, label, icon: Icon, ...rest }: Props) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 rounded-xl px-4 py-3 font-medium text-foreground/85 text-sm transition-all hover:bg-primary/5 hover:text-foreground"
      {...rest}
    >
      <Icon className="size-5 lg:size-6" />
      {label}
    </Link>
  )
}
