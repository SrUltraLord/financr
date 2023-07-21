'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/shared/form'
import { Button } from '@/components/ui/button'

const registerFormSchema = z
  .object({
    name: z.string().min(1, { message: 'The name is required' }),
    email: z
      .string()
      .min(1, { message: 'The email is required' })
      .email({ message: 'Invalid email' }),
    password: z.string().min(4, { message: 'The password is required' }),
    passwordConfirmation: z
      .string()
      .min(4, { message: 'Please confirm your password' }),
  })
  .superRefine(({ password, passwordConfirmation }, ctx) => {
    if (password === passwordConfirmation) return

    ctx.addIssue({
      code: 'custom',
      message: 'Passwords do not match',
    })
  })

type RegisterFormSchema = z.infer<typeof registerFormSchema>

export function RegisterForm() {
  const registerForm = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    mode: 'all',
  })

  return (
    <Form {...registerForm}>
      <h1 className="text-center text-2xl font-extrabold">
        Start using Financr
      </h1>

      <FormField
        control={registerForm.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input type="text" placeholder="John" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={registerForm.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="text" placeholder="your@mail.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={registerForm.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="secret" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={registerForm.control}
        name="passwordConfirmation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Confirm your password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="secret" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="w-full pt-4">
        <Button
          type="submit"
          className="w-full"
          disabled={!registerForm.formState.isValid}
        >
          Register
        </Button>
      </div>
    </Form>
  )
}
