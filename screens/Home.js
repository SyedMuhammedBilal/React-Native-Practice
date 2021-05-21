import React, { useState } from 'react'
import {View, Text, Button, StyleSheet, FlatList, TouchableOpacity} from 'react-native'

const Home = ({ navigation }) => {
    const [review, setReview] = useState([
        {name: "Shayan", title: "CS"},
        {name: "Bilal", title: "Software developer"},
        {name: "Junaid", title: "Web developer"},
    ])

    const onPressHandler = () => {
        // navigation, pop, goBack
        navigation.navigate('ReviewDetails')
    }

    return (
        <View styles={Styles.container}>
            <Text style={{color: '#000', marginTop: 20, marginLeft: 20, fontSize: 22, fontWeight: '700', marginBottom: 10}}>
                Home Screen
            </Text>
            {/* Passing Data between components */}

            <View style={{marginLeft: 20}}>
                <FlatList 
                    data={review}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                            <Text style={{color: '#000'}}> {item.name} </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <Button title="Review details" onPress={onPressHandler} />
        </View>
        
    )
}

export default Home

const Styles = StyleSheet.create({
    reviewData: {
        backgroundColor: '#000'
    }
})