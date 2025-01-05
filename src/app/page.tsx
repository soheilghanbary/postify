import { FilterPostList } from '@/components/features/FilterPostList'
import { AllPosts } from '@/components/features/PostList'
import { TopUsers } from '@/components/features/UserList'
import { SocialIcons } from '@/components/layouts/Footer'
import { Separator } from '@/components/ui/separator'
import { Suspense } from 'react'

export default function Page() {
  return (
    <>
      <FilterPostList />
      <div className="grid gap-4 md:grid-cols-3">
        <div className="col-span-2">
          <Suspense>
            <AllPosts />
          </Suspense>
        </div>
        <div className="col-span-1 hidden space-y-4 md:inline">
          <TopUsers />
          <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-4 text-foreground/75 text-xs">
            <p>
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
            <p>All rights reserved © 2025</p>
            <Separator />
            <SocialIcons />
          </div>
        </div>
      </div>
    </>
  )
}
