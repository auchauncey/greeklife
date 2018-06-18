import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import React from 'react'

// Component Imports
import MyChapterDrawer from './screens/chapter/MyChapterDrawer'
import MyCampus from './screens/campus/MyCampus'
import MyProfileDrawer from './screens/profile/MyProfileDrawer'
import { PIKE_COLOR_PRIMARY, KSU_COLOR_PRIMARY, GREEK_LIFE_COLOR_PRIMARY } from './util/settings'

export default ApplicationStack = createBottomTabNavigator(
    {
        MyChapter: MyChapterDrawer,
        MyCampus: MyCampus,
        MyProfile: MyProfileDrawer
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;

                switch (routeName) {
                    // 
                    case 'MyChapter':
                        iconName = `ios-home${focused ? '' : '-outline'}`
                        tintColor = focused ? PIKE_COLOR_PRIMARY : "grey"
                        break;

                    // 
                    case 'MyProfile':
                        iconName = `ios-contact${focused ? '' : '-outline'}`
                        tintColor = focused ? GREEK_LIFE_COLOR_PRIMARY : "grey"
                        break;

                    // 
                    default:
                        iconName = `ios-school${focused ? '' : '-outline'}`
                        tintColor = focused ? KSU_COLOR_PRIMARY : "grey"
                        break;
                }
                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Icon name={iconName} size={25} color={tintColor} />;
            },
            // moved to here but haven't tested if setting x works
            tabBarOptions: {
                activeTintColor: "black",
                inactiveTintColor: 'gray',
            },
        }),

    }
)