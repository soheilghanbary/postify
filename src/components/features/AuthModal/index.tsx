'use client'
import { Login02Icon } from '@/components/common/icons'
import { TextLine } from '@/components/common/text-line'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { OAuth } from './OAuth'

type Props = {
  initialTrigger?: React.ReactNode
}

const AuthTrigger = (
  <Button fullRounded>
    <Login02Icon />
    Sign In
  </Button>
)

export function AuthModal({ initialTrigger }: Props) {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Dialog>
        <DialogTrigger asChild>{initialTrigger || AuthTrigger}</DialogTrigger>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Sign In your Account</DialogTitle>
            <DialogDescription>to use more features</DialogDescription>
          </DialogHeader>
          <TextLine text="Sign In with" />
          <OAuth />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>{initialTrigger || AuthTrigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Sign In your Account</DrawerTitle>
          <DrawerDescription>to use more features</DrawerDescription>
        </DrawerHeader>
        <div className="space-y-4 px-4">
          <TextLine text="Sign In with" />
          <OAuth />
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
