export default function Navbar() {
  return (
    <div className="h-16 bg-white shadow-md flex items-center justify-between px-6">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Welcome, Binod</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
}
