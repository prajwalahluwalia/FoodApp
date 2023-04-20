import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ResultsDetail from './ResultsDetail';
import { useNavigation } from '@react-navigation/native';

const ResultsList = ({ title, results }) => {
    const navigation = useNavigation()
    if (!results.length){
        return null;
    }
    return (
        <View style = {{marginHorizontal:10}}>
            <Text style = {styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal = {true}
                showsHorizontalScrollIndicator={false}
                data = {results}
                keyExtractor = {(result) => result.id }
                renderItem = {( { item } ) => {
                    
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('ResultDisplay', { 
                                    id:item.id 
                                })
                            }
                        >
                            <ResultsDetail result = { item }/>
                        </TouchableOpacity>
                    ) 
                }}
            />
        </View>
    )
}

export default ResultsList

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        color: '#000',
        fontWeight:'bold',
        marginBottom: 5
    }
})