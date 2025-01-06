'use client'
import { cn } from '@/lib/utils'
import { ArrowBigLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'

export const BackButton: React.FC<{
  label?: string
  href?: string
  className?: string
}> = ({ label, className, href }) => {
  const router = useRouter()
  const handleRouter = () => (href ? router.push(href) : router.back())

  return (
    <Button
      type="button"
      onClick={handleRouter}
      variant={'ghost'}
      className={cn('w-fit', className)}
    >
      <ArrowBigLeft />
      {label || 'Back'}
    </Button>
  )
}
