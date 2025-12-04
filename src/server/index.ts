import { serve } from "bun";
import index from "../frontend/index.html";
import { db } from "./db";
import { contacts } from "./db/schema";

const server = serve({
  routes: {
    // Serve index.html for all unmatched routes.
    "/*": index,

    "/api/contacts": {
      async GET() {
        const allContacts = await db.select().from(contacts);
        return Response.json(allContacts);
      },
    },
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
