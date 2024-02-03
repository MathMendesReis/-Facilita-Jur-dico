import { z } from 'zod'

const envSchema = z.object({
    BASE_URL : z.string()
})

const parsEnv = envSchema.safeParse(process.env)

if (!parsEnv.success) {
  console.log(
    'Invalid enviroment variables',
    parsEnv.error.flatten().fieldErrors,
  )

  throw new Error('Invalid enviroment variables')
}

export const env = parsEnv.data