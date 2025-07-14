import DashboardCard from "./DashboardCard";
import { Users, Activity, DollarSign } from "lucide-react";

export default function Settings(){
    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard title="Language" value="1,230" icon={<Users />} />
        <DashboardCard title="Theme" value="87" icon={<Activity />} />
        <DashboardCard title="Delete Account" value="$4,230" icon={<DollarSign />} />
        </div>
    );
}