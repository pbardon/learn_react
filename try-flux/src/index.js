import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Countdown from './components/Countdown'
import CountdownStore from './components/CountdownStore'
import CountdownDispatcher from './CountdownDispatcher'

const countdownActions = dispatcher =>
    ({
        tick(currentCount) {
            dispatcher.handleAction({ 
              type: 'TICK',
              count: currentCount - 1  
          })
        },
        reset() {
            dispatcher.handleAction({
                type: 'RESET',
                count: 10
            })  
        }
    })

const appDispatcher = new CountdownDispatcher()
const actions = countdownActions(appDispatcher)
const store = new CountdownStore(10, appDispatcher)


const render = count => ReactDOM.render(
    <Countdown count={count} {...actions} />,
    document.getElementById('root')
)  

store.on("TICK", () => render(store.count))
store.on("RESET", () => render(store.count))
render(store.count)

registerServiceWorker();
