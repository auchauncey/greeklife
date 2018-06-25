import React, { Component } from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

// 
import { WHITE, BLACK } from '../util/settings';

export default class HeaderSideText extends Component {
    render() {
        return (
            <Text
                style={{
                    fontSize: 16, color: this.props.darkBg ? WHITE : BLACK,
                    marginLeft: this.props.left ? 10 : 0,
                    marginRight: this.props.right ? 10 : 0
                }}
                onPress={this.props.onPress}
            >
                {this.props.text}
            </Text>
        )
    }
}

HeaderSideText.propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string.isRequired,
    darkBg: PropTypes.bool.isRequired
}