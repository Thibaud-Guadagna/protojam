function Contact() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const firstname = form.firstname.value;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = form.email.value;
    const message = form.message.value;

    console.log("Prénom :", firstname);
    console.log("Nom :", name);
    console.log("Email :", email);
    console.log("Message :", message);

    form.reset();
  };


  return (
    <main className="min-h-screen flex items-center justify-center #ffedbb">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Contactez-nous</h2>

        <input
          type="text"
          name="firstname"
          placeholder="Votre prénom"
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Votre email"
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        <textarea
          name="message"
          placeholder="Votre message"
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition"
        >
          Envoyer
        </button>
      </form>
    </main>
  );
}

export default Contact;
