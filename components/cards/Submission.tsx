import React from "react";
import { View, Text, ListRenderItem } from "react-native";

import { Submission } from "../../types/reddit";

interface SubmissionCardProps {
  title: string;
  author: string;
  date: number;
}

export const SubmissionCard: React.FC<SubmissionCardProps> = ({
  title,
  author,
  date,
}) => {
  return (
    <View style={{ width: "100%" }}>
      <Text style={{ fontSize: 18 }}>{title}</Text>
      <Text>{author}</Text>
      <Text>{date}</Text>
    </View>
  );
};

export const renderItem: ListRenderItem<Submission> = ({ item }) => {
  return (
    <SubmissionCard
      title={item.title}
      author={item.author}
      date={item.created}
    />
  );
};
