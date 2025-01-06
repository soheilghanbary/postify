'use client'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { Moon02Icon, Sun03Icon } from './icons'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <Moon02Icon className="dark:-rotate-90 rotate-0 scale-100 transition-all dark:scale-0" />
      <Sun03Icon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
