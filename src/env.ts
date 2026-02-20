import { z } from 'zod'
import { createEnv } from '@t3-oss/env-core'

export const env = createEnv({
  clientPrefix: 'VITE_',
  client: {
    VITE_API_URL: z.url(),
    VITE_APP_NAME: z.string().min(1).default('SpaceBook'),
  },
  runtimeEnv: import.meta.env,
})
