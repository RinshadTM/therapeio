import { useDoctor } from "../context/DoctorContext";
const Appointment = () => {
  const { selectedDoctor } = useDoctor();

  if (!selectedDoctor) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>No doctor selected.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl  px-5 py-20">
      <h1 className="text-3xl font-bold">
        Book Appointment
      </h1>

      <div className="mt-8 flex items-center gap-5 rounded-2xl bg-white p-5 shadow">
        <img
          src={selectedDoctor.image}
          alt={selectedDoctor.name}
          className="h-24 w-24 rounded-full object-cover"
        />

        <div>
          <h2 className="text-xl font-bold">
            {selectedDoctor.name}
          </h2>

          <p className="text-gray-500">
            {selectedDoctor.post}
          </p>

          <p className="mt-1 text-sm text-gray-500">
            ⭐ {selectedDoctor.rating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Appointment;