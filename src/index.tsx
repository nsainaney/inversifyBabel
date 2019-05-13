import React from 'react'
import './services'
import { Text, View } from 'react-native';
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
      <View>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}