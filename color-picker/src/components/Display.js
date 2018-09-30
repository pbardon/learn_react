import { Children } from 'react'
import WhenTruthy from './WhenTruthy'
import WhenFalsy from './WhenFalsy'


const findChild = (children, child) =>
    Children.toArray(children)
            .filter(c => c.type === child )[0]

const Display = ({ ifTruthy=true, children }) => 
    (ifTruthy) ? 
        findChild(children, WhenTruthy) :
        findChild(children, WhenFalsy)
                  
export default Display