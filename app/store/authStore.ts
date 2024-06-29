import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type User = {
  token: string | null;
  isAuthenticated: boolean;
  username: string | null;
  profile: string | null;
  profileLimit: string | null;
  streaks: number;
  score: number;
  candy: number;
};
  
type AuthActions = {
  login: (token: string, user: string, profile: string) => void;
  logout: () => void;
};

type ProfileActions = {
  setProfile: (profile: string) => void;
};

type TaskActions = {
  setStreaks: (streaks: number) => void;
  setScore: (score: number) => void;
  setCandy: (candy: number) => void;
}

const useAuthStore = create<User & AuthActions & ProfileActions & TaskActions>()(
  persist((set) => ({
      token: null,
      isAuthenticated: false,
      username: null,
      profile: null,
      profileLimit: "1",
      streaks: 17,
      score: 57,
      candy: 0,
      login: (token: string, username: string, profile: string) => set({
        token: token, isAuthenticated: true, username: username, profile: profile
      }),
      logout: () => set({ token: null, isAuthenticated: false, username: null, profile: null }),
      setProfile: (profile: string) => set({ profile: profile, profileLimit: null }),
      setStreaks: (streaks: number) => set({ streaks: streaks }),
      setScore: (score: number) => set({ score: score }),
      setCandy: (candy: number) => set({ candy: candy }),
    }),
    { name: 'auth', getStorage: () => localStorage }
  )
);

export default useAuthStore;