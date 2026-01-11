import { Search, Bell, Mail, ChevronDown} from 'lucide-react';

export const Navbar = () => {
    return (
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-10">
            {/* Bare de recherche (a gauche) */}
            <div className="flex items-center bg-gray-100 border border-gray-100 px-4 py-2 rouded-full w-full max-w-xs transition-all focus-within:ring-2 focus-within:ring-blue-100 ">
                <Search size={16} className="text-gray-400" />
                <input 
                    type = "text"
                    placeholder='Search...'
                    className='bg-transparent border-none focus:outline-none ml-3 text-sm w-full placeholder:text-gray-400'
                />
            </div>
            {/*Action des users*/}
            <div className='flex items-center gap-8'>
                {/*icone de notif*/}
                <div className='flex items-center gap-5 text-gray-500'>
                    <div className='relative cursor-pointer hover:text-blue-600 transition-colors'>
                        <Bell size={20} />
                        <span className='absolute -top-1.5 -right-1.5 bg-red-500 text-[10px] text-white w-4 h-4 rounded-full flex items-center justify-center border-2 border-white'>3</span>
                    </div>
                    <Mail size={20} className='cursor-pointer hover:text-blue-600 transition-colors' />
                </div>
                {/*profil*/}
                <div className='flex item-center gap-3 border-l border-gray-100 pl-8 cursor-pointer group'>
                    <div className='relative'>
                    <img 
                        src="https://ui-avatars.com/api/?name=Admin&background=0D8ABC&color=fff"
                        alt="avatar"
                        className='w-10 h-10 rounded-full border-2 border-transition group-hover:border-blue-500 transition-all'
                    />
                    <span className='absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-white rounded-full'></span>
                    </div>
                <div className='hidden lg:block text-left'>
                    <p className='text-sm font-bold text-slate-700 leading-none'>Admin</p>
                    <p className='text-[11px] text-gray-400 mt-1'>Super Admin</p>
                </div>
                <ChevronDown size={14} className='text-gray-400 group-hover:text-blue-500 transition-colors' />
            </div>
            </div>
        </header>
    );
};