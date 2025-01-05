'use client'
import { LoadingIcon } from '@/components/common/icons'
import { Github01Icon, GoogleIcon } from '@/components/common/icons/social'
import { Button } from '@/components/ui/button'
import { onSignIn } from '@/server/actions/auth.action'
import type React from 'react'
import { useState, useTransition } from 'react'

export const OAuth = () => {
  const [pending, mutate] = useTransition()
  const [loading, setLoading] = useState({
    github: false,
    google: false,
  })

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    const provider = e.currentTarget.name as 'google' | 'github'
    setLoading((prev) => ({ ...prev, [provider]: true }))
    mutate(async () => {
      await onSignIn(provider)
    })
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <Button
        name="google"
        disabled={pending}
        variant={'secondary'}
        onClick={handleLogin}
      >
        {loading.google ? (
          <LoadingIcon className="fill-primary" />
        ) : (
          <GoogleIcon />
        )}
        Google
      </Button>
      <Button
        name="github"
        disabled={pending}
        variant={'secondary'}
        onClick={handleLogin}
      >
        {loading.github ? (
          <LoadingIcon className="fill-primary" />
        ) : (
          <Github01Icon />
        )}
        GitHub
      </Button>
    </div>
  )
}
