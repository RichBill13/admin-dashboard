import { LayoutDashboard, Users, ShoppingCart, Package, BarChart3, Settings, LogOut } from "lucide-react";

//ici je mets la liste des elements du sidebar
const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true},
    { icon: Users, label: 'Users'},
    { icon: ShoppingCart, label: 'Orders'},
    { icon: Package, label: 'Products'},
    { icon: BarChart3, label: 'Analytics'},
    { icon: Settings, label: 'Settings'},
];

export const Sidebar = () => {
    return (
        <aside className="w-64 h-screen bg-admin-sidebar text-white min-h-screen flex flex-col p-6 sticky top-0">
            <div className="flex items-center gap-3 mb-10 px-2">
                <div className="p-2 bg-blue-500 rounded-lg">
                    <LayoutDashboard size={24} />
                </div>
                <h1 className="text-xl font-bold">Admin Dashboard</h1>
            </div>

            {/* on utulise le .map()*/}
            <nav className="flex-1">
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-colors mb-1
                            ${item.active ? 'bg-blue-600' : 'hover:bg-white/10'}`}>
                                <item.icon size={20} />
                                <span className="font-medium">{item.label}</span>
                            </div>
                ))}
            </nav>
            
            <button className="flex items-center gap-4 p-3 mt-auto bg-white/10 rounded-lg hover:bg-red-500 transition-colors">
                <LogOut size={20} />
                <span>Logout</span>
            </button>
        </aside>
    );
};