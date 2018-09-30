import React, {
  Component
} from 'react'
import v4 from 'uuid/v4'
import './App.css'
import AddColorForm from './components/AddColorForm'
import ColorList from './components/ColorList'
import Display from './components/Display'
import WhenTruthy from './components/WhenTruthy'
import WhenFalsy from './components/WhenFalsy'
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      colors: [
        { id: v4(),
          title: 'blue',
          color: '#0037ff',
          rating: 4
        },
        {
          id: v4(),
          title: 'red',
          color: '#ff0000',
          rating: 3
        }
      ]
    };
    this.addColor = this.addColor.bind(this)
    this.rateColor = this.rateColor.bind(this)
    this.removeColor = this.removeColor.bind(this)
  }

  addColor(title, color) {
    const colors = [
        ...this.state.colors,
        {
            id: v4(),
            title,
            color,
            rating: 0
        }
    ]
    this.setState({colors})
  }

  rateColor(id, rating) {
    const colors = this.state.colors.map(color =>
        (color.id !== id) ?
            color :
            {
                ...color,
                rating
            }
    )
    this.setState({colors})
  }

  removeColor(id) {
    const colors = this.state.colors.filter(
        color => color.id !== id
    )
    this.setState({colors})
  }

  render() {
    const {
      colors
    } = this.state

    const { addColor, rateColor, removeColor } = this    
            
    const age = 22

    return (
      <div className="App">
        <header> 
          <h1>Color Picker App</h1>
        </header>
        <AddColorForm onNewColor={addColor}/>
        <ColorList colors={colors}
                   onRate={rateColor}
                   onRemove={removeColor} />

        <Display ifTruthy={age >= 21}>
          <WhenTruthy>
              <h1>You can Enter</h1>
          </WhenTruthy>
          <WhenFalsy>
              <h1>Beat it Kid</h1>
          </WhenFalsy>
        </Display>
      </div>
    );
  }
}

export default App;