import { NavigationContainer } from "@react-navigation/native";

//Contexto

import { DrawerRoutes } from "./drawer.routes";

//Caixa de Contextos
export function Routes() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  );
}
