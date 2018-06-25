import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types'
// 
import { WHITE } from '../util/settings'

export default class MenuHamburger extends React.Component {
    render() {
        return <Icon name="ios-menu" size={26} color={this.props.color} style={{ marginLeft: 10 }} onPress={this.props.onPress} />
    }
}

MenuHamburger.propTypes = {
    color: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}