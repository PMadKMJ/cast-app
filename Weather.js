import React, { Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from "expo";
import { Ionicons } from "@expo/vector-icons";
import propTypes from "prop-types";

const weatherCases = {
    Rain : {
        colors:["#00C6FB", "#005BEA"],
        title:"Raining",
        subtitle:"For more info look outside",
        icon: 'ios-rainy'
    },
    Clear : {
        colors:["#FEF253", "#FF7300"],
        title:"Sunny",
        subtitle:"go outside!",
        icon: 'ios-sunny'
    },
    ThunderStorm : {
        colors:["#00ECBC", "007ADF"],
        title:"Thunder",
        subtitle:"Don't go outside",
        icon: 'ios-thunderstorm'
    },
    Clouds : {
        colors:["#D7D2CC", "#B9B6E5"],
        title:"Clouds",
        subtitle:"Not good Not bad",
        icon: 'ios-cloudy'
    },
    Snow : {
        colors:["#89F7FE", "#66A6FF"],
        title:"Snow",
        subtitle:"Do you wanna build a snowman?",
        icon: 'ios-snow'
    },
    Drizzle : {
        colors:["#00C6FB", "#005BEA"],
        title:"Drizzle",
        subtitle:"what about tea",
        icon: 'cloud-drizzle'
    }
}


function Weather(main){
    console.log(main);
    return(
    <LinearGradient 
        colors={weatherCases[main.weatherName].colors} 
        style={styles.container}>
        <View style={styles.upper}>
            <Ionicons color="white" size={144} name={weatherCases[main.weatherName].icon}></Ionicons>
            <Text style={styles.temperature}>{main.temp}°</Text>
        </View>
        <View style={styles.lower}>
            <Text style={styles.title}>{weatherCases[main.weatherName].title}</Text>
            <Text style={styles.subtitle}>{weatherCases[main.weatherName].subtitle}</Text>
        </View>
    </LinearGradient>)
}

export default Weather;

Weather.propTypes = {
    temp : propTypes.number.isRequired,
    weatherName : propTypes.string.isRequired
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    upper : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
    },
    temperature : {
        fontSize : 38,
        fontWeight : "300",
        backgroundColor : "transparent",
        color : 'white',
        marginTop : 10,
    },
    lower : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
    },
    title : {
        fontSize : 28,
        backgroundColor : "transparent",
        color : 'white',
        marginBottom : 10,
        fontWeight : "300"
    },
    subtitle : {
        fontSize : 25,
        backgroundColor : "transparent",
        color : 'white',
        marginBottom : 24,
        fontWeight : "300"
    },
});