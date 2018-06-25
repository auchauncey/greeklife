import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types'

import { WHITE, BLACK } from '../util/settings';

const ICON_SIZE = 26

export default class HeaderAddItem extends Component {
    render() {
        return (
            <Icon name="ios-add"
                size={ICON_SIZE}
                style={{ marginRight: 10, color: this.props.darkBg ? WHITE : BLACK, fontWeight: "600" }}
                onPress={this.props.onPress}
            />
        )
    }
}

HeaderAddItem.propTypes = {
    darkBg: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired
}