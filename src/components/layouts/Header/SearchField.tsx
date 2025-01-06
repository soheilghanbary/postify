'use client'
import { Search01Icon } from '@/components/common/icons'
import { Input } from '@/components/ui/input'
import { useQueryState } from 'nuqs'
import { useState } from 'react'

export const SearchField = () => {
  const [query, setQuery] = useQueryState('q')
  const [text, setText] = useState(query || '')

  return (
    <div className="relative flex w-full flex-1 items-center gap-4">
      <Search01Icon className="absolute left-3 size-4 text-foreground/55" />
      <Input
        type="text"
        placeholder="Search by title or url"
        className="rounded-full bg-muted/40 pl-10 transition-all placeholder:text-foreground/55 focus-visible:bg-background"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            window.scrollTo(0, 0)
            e.currentTarget.blur()
            return text.trim() ? setQuery(text) : setQuery(null)
          }
        }}
      />
    </div>
  )
}
