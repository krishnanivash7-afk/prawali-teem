import { z } from 'zod';
import { insertLeadSchema, leads } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
  unauthorized: z.object({
    message: z.string(),
  }),
};

export const api = {
  leads: {
    create: {
      method: 'POST' as const,
      path: '/api/leads' as const,
      input: insertLeadSchema,
      responses: {
        201: z.custom<typeof leads.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
    list: {
      method: 'GET' as const,
      path: '/api/leads' as const,
      // Simple auth check via query param or header for the "simple frontend password check"
      // In a real app we'd use proper auth, but user requested simple frontend check.
      // We'll just list them all for now and let frontend handle the "gate".
      responses: {
        200: z.array(z.custom<typeof leads.$inferSelect>()),
      },
    },
  },
};

export type LeadInput = z.infer<typeof api.leads.create.input>;
export type LeadResponse = z.infer<typeof api.leads.create.responses[201]>;
export type InsertLead = LeadInput;
