import { Sidebar }  from  './components/layout/Sidebar';
import { Navbar } from './components/layout/Navbar';
import { StatCard } from './components/dashboard/StatCard';
import { Users, ShoppingBag, DollarSign, Activity} from "lucide-react";

function App() {
  return (
    //contener principal
    <div className="flex min-h-screen bg-admin-bg text-slate-900">
      {/*side bar doit etre a gauche*/}
      <Sidebar />
      {/*navbar et contenu*/}
      <div className="flex-1 flex flex-col">
      <Navbar />
      <main className="p-8 flex-1">
          <div className='mb-8'>
             <h2 className="text-2xl font-bold">Dashboard</h2>
             <p className='text-gray-500 text-sm'>Apercu de vos activites</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              <StatCard 
                title="Total Users"
                value="10,245"
                change="12"
                icon={Users}
                color="bg-blue-50 text-blue-600"
              />
              <StatCard 
                title="Total Orders"
                value="3,456"
                change="8"
                icon={ShoppingBag}
                color="bg-purple-50 text-purple-600"
              />
              <StatCard
                title="Total Revenue"
                value="$45,231"
                change='15'
                icon={DollarSign}
                color="bg-orange-50 text-orange-600" 
              />
              <StatCard 
                title="Active Now"
                value="156"
                change="5"
                icon={Activity}
                color="bg-green-50 text-green-600"
              />
          </div>
          {/*la nouvelle grille pour les charts*/}
          <div className='grid grid-cols-1  lg:grid-cols-3 gap-6'>
            <div className='lg:col-span-2 space-y-6'>
              {/*sales overview*/}
              <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-h-[360px]'>
                <h3 className='text-lg font-bold text-slate-800 mb-4 text-left'>Sales Overview</h3>
                <div className='h-full flex items-center justify-center border-2 border-dashed border-gray-100 rounded-xl'>
                  <p className='text-gray-400 italic'>Graphique a venir</p>
                </div>
              </div>
              {/*last orders*/}
              <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-h-[400px]'>
                <h3 className='text-lg font-bold text-slate-800 mb-4 text-left'>Last Orders</h3>
                <div className='h-full flex items-center justify-center border-2 border-dashed border-gray-100 rounded-xl'>
                  <p className='text-gray-400 italic'>Tableau a venir</p>
                </div>
              </div>
            </div>
            {/*colone droite*/}
            <div className='space-y-6'>
              {/*recent activity*/}
              <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-h-[400px]'>
                <h3 className='text-lg font-bold text-slate-800 mb-4 text-left'>Recent Activity</h3>
                <div className='h-full flex items-center justify-center border-2 border-dashed border-gray-100 rounded-xl'>
                  <p className='text-gray-400 italic'>Flux d'activites</p>
                </div>
              </div>
              {/*tasklist*/}
              <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-h-[350px]'>
                <h3 className='text-lg font-bold text-slate-800 mb-4 text-left'>Tasklist</h3>
                <div className='h-full flex items-center justify-center border-2 border-dashed border-gray-100 rounded-xl'>
                  <p className='text-gray-400 italic'>Liste des taches</p>
                </div>
              </div>
            </div>
          </div>
      </main>
    </div>
    </div>
  )
}

export default App;