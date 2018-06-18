import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

// 
import { WHITE } from '../util/settings'

export default class MenuHamburger extends React.Component {
    render() {
        return <Icon name="ios-menu" size={26} color={WHITE} style={{ marginLeft: 10 }} onPress={this.props.onPress} />
    }
}

