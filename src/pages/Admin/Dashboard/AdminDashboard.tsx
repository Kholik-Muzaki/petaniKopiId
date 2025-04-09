import ScheduleItem from "../../../components/Admin/ScheduleItem";
import StatCard from "../../../components/Admin/StatCard";
import Layout from "../../../Layout/Layout";
import { FaNewspaper, FaVideo, FaBox, FaUsers, FaCalendarAlt } from "react-icons/fa";

const AdminDashboard = () => {
    return (
        <Layout>
            <div className="p-6">
                {/* Header */}
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Admin</h1>

                {/* Ringkasan Statistik */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard title="Total Artikel" count="120" icon={<FaNewspaper />} color="bg-blue-500" />
                    <StatCard title="Total Video" count="75" icon={<FaVideo />} color="bg-purple-500" />
                    <StatCard title="Total Produk" count="30" icon={<FaBox />} color="bg-green-500" />
                    <StatCard title="Total Pengguna" count="5,000" icon={<FaUsers />} color="bg-orange-500" />
                </div>

                {/* Jadwal Kegiatan */}
                <div className="bg-white shadow-md rounded-lg p-6 mt-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
                        <FaCalendarAlt className="text-green-500" /> Jadwal Kegiatan
                    </h2>

                    <div className="space-y-4">
                        <ScheduleItem date="25 Maret" event="Webinar: Rahasia Menyeduh Kopi" time="10:00 - 12:00 WIB" status="Upcoming" />
                        <ScheduleItem date="30 Maret" event="Upload Video Tutorial Baru" time="14:00 WIB" status="In Progress" />
                        <ScheduleItem date="5 April" event="Update Katalog Produk" time="09:00 WIB" status="Completed" />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AdminDashboard;
