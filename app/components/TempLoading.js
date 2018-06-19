import React, { Component } from 'react'
import { SafeAreaView, ActivityIndicator } from 'react-native'

export default class TempLoading extends Component {
    render() {
        return (
            <SafeAreaView>
                <ActivityIndicator />
            </SafeAreaView>
        )
    }
}
