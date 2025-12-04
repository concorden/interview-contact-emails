# Email Viewer - Technical Interview Task

## Background

This is a simple contacts application that displays a list of contacts. When clicking "Show emails" on a contact, it should display all emails exchanged with that contact.
The app integrates with Microsoft Graph API to fetch emails. A mock implementation is provided in `src/server/mock/graphApi.ts`.

## Your Task

Implement the "Show emails" feature so that clicking the button displays all emails exchanged with that contact (both sent and received).

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

- The mock Graph API simulates real-world constraints - treat it as an external service
- The database uses SQLite via Drizzle ORM
- Feel free to modify the schema, add API endpoints, or restructure as needed
