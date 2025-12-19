# Email Viewer - Technical Interview Task

## The Scenario

You're working on an internal tool that helps users manage their email communications. The application connects to Microsoft Graph API to access a user's mailbox and displays email conversations with their contacts.

**Important context:**
- This simulates a real-world integration with Microsoft Graph API - the mock in `src/server/mock/graphApi.ts` behaves like the actual external service would (including response times and data structure)
- The application represents a **single user's mailbox** (think: "my emails") - all messages are either sent by or received by this user
- The user's email is `me@company.com`
- The mailbox contains ~1000 messages exchanged with various contacts over time

Currently, the app displays a list of contacts. The "Show emails" button exists but doesn't actually show any emails yet.

## Your Task

Implement the "Show emails" feature: when a user clicks the button, display all emails exchanged with that contact (both sent and received, in chronological order).

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) v1.0 or higher

### Setup

```bash
bun install
bun run dev
```

The app will be available at http://localhost:3000

### Available Commands

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server with hot reload |
| `bunx drizzle-kit push` | Push schema changes to the database |
| `bunx drizzle-kit studio` | Open Drizzle Studio to inspect the database |

## Notes

- **Treat the mock Graph API as if it were the real Microsoft Graph API** - it's an external service with real-world characteristics (network latency, data volume, etc.)
- The database uses SQLite via Drizzle ORM
- Feel free to modify the schema, add API endpoints, or restructure as needed
- Think about how this would work in production with real users
