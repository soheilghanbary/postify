'use client'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { MenuIcon } from 'lucide-react'
import { SidebarContent } from '../Sidebar/SidebarContent'
import { useState } from 'react'
import { DashboardCircleIcon } from '@/components/common/icons'

export const MobileMenu = () => {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="md:hidden [&_svg]:size-5"
        >
          <DashboardCircleIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'} className="w-72">
        <VisuallyHidden.Root>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Menu</SheetDescription>
          </SheetHeader>
        </VisuallyHidden.Root>
        <SidebarContent onLinkClick={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  )
}
