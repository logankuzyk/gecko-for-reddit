import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";

import { Paragraph } from "../../typography/Paragraph";
import { ChildIndent } from "./ChildIndent";
import { RedditComment, MoreChildren } from "../../../types/reddit";
import { Tagline } from "../Tagline";
import { LoadMoreChildren } from "./LoadMoreChildren";

interface CommentProps {
  data: RedditComment | MoreChildren;
  submissionFullname: string;
  depth?: number;
}

export const Comment: React.FC<CommentProps> = ({
  data,
  submissionFullname,
}) => {
  if (data.type === "comment") {
    const { author, date, body, scoreString } = data;
    const [showChildren, setShowChildren] = useState<boolean>(true);

    const onLongPress = () => {
      setShowChildren(!showChildren);
    };

    return (
      <View key={data.id} style={{ paddingLeft: 18 }}>
        <TouchableOpacity onLongPress={onLongPress} style={{ marginBottom: 8 }}>
          <View style={{ marginTop: 8 }}>
            <Tagline content={[author, scoreString, date]} type="comment" />
          </View>
          <View style={{ marginTop: 4 }}>
            <Paragraph>{body}</Paragraph>
          </View>
        </TouchableOpacity>
        {showChildren ? (
          data.replyTree.map((comment) => (
            <ChildIndent depth={comment.depth + 1}>
              <Comment data={comment} submissionFullname={submissionFullname} />
            </ChildIndent>
          ))
        ) : (
          <></>
        )}
      </View>
    );
  } else {
    return (
      <LoadMoreChildren
        submissionFullname={submissionFullname}
        moreChildren={data}
      />
    );
  }
};
