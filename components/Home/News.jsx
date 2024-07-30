import React from "react";
import { StyleSheet, View, Text,Image } from "react-native";
import Slider from "./Slider";
import "tailwindcss/tailwind.css";
import { ImagesAssets } from "../../Image";

const News = () => {
  return (
    <View className="flex flex-col w-full gap-y-4">
      <View>
        <Text className="mt-6" style={styles.head2}>
          Tin tức
        </Text>
        <Image source={ImagesAssets.banner} resizeMode="cover" style={styles.imgcopy} />
      </View>
      <View className="py-0 w-full mt-4">
        <Slider className="w-full" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1c1c1c",
  },
  imgcopy:{
    width: '100%',      
    height: 200,        
    borderRadius: 10,   
    overflow: 'hidden',  
  }
});

export default News;
