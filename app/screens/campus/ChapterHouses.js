import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import HouseCard from './HouseCard';
import { WHITE } from '../../util/settings';

const houses = [
    {
        name: "Alpha Xi Delta",
        imageURL: require('../../assets/cage.jpeg')
    },
    {
        name: "Pi Kappa Alpha",
        imageURL: require('../../assets/dicaprio.jpg')
    },
    {
        name: "Tri Delta",
        imageURL: require('../../assets/drake.png')
    },
    {
        name: "Alpha Delta Pi",
        imageURL: require('../../assets/fox.jpg')

    },
    {
        name: "Farmhouse",
        imageURL: require('../../assets/lawrence.jpg')

    },
    {
        name: "Alpha Xi Delta",
        imageURL: require('../../assets/cage.jpeg')
    },
    {
        name: "Pi Kappa Alpha",
        imageURL: require('../../assets/dicaprio.jpg')
    },
    {
        name: "Tri Delta",
        imageURL: require('../../assets/drake.png')
    },
    {
        name: "Alpha Delta Pi",
        imageURL: require('../../assets/fox.jpg')

    },
    {
        name: "Farmhouse",
        imageURL: require('../../assets/lawrence.jpg')

    },
]


export default class ChapterHouses extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={styles.contentContainerStyle}
                    horizontal
                    data={houses}
                    keyExtractor={item => item.name +Math.random(50)}
                    renderItem={({ item }) => {
                        return <HouseCard name={item.name} imageURL={item.imageURL} />
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: "27.5%",
        backgroundColor:WHITE
    }
})