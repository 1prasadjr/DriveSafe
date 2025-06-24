export default function Alerts() {
  const alerts = [
    "⚠️ Heavy rain expected in Mumbai.",
    "🚧 Roadblock on NH - avoid delays.",
    "✔️ Vehicle servicing reminder: June 28.",
  ];

  return (
    <section className="max-w-3xl mx-auto bg-purple-900/50 rounded-xl p-6 shadow">
      <h2 className="text-xl font-semibold text-pink-100 mb-3">Recent Alerts</h2>
      <ul className="text-sm space-y-1 text-white">
        {alerts.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </section>
  );
}
