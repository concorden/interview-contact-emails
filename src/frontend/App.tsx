import { useState, useEffect } from "react";
import "./index.css";
import { ContactEmails } from "./ContactEmails";

interface Contact {
  id: number;
  name: string;
  email: string;
}

export function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  useEffect(() => {
    fetch("/api/contacts")
      .then((res) => res.json())
      .then((data) => {
        setContacts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Contacts</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Name</th>
            <th className="text-left py-2">Email</th>
            <th className="py-2"></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id} className="border-b">
              <td className="py-2">{contact.name}</td>
              <td className="py-2">{contact.email}</td>
              <td className="py-2 text-right">
                <button
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => setSelectedContact(contact)}
                >
                  Show emails
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedContact && (
        <ContactEmails
          contactId={selectedContact.id}
          contactName={selectedContact.name}
          contactEmail={selectedContact.email}
          onClose={() => setSelectedContact(null)}
        />
      )}
    </div>
  );
}

export default App;
