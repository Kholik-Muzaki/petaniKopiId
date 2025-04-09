const StatCard = ({ title, count, icon, color }: { title: string, count: string, icon: JSX.Element, color: string }) => {
    return (
        <div className={`p-6 ${color} text-white rounded-lg shadow-md flex items-center gap-4`}>
            <div className="text-4xl">{icon}</div>
            <div>
                <p className="text-lg">{title}</p>
                <h2 className="text-2xl font-bold">{count}</h2>
            </div>
        </div>
    );
};

export default StatCard;
