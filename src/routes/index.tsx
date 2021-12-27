import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppAuthRoutes } from "./auth.routes";
import { AppTabRoutes } from "./app.tab.routes";

import { useAuthContext } from "../contexts/Auth";

export function Routes() {
  const { user } = useAuthContext();

  return (
    <NavigationContainer>
      {user?.email ? <AppTabRoutes /> : <AppAuthRoutes />}
    </NavigationContainer>
  );
}
