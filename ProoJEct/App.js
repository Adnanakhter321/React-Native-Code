/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import axios from 'axios';
const App = () => {
  const [data2, setdata2] = useState('');
  useEffect(() => {
    axios.post('http://10.0.2.2:5000/get-all-students').then(({ data }) => {
      setdata2(data);
    }).catch((er) => {
      console.error(er);
    });
  }, []);
  return (
    <View>
      <FlatList
        data={data2}
        renderItem={item => this.renderItemComponent(item)}
      />
    </View>
  );
};

export default App;
