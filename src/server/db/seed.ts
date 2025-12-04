import { db } from "./index";
import { contacts } from "./schema";

const seedContacts = [
  { name: "Alice Johnson", email: "alice@example.com" },
  { name: "Bob Smith", email: "bob@example.com" },
  { name: "Carol Williams", email: "carol@example.com" },
];

console.log("Seeding database...");

await db.insert(contacts).values(seedContacts).onConflictDoNothing();

console.log("Seeded contacts:");
const allContacts = await db.select().from(contacts);
console.table(allContacts);
