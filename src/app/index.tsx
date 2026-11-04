import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const index = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{flexGrow: 0}}
      >
        <Image
          source={require("../../assets/images/banner1.png")}
          style={{width: 350, height: 200}}
          resizeMode='contain'
        />
        <Image
          source={require("../../assets/images/banner2.png")}
          style={{width: 350, height: 200}}
          resizeMode='contain'
        />
        <Image
          source={require("../../assets/images/banner3.png")}
          style={{width: 350, height: 200}}
          resizeMode='contain'
        />
        <Image
          source={require("../../assets/images/banner4.png")}
          style={{width: 350, height: 200}}
          resizeMode='contain'
        />
      </ScrollView>
      <Text>INICIO</Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptate iste molestiae doloribus Impedit, molestiae a illo minima nam, quia dolorum, eos ipsum laborum consectetur repellendus earum</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});