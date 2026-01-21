import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Other tables here...

  socials: defineTable({
    follower_count: v.float64(),
    platform: v.string(),
    url: v.string(),
  }),
});