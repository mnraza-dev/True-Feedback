import { z } from 'zod';

export const verifySchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    verifyCode: z.string()
        .length(6, { message: 'Verify Code must be exactly 6 digits' })
});