export const useCart = () => useState(() => []);
export const useAuth = () =>
  useState(() => ({
    isAuthenticated: false,
  }));
