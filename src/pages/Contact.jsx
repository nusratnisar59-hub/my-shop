function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center">
        Contact Us
      </h1>

      <p className="text-center text-gray-600 mt-3">
        Hum se rabta karein
      </p>

      <form className="max-w-lg mx-auto mt-8 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="text"
          placeholder="Your Phone"
          className="w-full border rounded-lg px-4 py-3"
        />

        <textarea
          placeholder="Write your message..."
          rows="5"
          className="w-full border rounded-lg px-4 py-3"
        ></textarea>

        <button
          type="submit"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;