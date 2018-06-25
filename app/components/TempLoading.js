import React, { Component } from 'react'
import { SafeAreaView, ActivityIndicator } from 'react-native'

export default class TempLoading extends Component {
    render() {
        return (
            <SafeAreaView style={{justifyContent:"center",height:"100%"}}>
                <ActivityIndicator />
            </SafeAreaView>
        )
    }
}
