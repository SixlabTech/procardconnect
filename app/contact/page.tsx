"use client";

interface ContactProps {}

const ContactPage: React.FC<ContactProps> = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    });
  };

  return (
    <div className="w-full min-h-screen bg-primary flex items-center justify-center p-4">
      <div className="w-full max-w-[800px] bg-white rounded-[20px] p-8 box-shadow">
        <h2 className="text-4xl font-bold text-center mb-6 text-gradient">
          Contactez-nous
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Nom</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Votre message..."
            />
          </div>

          <button
            type="submit"
            className="w-full p-4 bg-blue-gradient text-white rounded-lg hover:bg-blue-700"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
