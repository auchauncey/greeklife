import { createSwitchNavigator,  } from 'react-navigation';
import ApplicationStack from './app/ApplicationStack';
import AuthenticationStack from './app/screens/auth/AuthenticationStack'
import AuthStatusLoadingScreen from './app/screens/auth/AuthStatusLoadingScreen'

export default AppSwitchNavigator = createSwitchNavigator({
  ApplicationStack: ApplicationStack,
  AuthenticationStack: AuthenticationStack,
  AuthenticationLoading: AuthStatusLoadingScreen
})
