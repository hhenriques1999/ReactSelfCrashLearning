import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
import GuestDashboard from "./GuestDashboard";

export default function Dashboard({role}) {
    return (
        <div>
            {role === 'Admin' && <AdminDashboard/>}
            {role === 'User' && <UserDashboard/>}
            {role === 'Guest' && <GuestDashboard/>}
        </div>
    );
}