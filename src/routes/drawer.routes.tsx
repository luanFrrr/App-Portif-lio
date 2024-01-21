import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/MainScreen";
import GalleryScreen from "../screens/SkillScreen";

const { Navigator, Screen } = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Navigator>
      <Screen name="Main Screen" component={HomeScreen} />
      <Screen name="Skill Screeen" component={GalleryScreen} />
    </Navigator>
  );
}
