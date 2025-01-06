'use client'
import { Search01Icon } from '@/components/common/icons'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { useQueryState } from 'nuqs'
import { Suspense, useState } from 'react'

export const SearchField = () => {
  const [query, setQuery] = useQueryState('q')
  const [text, setText] = useState(query || '')
  const router = useRouter()

  const searchHandle = () => {
    router.push(`/home?q=${text}`)
    setQuery(text)
  }

  return (
    <div className="relative flex w-full flex-1 items-center gap-4">
      <Search01Icon className="absolute left-3 size-4 text-foreground/55" />
      <Input
        type="text"
        placeholder="Search by title or url"
        className="bg-card pl-10 transition-all placeholder:text-foreground/55 focus-visible:bg-background"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            window.scrollTo(0, 0)
            e.currentTarget.blur()
            return text.trim() ? searchHandle() : setQuery(null)
          }
        }}
      />
    </div>
  )
}

export const SearchFieldModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={cn(
            'flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-foreground/75 text-xs/5 transition-all hover:bg-muted/40 hover:text-foreground'
            // isActive && 'text-primary'
          )}
        >
          <Search01Icon className="size-5 text-current" />
          Search
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Search by title & url</DialogTitle>
          <DialogDescription>
            Find what you're looking for quickly.
          </DialogDescription>
        </DialogHeader>
        <Suspense>
          <SearchField />
        </Suspense>
      </DialogContent>
    </Dialog>
  )
}
