import { sql } from "drizzle-orm";
import { pgTable, text, varchar, real, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export interface PriceDataPoint {
  date: string;
  price: number;
}

export interface CompetitorPrices {
  [competitorName: string]: PriceDataPoint[];
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  description: string;
  category: string;
  image: string;
  greenjeevaPrice: PriceDataPoint[];
  competitors: CompetitorPrices;
  currentPrice: number;
  weeklyChange: number;
  pricePosition: number;
}

export interface MarketInsight {
  totalProducts: number;
  competitorsTracked: number;
  weeklyUpdates: number;
  nextUpdate: string;
  avgPriceChange: number;
  topDrops: Array<{ name: string; change: number }>;
  topIncreases: Array<{ name: string; change: number }>;
}

export interface AggregatePriceData {
  dates: string[];
  greenjeevaAvg: number[];
  marketAvg: number[];
}
