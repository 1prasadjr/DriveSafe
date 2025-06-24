import { useState } from "react";

export default function EmergencyContactForm() {
  const [yourName, setYourName] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  const data = { yourName, contactName, contactNumber };

  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/emergency-contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data), // ✅ fixed
    });

    if (res.ok) {
      setSubmitted(true);
      setYourName("");
      setContactName("");
      setContactNumber("");
    } else {
      alert("⚠️ Submission failed. Try again.");
    }
  } catch (err) {
    alert("🚫 Server error. Please check backend.");
    console.error("Fetch error:", err);
  }
};

  return (
    <section className="max-w-2xl mx-auto px-4">
      <div className=" bg-opacity-5 backdrop-blur-md rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-cyan-300 mb-7">
          📞 Emergency Contact Info
        </h2>

        {submitted ? (
          <p className="text-green-300 font-light">
            ✅ Emergency info successfully submitted !!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-white mb-1">Your Name</label>
              <input
                type="text"
                value={yourName}
                onChange={(e) => setYourName(e.target.value)}
                placeholder="Enter your name"
                required
                className="w-full p-2 bg-purple-900/60 text-white border border-pink-300 rounded-md placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div>
              <label className="block text-sm text-white mb-1">Emergency Contact Name</label>
              <input
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Enter emergency contact name"
                required
                className="w-full p-2 bg-purple-900/60 text-white border border-pink-300 rounded-md placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div>
              <label className="block text-sm text-white mb-1">Emergency Contact Number</label>
              <input
                type="tel"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                placeholder="Enter contact number"
                required
                className="w-full p-2 bg-purple-900/60 text-white border border-pink-300 rounded-md placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-bold rounded-full hover:scale-105 transition"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
