import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post(api.leads.create.path, async (req, res) => {
    try {
      const input = api.leads.create.input.parse(req.body);
      const lead = await storage.createLead(input);
      res.status(201).json(lead);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get(api.leads.list.path, async (req, res) => {
    try {
      const leads = await storage.getLeads();
      res.json(leads);
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Seed some data if empty
  const existingLeads = await storage.getLeads();
  if (existingLeads.length === 0) {
    await storage.createLead({
      name: "Demo User",
      phone: "1234567890",
      location: "Punjab",
      source: "web"
    });
  }

  return httpServer;
}
