import { Button } from '@/components/ui/button'
import { LoginForm } from '../_components/login-form'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="flex min-w-[28rem] flex-col space-y-4 rounded-lg bg-white p-4">
      <LoginForm />

      <div className="flex w-full flex-row items-center space-x-2">
        <hr className="h-px w-full border-none bg-gray-200" />
        <span className="flex w-1/3 justify-center align-text-top text-gray-400">
          or
        </span>
        <hr className="h-px w-full border-none bg-gray-200" />
      </div>

      <Button variant="secondary" className="w-full">
        Sign in with Google
      </Button>

      <p className="text-gray-600">
        Don&apos;t have an account?{' '}
        <Link className="font-bold text-accent" href="/register">
          Sign up
        </Link>
      </p>
    </div>
  )
}
