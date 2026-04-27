import { create } from 'zustand';

const useAuthStore = create((set) => ({
  name: null,
  email: null,
  token: null,

  setAuth: (data) => set({ 
    token: data.token, 
    email: data.email, 
    name: data.name, 
  }),

  logout: () => set({ email: null, token: null , name: null }),
}));

export default useAuthStore;