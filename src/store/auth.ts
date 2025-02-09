import { create } from 'zustand';
import { User } from '../types';

interface AuthState {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: async (email: string, password: string) => {
    // Simulate API call
    const mockUser: User = {
      id: '1',
      username: 'demo_user',
      email,
      password,
      joinDate: new Date(),
      profilePicture: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=150',
    };
    set({ user: mockUser });
  },
  register: async (username: string, email: string, password: string) => {
    // Simulate API call
    const newUser: User = {
      id: '1',
      username,
      email,
      password,
      joinDate: new Date(),
    };
    set({ user: newUser });
  },
  logout: () => set({ user: null }),
}));