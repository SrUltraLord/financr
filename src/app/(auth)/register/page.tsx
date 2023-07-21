import { RegisterForm } from '../_components/register-form'

export default function RegisterPage() {
  return (
    <div className="grid h-screen w-full place-items-center">
      <div className="flex min-w-[28rem] flex-col space-y-4 rounded-lg bg-white p-4">
        <RegisterForm />
      </div>
    </div>
  )
}
