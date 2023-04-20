import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ResultsDetail = ({ result }) => {
  return (
    <View style={{marginRight: 10, marginBottom: 5}}>
        <Image style ={styles.imageStyle} source={{uri: result.image_url}}/>
        <Text style = {styles.resultName}>{result.name}</Text>
        <View style = {{flexDirection: 'row', justifyContent:'space-between'}}>
            <Text style = {styles.resultDetail}>Stars - {result.rating}</Text>
            <Text style = {styles.resultDetail}>Reviews - {result.review_count} </Text>
        </View>
        
    </View>
  )
}

export default ResultsDetail

const styles = StyleSheet.create({
    imageStyle:{
        borderRadius: 10,
        height: 200,
        width: 400
    },
    resultName: {
        color:'#000',
        fontWeight:'bold',
        fontSize: 15,
    },
    resultDetail: {
        color:'#000'
    }
})