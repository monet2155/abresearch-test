import { atom } from "recoil";

//햄버거 메뉴 상태
export const currentExperimentState = atom({
  key: "currentExperiment",
  default: 0,
});
