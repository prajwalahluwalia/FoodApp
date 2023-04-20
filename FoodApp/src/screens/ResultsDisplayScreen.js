import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import yelp from '../api/yelp'

const ResultsDisplayScreen = ({ route, navigation }) => {
  
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const id = route.params.id
   
  const getResults = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data)
    } catch (err){
      setError("Something Went Wrong")
    }}
    

  useEffect (() => {
    getResults(id);
  }, []);

  if (!result){
    return null
  }

  return (
    <View style={{flex: 1, top: 100, marginVertical:10, justifyContent:'center'}}>
      <Text style={{color:'#999000', fontWeight:'bold', textAlign:'center', bottom:20, fontSize: 20}}>{result.name}</Text>
      {
        error ? 
        <Text style={{color:'#000'}}>{error}</Text> : 
        null
      }
      <FlatList
        data = {result.photos}
        keyExtractor={photo => photo}
        renderItem={({item}) => {
          return (
            <View>
              <Image style = {styles.image} source = {{uri:item}}/>
            </View>
            
          )
        }}
      />
      
    </View>
  )
}

export default ResultsDisplayScreen

const styles = StyleSheet.create({
  image:{
    height:250, 
    width:400, 
    marginBottom:10,
    left:40
  }
})