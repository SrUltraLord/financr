import { LoginForm } from '../_components/login-form'

export default function LoginPage() {
  return (
    <div className="grid h-screen w-full place-items-center">
      <div className="flex min-w-[28rem] flex-col space-y-4 rounded-lg bg-white p-4">
        <LoginForm />
      </div>
    </div>
  )
}
