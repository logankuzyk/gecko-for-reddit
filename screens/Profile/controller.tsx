import React, { useCallback } from "react";
import { StackNavigationProp } from "@react-navigation/stack";

import { Loading } from "../../components/Loading";
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
  const { isSuccess, fetchNextPage, data } = useProfile(username);

  const pages = data ? data.pages.map((page) => page.data) : [];

  const content = Array.prototype.concat.apply([], pages);

  const onListEnd = useCallback(() => fetchNextPage(), [fetchNextPage]);

  if (isSuccess && user.data) {
    return (
      <ProfileScreenView
        user={user.data}
        content={content}
        onListEnd={onListEnd}
      />
    );
  } else {
    return <Loading />;
  }
};
