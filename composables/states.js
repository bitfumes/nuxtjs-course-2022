export const useCart = () => useState(() => []);
export const useAuth = () =>
  useState(() => ({
    isAuthenticated: false,
  }));

export const usePageVisitCount = () => useState(() => 0);
