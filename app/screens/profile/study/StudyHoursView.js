import React, { Component } from 'react'
import { Text, SafeAreaView, View, TouchableHighlight } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import MapView, { Circle } from 'react-native-maps';

// Component Imports
import StudyHourHistory from './StudyHourHistory';
import MenuHamburger from '../../../components/MenuHamburger'
import { defaultProfileHeaderStyles } from '../MyProfileDrawer';

const validStudyLocations = [
    {
        latitude: 39.190615,
        longitude: -96.580632,
    },
    {
        latitude: 39.190439,
        longitude: -96.584222
    }
]
class StudyHoursView extends Component {
    constructor(props) {
        super()
        this.state = {
            region: {
                latitude: 39.190615,
                longitude: -96.580632,
                latitudeDelta: 0.0092,
                longitudeDelta: 0.0081,
            },
            error: null,
        }
        this.onRegionChange = this.onRegionChange.bind(this);

    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: "Study Hours",
            headerLeft: (
                <MenuHamburger onPress={() => navigation.openDrawer()} color="white" />
            ),
            headerRight: (
                <Icon name="ios-time" size={23} style={{ marginRight: 10 }} color="white" />

            ),
            ...defaultProfileHeaderStyles
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: this.state.region.latitudeDelta,
                        longitudeDelta: this.state.region.longitudeDelta
                    },
                    error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
        );
    }

    onRegionChange(region) {
        this.setState({ region });
    }

    render() {
        return (
            <View>
                <TestCircle />

                <MapView
                    style={{
                        height: "100%", width: "100%", zIndex: 0
                    }}
                    region={this.state.region}
                    onRegionChange={this.onRegionChange}
                    loadingEnabled={true}
                >
                    {
                        validStudyLocations.map(({ latitude, longitude }) => {
                            return (
                                <Circle
                                    key={latitude / longitude * Math.random(500)}
                                    center={{ latitude, longitude }}
                                    radius={100}
                                    strokeColor={"#458B00"}
                                    fillColor={"#66CD0064"}
                                />
                            )
                        })
                    }
                </MapView>
            </View>
        );
    }

}

const TestCircle = () => {
    return (
        <TouchableHighlight
            style={{ height: "30%", width: "45%", borderRadius: 90, position: 'absolute', bottom: -85, alignSelf: "center", zIndex: 1, backgroundColor: "green" }}
            onPress={() => alert('Started!')}
        >
            <Text
                style={{ position: "relative", alignSelf: "center", top: "25%", color: "white", fontSize: 18 }}
            >
                Start Studying
            </Text>
        </TouchableHighlight>
    )
}

export default StudyHoursStack = createStackNavigator({
    StudyHoursView,
    StudyHourHistory
})

StudyHoursStack.navigationOptions = {
    title: 'Study Hours'
}