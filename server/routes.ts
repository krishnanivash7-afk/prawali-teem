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
      const { name, phone, location } = req.body;
      if (name && phone && location) {
        const lead = await storage.createLead({
          name,
          phone,
          location,
          source: req.body.source || "web"
        });
        res.status(200).json({ message: "Lead saved!" });
      } else {
        res.status(400).json({ error: "Missing data" });
      }
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
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
