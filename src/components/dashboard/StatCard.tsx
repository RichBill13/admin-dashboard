import type { LucideIcon } from "lucide-react";

interface StatCardProps {
    title: string;
    value: string;
    change: string;
    icon: LucideIcon;
    color: string;
}

export const StatCard = ({ title, value, change, icon: Icon, color}: StatCardProps) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex flex-col gap-4">
            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${color}`}>
                    <Icon size={24} />
                </div>
                <span className="text-green-500 text-xs font-bold bg-green-50 px-2 py-1 rounded-lg">
                    +{change}%
                </span>
            </div>
            <div>
                <p className="text-sm text-gray-500 font-medium">{title}</p>
                <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
            </div>
        </div>
    );
};