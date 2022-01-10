import React from "react";

import { RootDrawerScreenView } from "./view";

interface RootDrawerScreenControllerProps {
  // navigation?: NativeStackNavigationProp<RootStackParamList, "RootDrawer">;
}

export const RootDrawerScreenController: React.FC<
  RootDrawerScreenControllerProps
> = () => {
  return <RootDrawerScreenView />;
};
