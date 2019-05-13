import { Container } from 'inversify'
import { injectable } from 'inversify'

export const kernel = new Container()

@injectable()
class Hello {
    sayHi() {
        console.log('Hi')
    }
}
@injectable()
class There {
    sayThere() {
        console.log('There')
    }
}


kernel.bind('hello').to(Hello)
kernel.bind('there').to(There)