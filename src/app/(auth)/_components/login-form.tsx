'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/shared/form'

const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'The email is required' })
    .email({ message: 'Invalid email' }),
  password: z.string().min(1, { message: 'The password is required' }),
})

type LoginFormSchema = z.infer<typeof loginFormSchema>

export function LoginForm() {
  const loginForm = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: undefined,
      password: undefined,
    },
    mode: 'all',
  })

  const onSubmit = (formValues: LoginFormSchema): void => {
    console.log({ formValues })
  }

  return (
    <Form {...loginForm}>
      <form
        className="flex flex-col space-y-6"
        onSubmit={() => loginForm.handleSubmit(onSubmit)}
      >
        <h1 className="text-center text-2xl font-extrabold">Welcome</h1>

        <div className="flex flex-col space-y-4">
          <FormField
            control={loginForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="jdoe@mail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={loginForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="supersecret" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full"
            disabled={!loginForm.formState.isValid}
          >
            Login
          </Button>
        </div>

        <div className="flex w-full flex-row items-center space-x-3">
          <hr className="h-px w-1/3 border-none bg-gray-200" />
          <span className="flex w-1/3 justify-center align-text-top text-gray-400">
            or login with
          </span>
          <hr className="h-px w-1/3 border-none bg-gray-200" />
        </div>

        <Button variant="secondary" className="w-full">
          Google
        </Button>
      </form>
    </Form>
  )
}
