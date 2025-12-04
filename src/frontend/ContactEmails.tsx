interface ContactEmailsProps {
  contactId: number;
  contactName: string;
  contactEmail: string;
  onClose: () => void;
}

export function ContactEmails({ contactId, contactName, contactEmail, onClose }: ContactEmailsProps) {

  return (
    <div className="mt-6 p-4 border rounded">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Emails with {contactName}</h2>
        <button
          onClick={onClose}
          className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          Close
        </button>
      </div>

      <p className="text-gray-400">
        Email: {contactEmail}
      </p>

      <div>Show emails exchanged with this contact here</div>
    </div>
  );
}
