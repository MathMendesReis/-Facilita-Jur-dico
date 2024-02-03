import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  rua: z.string().min(1, { message: 'A rua é obrigatória' }),
  numero: z.string().nullable(),
  bairro: z.string().min(1, { message: 'O bairro é obrigatório' }),
  cidade: z.string().min(1, { message: 'A cidade é obrigatória' }),
  estado: z.string().min(1, { message: 'O estado é obrigatório' }),
});


export type Schema = z.infer<typeof schema>


export function useCustomFormDialog() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  return {register, handleSubmit, errors, schema,reset}
};