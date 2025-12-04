/**
 * ============================================================================
 * INTERNAL - DO NOT MODIFY OR IMPORT DIRECTLY
 * ============================================================================
 */

export interface Message {
  id: string;
  from: string;
  to: string;
  subject: string;
  body: string;
  receivedAt: string;
}

const MY_EMAIL = "me@company.com";

const CONTACTS = [
  { name: "Alice Johnson", email: "alice@example.com" },
  { name: "Bob Smith", email: "bob@example.com" },
  { name: "Carol Williams", email: "carol@example.com" },
] as const;

const SUBJECTS = [
  "Quick question",
  "Follow up",
  "Meeting tomorrow",
  "Project update",
  "Re: Your request",
  "Checking in",
  "Document review",
  "Schedule change",
  "Action required",
  "FYI",
  "Thanks!",
  "Re: Meeting notes",
  "Urgent: Please review",
  "Weekly sync",
  "Feedback needed",
] as const;

const BODIES = [
  "Hey, just wanted to check in on this.",
  "Sounds good, let's proceed.",
  "Can we reschedule to next week?",
  "Please see attached.",
  "Thanks for sending this over.",
  "I'll review and get back to you.",
  "Let me know if you have any questions.",
  "Confirmed, see you then.",
  "Can you take a look when you get a chance?",
  "Noted, thanks for the update.",
  "I'll handle this today.",
  "Great work on this!",
  "Let's discuss tomorrow.",
  "Following up on our conversation.",
  "Here's the info you requested.",
] as const;

function seededRandom(seed: number) {
  return () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };
}

function generateMockMessages(): Message[] {
  const random = seededRandom(42);
  const messages: Message[] = [];

  const baseDate = new Date("2024-12-01T09:00:00Z");

  for (let i = 0; i < 1000; i++) {
    const contact = CONTACTS[Math.floor(random() * CONTACTS.length)]!;
    const isInbound = random() > 0.5;
    const subject = SUBJECTS[Math.floor(random() * SUBJECTS.length)]!;
    const body = BODIES[Math.floor(random() * BODIES.length)]!;

    const hoursOffset = Math.floor(random() * 720);
    const receivedAt = new Date(baseDate.getTime() - hoursOffset * 60 * 60 * 1000);

    messages.push({
      id: `msg-${String(i + 1).padStart(3, "0")}`,
      from: isInbound ? contact.email : MY_EMAIL,
      to: isInbound ? MY_EMAIL : contact.email,
      subject,
      body,
      receivedAt: receivedAt.toISOString(),
    });
  }

  return messages.sort(
    (a, b) => new Date(b.receivedAt).getTime() - new Date(a.receivedAt).getTime()
  );
}

export const MOCK_MESSAGES = generateMockMessages();
