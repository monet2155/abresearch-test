import { atom } from "recoil";

export const currentExperimentState = atom({
  key: "currentExperiment",
  default: -1,
});
