import { z } from 'zod'

const envSchema = z.object({
    DB_FILE_PATH: z.string(),
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