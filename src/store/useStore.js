import { create } from "zustand";
import createWeatherDataSlice from "./slices/createWeatherDataSlice";

const useStore = create((set, get) => ({
  ...createWeatherDataSlice(set, get),
}));

export default useStore;
