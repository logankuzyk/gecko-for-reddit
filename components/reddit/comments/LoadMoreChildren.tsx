import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

import { Comment } from "./Comment";
import { MoreChildren } from "../../../types/reddit";
import { useMoreChildren } from "../../../hooks/useMoreChildren";
import { Paragraph } from "../../typography/Paragraph";
import { ChildIndent } from "./ChildIndent";

interface LoadMoreChildrenProps {
  submissionFullname: string;
  moreChildren: MoreChildren;
}

export const LoadMoreChildren: React.FC<LoadMoreChildrenProps> = ({
  submissionFullname,
  moreChildren,
}) => {
  const [shouldLoad, setShouldLoad] = useState<boolean>(false);
  const comments = useMoreChildren(
    shouldLoad,
    moreChildren,
    submissionFullname
  );

  const numberToLoad = moreChildren.children.length;
  const onPress = () => {
    setShouldLoad(true);
  };

  if (!comments.data) {
    return (
      <ChildIndent depth={moreChildren.depth}>
        <TouchableOpacity
          style={{ paddingLeft: 18, paddingVertical: 8 }}
          onPress={onPress}
        >
          <Paragraph>Show More ({numberToLoad})</Paragraph>
        </TouchableOpacity>
      </ChildIndent>
    );
  } else if (Array.isArray(comments.data)) {
    return (
      <>
        {comments.data.map((comment) => (
          <Comment
            data={comment}
            key={comment.id}
            submissionFullname={submissionFullname}
          />
        ))}
      </>
    );
  } else {
    return (
      <Comment
        data={comments.data}
        key={comments.data.id}
        submissionFullname={submissionFullname}
      />
    );
  }
};
