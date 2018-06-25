import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import FeedCard from './FeedCard';

const upcomingEvents = [
    { name: "Pi Ki Ki", date: "june 1", img: true },
    { name: "Firetrucks Win Homecoming :)", date: "june 10", img: false },
    { name: "Big Firetrucks :)", date: "june 10", img: false },
]

export default class UpcomingEventsFeed extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={upcomingEvents}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => <FeedCard img={item.img} title={item.name} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: "72.5%",
    }
})