import {
  GithubIcon,
  Linkedin01Icon,
  NewTwitterIcon,
} from '@/components/common/icons/social'
import { ModeToggle } from '@/components/common/mode-toggle'
import { buttonVariants } from '@/components/ui/button'

export const SocialIcons = () => (
  <div className="flex items-center gap-1">
    <a
      target="_blank"
      rel="noreferrer"
      href="https://github.com/soheilghanbary"
      className={buttonVariants({ size: 'icon', variant: 'ghost' })}
    >
      <GithubIcon className="size-5 text-foreground" />
    </a>
    <a
      target="_blank"
      rel="noreferrer"
      href="https://x.com/soheil_prog"
      className={buttonVariants({ size: 'icon', variant: 'ghost' })}
    >
      <NewTwitterIcon className="size-5 text-foreground" />
    </a>
    <a
      target="_blank"
      rel="noreferrer"
      href="https://linkedin.com/in/soheilghanbary"
      className={buttonVariants({ size: 'icon', variant: 'ghost' })}
    >
      <Linkedin01Icon className="size-5 text-foreground" />
    </a>
    <ModeToggle />
  </div>
)

export const Footer = () => {
  return (
    <footer className="mt-4 border-t bg-card">
      <div className="container flex flex-col items-center justify-between gap-4 p-4 sm:flex-row">
        <p className="text-xs">
          Developed by{' '}
          <a
            href="https://soheilghanbary.ir/en"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-primary underline decoration-wavy underline-offset-4"
          >
            Soheil Ghanbary
          </a>
        </p>
        <SocialIcons />
      </div>
    </footer>
  )
}
