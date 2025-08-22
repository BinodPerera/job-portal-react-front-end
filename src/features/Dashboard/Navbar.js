export default function Navbar(props) {
  const img = "http://localhost:8080/uploads/"+props.image;
  return (
    <div className="h-16 bg-white shadow-md flex items-center justify-between px-6">
      <h2 className="text-md font-bold">{props.page}</h2>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">{props.username}</span>
        <img
          src={img}
          alt="User"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
}
