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

          <div className="flex w-full flex-col space-y-2">
            <FormField
              control={loginForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="supersecret"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex w-full place-content-end">
              <span className="text-xs text-gray-500">
                Forgot your password?
              </span>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={!loginForm.formState.isValid}
          >
            Sign in
          </Button>
        </div>
      </form>
    </Form>
  )
}
