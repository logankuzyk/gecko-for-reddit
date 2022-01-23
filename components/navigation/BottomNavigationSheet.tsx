import React, { useRef, useMemo, useCallback } from "react";
import { View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { BottomSheetIcons } from "./BottomSheetIcons";

interface BottomNavigationSheetProps {
  children: React.ReactNode;
}

export const BottomNavigationSheet: React.FC<BottomNavigationSheetProps> = ({
  children,
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["10%", "60%"], []);
  const handleSheetChange = useCallback((index: number) => {
    console.log("handleSheetChange", index);
  }, []);

  return (
    <View>
      {children}
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
      >
        <View
          //not sure where to put the shadow styles...
          style={{
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,

            elevation: 12,
          }}
        >
          <GestureHandlerRootView>
            <BottomSheetIcons />
          </GestureHandlerRootView>
        </View>
      </BottomSheet>
    </View>
  );
};
