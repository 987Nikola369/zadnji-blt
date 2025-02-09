import React from 'react';
import { TopNavigation, BottomNavigation } from './components/layout/Navigation';
import { CreatePost } from './components/post/CreatePost';
import { LoginForm } from './components/auth/LoginForm';
import { useAuthStore } from './store/auth';

function App() {
  const { user } = useAuthStore();

  return (
    <div className="min-h-screen bg-[#231F20] text-white">
      {!user ? (
        <div className="min-h-screen bg-[#231F20] text-white flex items-center justify-center p-4">
          <div className="w-full max-w-md p-8 bg-gray-900/50 backdrop-blur-sm rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-8">Rocket Football Academy</h1>
            <LoginForm />
          </div>
        </div>
      ) : (
        <>
          <TopNavigation />
          <main className="max-w-2xl mx-auto px-4 py-20">
            <CreatePost />
          </main>
          <BottomNavigation />
        </>
      )}
    </div>
  );
}

export default App