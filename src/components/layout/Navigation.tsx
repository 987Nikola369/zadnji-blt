import React from 'react';
import { Bell, Home, MessageCircle, Users, LogOut } from 'lucide-react';
import { useAuthStore } from '../../store/auth';

export const TopNavigation: React.FC = () => {
  const { user, logout } = useAuthStore();

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-[#231F20]/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Rocket Football Academy" className="h-8 w-8" />
          <span className="text-white font-bold">Rocket Football Academy</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-white transition-colors">
            <Bell size={20} />
          </button>
          
          <div className="flex items-center space-x-2">
            <img
              src={user?.profilePicture || 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=150'}
              alt={user?.username}
              className="h-8 w-8 rounded-full object-cover"
            />
            <button
              onClick={logout}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const BottomNavigation: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-[#231F20]/95 backdrop-blur-sm border-t border-gray-800">
      <div className="grid grid-cols-4 h-full">
        <button className="flex flex-col items-center justify-center text-gray-400 hover:text-[#E41E12] transition-colors">
          <Home size={20} />
          <span className="text-xs mt-1">Home</span>
        </button>
        
        <button className="flex flex-col items-center justify-center text-gray-400 hover:text-[#E41E12] transition-colors">
          <Users size={20} />
          <span className="text-xs mt-1">Academy</span>
        </button>
        
        <button className="flex flex-col items-center justify-center text-gray-400 hover:text-[#E41E12] transition-colors">
          <Users size={20} />
          <span className="text-xs mt-1">Directory</span>
        </button>
        
        <button className="flex flex-col items-center justify-center text-gray-400 hover:text-[#E41E12] transition-colors">
          <MessageCircle size={20} />
          <span className="text-xs mt-1">Messages</span>
        </button>
      </div>
    </nav>
  );
};