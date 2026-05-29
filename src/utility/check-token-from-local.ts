export const checkTotken = (): {
  exist: boolean;
  tokenFromLocal: string | null;
} => {
  const tokenFromLocal = localStorage.getItem("uerToken");
  if (!tokenFromLocal) return { exist: false, tokenFromLocal: null };
  return {
    exist: true,
    tokenFromLocal,
  };
};
