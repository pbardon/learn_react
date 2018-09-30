import React, {Component} from 'react'
import {PropTypes} from 'prop-types'
import StarRating from './StarRating'
import './Color.css'

export class Color extends Component {
  
    componentWillMount() {
        this.style = { backgroundColor: "#CCC" }
    }

    componentWillUpdate(nextProps) {
        const { title, rating } = this.props
        this.style = null
        this.refs.title.style.backgroundColor = "red"
        this.refs.title.style.color = "white"
        alert(`${title}: rating ${rating} -> ${nextProps.rating}`)
    }

    shouldComponentUpdate(nextProps) {
        const { rating } = this.props
        return rating !== nextProps.rating
    }

    componentDidUpdate(prevProps) {
        const { title, rating } = this.props
        const status = (rating > prevProps.rating) ? 'better' : 'worse'
        console.log(`${title} is getting ${status}`)
        this.refs.title.style.backgroundColor = ""  
        this.refs.title.style.color = "black"
    }
    
    capitalize(input) {
        return input.split().map((word) => {
            return `${word[0].toUpperCase()}${word.substr(1, word.length-1)}`
        }).concat()
    }
  
    render() {
        const { title, rating, color, onRate } = this.props
        return (
            <section className="color" style={this.style}>
                <h1 ref="title">{this.capitalize(title)}</h1>
                <div className="color"
                     style={{ backgroundColor: color }}>
                </div>  
                <StarRating starsSelected={rating} 
                            onRate={onRate} />
            </section>);
    }

} 

Color.propTypes = {
  title: PropTypes.string,
  rating: PropTypes.number,
  color: PropTypes.string,
  onRate: PropTypes.func
}

Color.defaultProps = {
  title: '',
  rating: 0,
  color: "#000000",
  onRate: f=>f
}

export default Color