import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const Intro = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); 
    }, 10000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Trương Phạm Lý Hương</Text>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>20110081</Text>
    </View>
  );
}

export default Intro;
