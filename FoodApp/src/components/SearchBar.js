import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.searchBarTab}>
        <Feather 
            name="search" 
            size={30} 
            color={'#fff'} 
            style={styles.searchBarIcon}
        />
        <TextInput 
            autocapitalize="none"
            autocorrect={false}
            style={styles.searchBarInput} 
            placeholder="Search" 
            value = {term}
            onChangeText={onTermChange}
            onEndEditing = {onTermSubmit}
        />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    searchBarTab:{
        backgroundColor:'#00000050',
        height: 50,
        borderRadius:10,
        fonctColor:'#fff',
        flexDirection: 'row',
        marginHorizontal:10,
        marginBottom: 10
    },
    searchBarInput: {
        flex: 1,
    },
    searchBarIcon:{
        margin: 10,
    }
})