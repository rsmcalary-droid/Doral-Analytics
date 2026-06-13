export type MessageStatus = "new" | "replied" | "archived";

export type ContactMessage = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  status: MessageStatus;
  replied_at: string | null;
  replied_by: string | null;
  reply_body: string | null;
};
