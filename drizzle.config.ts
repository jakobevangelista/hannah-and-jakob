import { type Config } from "drizzle-kit";

import { env } from "@/env.mjs";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "mysql2",
  dbCredentials: {
    uri: "plsno",
  },
  tablesFilter: ["liftinglogic_*"],
} satisfies Config;
