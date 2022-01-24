import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";

import { Paragraph } from "../../typography/Paragraph";
import { ChildIndent } from "./ChildIndent";
import { RedditComment, MoreChildren } from "../../../types/reddit";
import { Tagline } from "../Tagline";
import { LoadMoreChildren } from "./LoadMoreChildren";
import { CommentActionMenu } from "./CommentActionMenu";

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
    const { author, date, body, scoreString, depth } = data;
    const [showChildren, setShowChildren] = useState<boolean>(true);
    const [menuExpanded, setMenuExpanded] = useState<boolean>(false);
    const paddingRight = depth * 18;

    const handlePress = () => {
      setMenuExpanded(!menuExpanded);
    };

    const handleLongPress = () => {
      setShowChildren(!showChildren);
    };

    return (
      <>
        <ChildIndent depth={depth}>
          <View key={data.id} style={{ paddingLeft: 18, paddingRight }}>
            <TouchableOpacity
              onLongPress={handleLongPress}
              onPress={handlePress}
              style={{ marginBottom: 8 }}
            >
              <View style={{ marginTop: 8 }}>
                <Tagline content={[author, scoreString, date]} type="comment" />
              </View>
              <View style={{ marginTop: 4 }}>
                <Paragraph>{body}</Paragraph>
              </View>
            </TouchableOpacity>
          </View>
        </ChildIndent>
        {menuExpanded ? <CommentActionMenu /> : <></>}
        {showChildren ? (
          data.replyTree.map((comment) => (
            <Comment data={comment} submissionFullname={submissionFullname} />
          ))
        ) : (
          <></>
        )}
      </>
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
