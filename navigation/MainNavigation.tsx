import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import HomeScreen from "@/app/screens/HomeScreen";
import DetailsScreen from "@/app/screens/DetailsScreen";
import { ErrorBoundary } from "@/components";

const MainStack = createNativeStackNavigator();
const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: "slide_from_right",
};

export default function MainNavigation() {
  return (
    <ErrorBoundary>
      <MainStack.Navigator
        screenOptions={screenOptions}
        initialRouteName='home'
      >
        <MainStack.Screen name='home' component={HomeScreen} />
        <MainStack.Screen name='details' component={DetailsScreen} />
      </MainStack.Navigator>
    </ErrorBoundary>
  );
}
