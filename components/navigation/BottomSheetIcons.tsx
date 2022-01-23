import React, { useRef } from "react";
import { Dimensions } from "react-native";
import { DragSortableView } from "react-native-drag-sort";

import { NavigationIcon } from "./NavigationIcon";

interface BottomSheetIconsProps {}

export const BottomSheetIcons: React.FC<BottomSheetIconsProps> = ({}) => {
  const sortableViewRef = useRef<DragSortableView>(null);
  const icons = [{ name: "profile" }, { name: "hi" }, { name: "anotherOne" }];
  const parentWidth = Dimensions.get("window").width;
  const childSize = 64;

  const handleDragStart = () => {
    console.log("drag start");
  };

  const handleDragEnd = () => {
    console.log("drag end");
  };

  const handleClickItem = () => {
    console.log("click item");
  };

  return (
    <DragSortableView
      ref={sortableViewRef}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onClickItem={handleClickItem}
      sortable={true}
      isDragFreely={true}
      dataSource={icons}
      parentWidth={parentWidth}
      childrenHeight={childSize}
      childrenWidth={childSize}
      renderItem={(item) => (
        <NavigationIcon
          name={item.name}
          onLongPress={() => {}}
          onPress={() => {}}
          height={childSize}
          width={childSize}
        >
          <></>
        </NavigationIcon>
      )}
    />
  );
};
