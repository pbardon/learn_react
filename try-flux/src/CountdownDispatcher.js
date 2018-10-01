const Dispatcher = require('flux').Dispatcher

class CountdownDispatcher extends Dispatcher {
    handleAction(action) {
        console.log('dispatching action:', action)
        this.dispatch({
            source: 'VIEW_ACTION',
            action
        })
    }
}

export default CountdownDispatcher