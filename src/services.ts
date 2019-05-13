import { Container } from 'inversify'

const kernel = new Container()

class Hello {
    sayHi() {
        console.log('Hi')
    }
}

class There {
    sayThere() {
        console.log('There')
    }
}


kernel.bind('hello').to(Hello)
kernel.bind('there').to(There)