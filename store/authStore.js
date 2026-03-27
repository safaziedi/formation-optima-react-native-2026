import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: null,
  token: null,

  // Action appelée après le succès du login
  setAuth: (data) => set({ 
    token: data.accessToken, 
    user: { email: data.email },
  }),

  logout: () => set({ user: null, token: null }),
}));

export default useAuthStore;