import { pgTable, text, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: varchar("phone", { length: 15 }).notNull(),
  location: text("location").notNull(), // Punjab or Bihar
  source: text("source").default("web"), // 'web' or 'voice'
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertLeadSchema = createInsertSchema(leads).omit({ 
  id: true, 
  createdAt: true 
}).extend({
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  location: z.enum(["Punjab", "Bihar"], {
    errorMap: () => ({ message: "Location must be either Punjab or Bihar" })
  })
});

export type Lead = typeof leads.$inferSelect;
export type InsertLead = z.infer<typeof insertLeadSchema>;
