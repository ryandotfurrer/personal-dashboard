import { query } from "./_generated/server";

export const listSocials = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("socials").collect();
  },
});