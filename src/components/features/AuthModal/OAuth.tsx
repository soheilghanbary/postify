'use client'
import { LoadingIcon } from '@/components/common/icons'
import { GoogleIcon } from '@/components/common/icons/social'
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
    <Button
      name="google"
      disabled={pending}
      variant={'secondary'}
      onClick={handleLogin}
      className="w-full"
    >
      {loading.google ? (
        <LoadingIcon className="fill-primary" />
      ) : (
        <GoogleIcon />
      )}
      Sign In with Google
    </Button>
  )
}
