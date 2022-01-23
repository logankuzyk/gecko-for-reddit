import React, { useRef, useMemo, useCallback } from "react";
import { View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

import { Paragraph } from "../../typography/Paragraph";

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
          <Paragraph>hello</Paragraph>
        </View>
      </BottomSheet>
    </View>
  );
};
