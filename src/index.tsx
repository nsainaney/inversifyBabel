import React from 'react'
import './services'
import { StyleSheet, Text, View } from 'react-native';
import { injectable, inject } from 'inversify'

@injectable()
export default class App extends React.Component {

    @inject('hello')
    hello

    @inject('there')
    there

    componentDidMount() {
        this.hello.sayHi()
        this.there.sayThere()
    }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
