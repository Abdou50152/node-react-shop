import { FiHome, FiPlus, FiTruck, FiBox, FiShoppingBag, FiTag, FiLayers } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

  const tabs = [
    { id: '/dashboard', icon: <FiHome />, label: 'Tableau de bord' },
    { id: '/products', icon: <FiTag />, label: 'Products' },
    { id: '/categories', icon: <FiLayers />, label: 'Categories' },
    // { id: '/articles', icon: <FiPlus />, label: 'Articles' },
    { id: '/livraison', icon: <FiTruck />, label: 'Livraison' },
    { id: '/stock', icon: <FiBox />, label: 'Stock' },
    { id: '/Orders', icon: <FiShoppingBag />, label: 'Orders' }
  ];

  return (
    <nav className="bg-amber-700 text-amber-100 shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <NavLink
              key={tab.id}
              to={tab.id}
              className={({ isActive }) => 
                `flex items-center px-4 py-3 font-medium transition-colors ${isActive ? 'bg-amber-600 text-white' : 'hover:bg-amber-600/80'}`
              }
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
