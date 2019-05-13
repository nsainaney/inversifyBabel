import React from 'react'
import { kernel } from './services'
import getDecorators from 'inversify-inject-decorators'
import { Text, View } from 'react-native';
import { injectable } from 'inversify'

let { lazyInject } = getDecorators(kernel);

@injectable()
export default class App extends React.Component {

  @lazyInject('hello')
  hello

  @lazyInject('there')
  there

  constructor(props) {
    super(props)
  }

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