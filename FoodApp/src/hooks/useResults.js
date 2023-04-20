import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from '../api/yelp'


const useResults = () => {
    const [results, setResults] = useState([])
    // to show errors in screen
    const[errMessage, setErrMessage]=useState('')


    const searchAPI = async(searchTerm) => {
        console.log('Hi there',)
        try {
            const response = await yelp.get('/search', {
                params: {
                limit: 50,
                term: searchTerm,
                location: 'san-jose'
            }
        });
        setResults(response.data.businesses)
        } catch(err){
        setErrMessage('Something Went Wrong')
        }
    }

    // call search api when component is rendered (bad code)
    // searchAPI('Pasta') 

    // good code
    useEffect(() => {
        searchAPI('pasta')
    }, [])
    
    return  [searchAPI, results, errMessage]
}

export default useResults

const styles = StyleSheet.create({})