import React, { useState, useEffect} from "react";
import {View, Text, SafeAreaView, FlatList, ActivityIndicator} from 'react-native'
import { styles } from './style/style';

const responseURL ="https://ns.nowna.com/zohoTest/test/?fbclid=IwAR1Wxn57trypKJLqHC1I8LPnFP7DaSixEYEeHpZH9DjDYocvZ0znTyPZaws";

export default function Others({navigation}){
   // managing state with 'useState'
  const [isLoading, setLoading] = useState(true);
  const [data, setResponse] = useState([]);

  // similar to 'componentDidMount', gets called once
  useEffect(() => {
    fetch(responseURL)
      .then((resp) => resp.json()) // get response, convert to json
      .then((json) => {
        setResponse(json.response);
      })
      .catch((error) => alert(error)) // display errors
      .finally(() => setLoading(false)); // change loading state
  }, []);

  // Also get call asynchronous function
  async function getMoviesAsync() {
    try {
      let resp = await fetch(respURL);
      let json = await resp.json();
      setResponse(json.response);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* While fetching show the indicator, else show response*/}
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          {/* Display each movie */}
          <View style={{ borderBottomWidth: 1, marginBottom: 12 }}></View>
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={{ paddingBottom: 10 }}>
                <Text style={styles.apiContainer}>
                  {item.id}, {item.title}, {item.description}
                </Text>
              </View>
            )}
          />
        </View>
      )}

        </SafeAreaView>
    )
}