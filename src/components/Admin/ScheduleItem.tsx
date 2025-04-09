import { FaClock } from "react-icons/fa";

const ScheduleItem = ({ date, event, time, status }: { date: string, event: string, time: string, status: string }) => {
    return (
        <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg shadow-sm">
            <div>
                <p className="text-gray-600 text-sm">{date}</p>
                <h3 className="text-lg font-semibold">{event}</h3>
                <p className="text-gray-500 text-sm flex items-center gap-1"><FaClock /> {time}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${status === "Upcoming" ? "bg-blue-100 text-blue-600" : status === "In Progress" ? "bg-yellow-100 text-yellow-600" : "bg-green-100 text-green-600"}`}>
                {status === "Upcoming" ? "📌 Akan Datang" : status === "In Progress" ? "⏳ Berlangsung" : "✅ Selesai"}
            </span>
        </div>
    );
};

export default ScheduleItem;
