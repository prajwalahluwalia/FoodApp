import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp'
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const HomeScreen = () => {
  const[term, setTerm] = useState('')
  const [searchAPI, results, errMessage] = useResults();

  const filterResultByPrice = (price) => {
    //price === $ || $$ || $$$
    return results.filter(result => {
      return result.price===price;
    })

  }
  return (
    
    <View style = {{top:20}}>
      <SearchBar 
        term={term}
        onTermChange = {newTerm => setTerm(newTerm)}
        onTermSubmit = {() => searchAPI(term)}
      />
      { 
        errMessage ?
        <Text style = {{color:'#000'}}>{errMessage}</Text> : 
        null
      }
      <ScrollView>
        <ResultsList 
          title={"Cost Effective"} 
          results = {filterResultByPrice('$')}
        />
        <ResultsList 
          title={"Bit Pricier"} 
          results = {filterResultByPrice('$$')}
        />
        <ResultsList 
          title={"Big Expender"} 
          results = {filterResultByPrice('$$$')}
        />
      </ScrollView>
    </View>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({})  