import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Other tables here...

  socials: defineTable({
    follower_count: v.float64(), // Free tier metric (all platforms)
    platform: v.string(),
    url: v.string(),
    // New optional fields:
    subscriber_count: v.optional(v.float64()), // Paid tier metric (Twitch only)
    profile_url: v.optional(v.string()), // Explicit profile URL
    last_updated: v.optional(v.number()), // Unix timestamp
  }).index("by_platform", ["platform"]),

  twitchOAuth: defineTable({
    access_token: v.string(),
    refresh_token: v.string(),
    expires_at: v.number(), // Unix timestamp
    scope: v.string(), // Space-delimited scopes
    token_type: v.string(), // "bearer"
  }),

  twitchOAuthState: defineTable({
    state: v.string(), // The state string
    expires_at: v.number(), // Unix timestamp when state expires
  }),
});
