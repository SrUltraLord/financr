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

const registerFormSchema = z.object({
  name: z.string().min(1, { message: 'The name is required' }),
  email: z
    .string()
    .min(1, { message: 'The email is required' })
    .email({ message: 'Invalid email' }),
  password: z.string().min(1, { message: 'The password is required' }),
})

type RegisterFormSchema = z.infer<typeof registerFormSchema>

export function RegisterForm() {
  return <h1>Hello from register form </h1>
}
