import { ColorWeight } from "../styles/colors";

export const isColorWeight = (weight: string): weight is ColorWeight =>
  weight === "50" ||
  weight === "100" ||
  weight === "200" ||
  weight === "300" ||
  weight === "400" ||
  weight === "500" ||
  weight === "600" ||
  weight === "700" ||
  weight === "800" ||
  weight === "900";
