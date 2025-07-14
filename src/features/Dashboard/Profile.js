import DashboardCard from "./DashboardCard";
import { Users, Activity, DollarSign } from "lucide-react";

export default function Profile() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <DashboardCard title="Users" value="1,230" icon={<Users />} />
      <DashboardCard title="Active Sessions" value="87" icon={<Activity />} />
      <DashboardCard title="Revenue" value="$4,230" icon={<DollarSign />} />
    </div>
  );
}
