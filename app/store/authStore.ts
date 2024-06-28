import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type User = {
  token: string | null;
  isAuthenticated: boolean;
  username: string | null;
  profile: string | null;
};
  
type AuthActions = {
  login: (token: string, user: string, profile: string) => void;
  logout: () => void;
};

type ProfileActions = {
  setProfile: (profile: string) => void;
};

const useAuthStore = create<User & AuthActions & ProfileActions>()(
  persist((set) => ({
      token: null,
      isAuthenticated: false,
      username: null,
      profile: null,
      login: (token: string, username: string, profile: string) => set({
        token: token, isAuthenticated: true, username: username, profile: profile
      }),
      logout: () => set({ token: null, isAuthenticated: false, username: null, profile: null }),
      setProfile: (profile: string) => set({ profile: profile }),
    }),
    { name: 'auth', getStorage: () => localStorage }
  )
);

export default useAuthStore;