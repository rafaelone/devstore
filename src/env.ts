import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  APP_URL: z.string().url(),
});

const parsedEvn = envSchema.safeParse(process.env);

if (!parsedEvn.success) {
  console.log(
    'Invalid environment variables',
    parsedEvn.error.flatten().fieldErrors,
  );

  throw new Error('Invalid environment variables');
}

export const env = parsedEvn.data;
