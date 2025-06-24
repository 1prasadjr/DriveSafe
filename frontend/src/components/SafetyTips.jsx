export default function SafetyTips() {
  const tips = [
    "Always wear a seatbelt.",
    "Avoid mobile usage while driving.",
    "Do not drink and drive.",
    "Keep emergency numbers handy.",
    "Ensure regular vehicle maintenance.",
  ];

  return (
    <section className="max-w-3xl mx-auto bg-purple-800/60 backdrop-blur rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-bold text-pink-100 mb-4"> Top Driver Safety Tips</h2>
      <ul className="list-disc list-inside space-y-2 text-white text-1xl">
        {tips.map((tip, i) => (
          <li key={i}>{tip}</li>
        ))}
      </ul>
    </section>
  );
}
