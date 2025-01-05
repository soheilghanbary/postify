import { Button } from '@/components/ui/button'

export const FilterPostList = () => {
  return (
    <div className="mb-4 flex items-center gap-2">
      <Button variant={'outline'} size={'sm'}>
        Popular
      </Button>
      <Button variant={'outline'} size={'sm'}>
        Recent
      </Button>
      <Button variant={'outline'} size={'sm'}>
        Most Commented
      </Button>
    </div>
  )
}
