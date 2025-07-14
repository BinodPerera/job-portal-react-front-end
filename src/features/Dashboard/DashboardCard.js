export default function DashboardCard({ title, value, icon }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4">
      <div className="text-3xl text-blue-500">{icon}</div>
      <div>
        <p className="text-gray-500">{title}</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  );
}
