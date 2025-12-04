/**
 * ============================================================================
 * MOCK MICROSOFT GRAPH API - DO NOT MODIFY
 * ============================================================================
 * This file simulates the Microsoft Graph API /me/messages endpoint.
 * Treat this as an external service - no modifications allowed.
 * ============================================================================
 */

import { MOCK_MESSAGES, type Message } from "./_messageData";

export type { Message };

export interface MessagesResponse {
  value: Message[];
}

export function getMessages(): MessagesResponse {
  return { value: MOCK_MESSAGES };
}
