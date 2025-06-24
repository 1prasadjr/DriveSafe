export default function GeoAlert() {
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        alert(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
      },
      () => {
        alert("Unable to retrieve your location.");
      }
    );
  };

  return (
    <section className="max-w-3xl mx-auto px-4">
      <p className="mb-2 text-1xl"> Enable location to send alerts if unsafe.</p>
      <button
        onClick={getLocation}
        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-bold hover:scale-105 transition"
      >
        Get My Location
      </button>
    </section>
  );
}
