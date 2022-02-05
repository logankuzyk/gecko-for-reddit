import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { ActivityIndicator } from "react-native-paper";

import { ProfileScreenView } from "./view";
import { RootStackParamList } from "../../types/navigation";
import { useUser } from "../../hooks/useUser";
import { useProfile } from "../../hooks/useProfile";

interface ProfileScreenControllerProps {
  navigation: StackNavigationProp<RootStackParamList, "Profile">;
  username: string;
}

export const ProfileScreenController: React.FC<
  ProfileScreenControllerProps
> = ({ username }) => {
  const user = useUser(username);
  const content = useProfile(username);

  if (content.isSuccess && user.data) {
    return <ProfileScreenView user={user.data} content={content.data} />;
  } else {
    return <ActivityIndicator animating={content.isLoading} />;
  }
};
