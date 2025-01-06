'use client'
import { Search01Icon } from '@/components/common/icons'
import { SearchField } from '@/components/features/SearchField'
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
import { cn } from '@/lib/utils'
import { Suspense, useState } from 'react'

const SearchTrigger = (
  <button
    type="button"
    className={cn(
      'flex flex-col items-center justify-center rounded-lg py-2 text-foreground/75 text-xs/5 transition-all hover:bg-muted/40 hover:text-foreground md:flex-row md:gap-2 md:px-4',
      'gap-0.5 p-2 text-xs/5'
      // isActive && 'text-primary'
    )}
  >
    <Search01Icon className="size-5 text-current" />
    Search
  </button>
)

export const SearchFieldModal = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const [open, setOpen] = useState(false)
  return isDesktop ? (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{SearchTrigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Search by title & url</DialogTitle>
          <DialogDescription>
            Find what you're looking for quickly.
          </DialogDescription>
        </DialogHeader>
        <Suspense>
          <SearchField onClose={() => setOpen(false)} />
        </Suspense>
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{SearchTrigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Search by title & url</DrawerTitle>
          <DrawerDescription>
            Find what you're looking for quickly.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4">
          <Suspense>
            <SearchField onClose={() => setOpen(false)} />
          </Suspense>
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
