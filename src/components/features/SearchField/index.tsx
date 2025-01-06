import { Search01Icon } from '@/components/common/icons'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { useQueryState } from 'nuqs'
import { useState } from 'react'

type SearchFieldProps = {
  onClose: () => void
}

export const SearchField = ({ onClose }: SearchFieldProps) => {
  const [query, setQuery] = useQueryState('q')
  const [text, setText] = useState(query || '')
  const router = useRouter()

  const searchHandle = () => {
    // setQuery(text.trim())
    router.push(`/?q=${text}`)
    onClose()
  }

  const handleClose = () => {
    setQuery(null)
    onClose()
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
            return text.trim().length > 2 ? searchHandle() : handleClose()
          }
        }}
      />
    </div>
  )
}
