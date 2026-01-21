import { cronJobs } from "convex/server";
import { api } from "./_generated/api";

const crons = cronJobs();

// Daily sync at 00:00 UTC (midnight)
crons.daily(
  "sync-all-social-platforms",
  {
    hourUTC: 0, // Midnight UTC
    minuteUTC: 0,
  },
  api.socials.syncAllPlatforms
);

export default crons;
