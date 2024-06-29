import { create } from "zustand";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { StorageValue, persist } from "zustand/middleware";

type TState = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
};
const useStore = create<TState>()(
  persist(
    (set) => ({
      // loading
      loading: false,
      setLoading: (loading) => set((state) => ({ ...state, loading })),
    }),
    {
      name: "store",
      storage: {
        // Get persist storage
        getItem(name: string): StorageValue<unknown> {
          return JSON.parse(getCookie(name) || ""); // get from storage however you want
        },
        // Set persist storage
        async setItem(
          name: string,
          storageValue: StorageValue<unknown>
        ): Promise<void> {
          setCookie(name, JSON.stringify(storageValue));
        },
        //  Remove persist storage
        async removeItem(name: string): Promise<void> {
          deleteCookie(name);
        },
      },
    }
  )
);

export default useStore;
