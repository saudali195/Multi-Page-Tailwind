export default function Contact() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 py-10">
      <h1 className="text-white text-3xl font-bold mb-10">Get In Touch</h1>
      <form className="w-full max-w-md space-y-6 bg-white p-8 rounded-lg shadow-lg">
        <input type="text" placeholder="First Name" className="input-field" required />
        <input type="text" placeholder="Last Name" className="input-field" required />
        <input type="email" placeholder="Email" className="input-field" required />
        <input type="number" placeholder="Phone Number" className="input-field" required />
        <textarea name="message" placeholder="Message" className="textarea" required></textarea>
        <button type="submit" className="border-black bg-black text-white py-2 px-4">Submit Now</button>
      </form>
    </div>
  );
}
