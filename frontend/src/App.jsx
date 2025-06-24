import Header from "./components/Header";
import Hero from "./components/Hero";
import SafetyTips from "./components/SafetyTips";
import GeoAlert from "./components/GeoAlert";
import Alerts from "./components/Alerts";
import EmergencyContactForm from "./components/EmergencyContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-pink-800 text-white">
      <div className="bg-gradient-radial from-white/10 to-transparent absolute inset-0 blur-3xl z-0" />
      <div className="relative z-10 space-y-10">
        <Header />
        <Hero />
        <SafetyTips />
        <GeoAlert />
        <Alerts />
        <EmergencyContactForm />
        <Footer />
      </div>
    </div>
  );
}
