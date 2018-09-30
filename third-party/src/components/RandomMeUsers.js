import React, { Component } from 'react'
import DataComponent from './DataComponent'
import PeopleList from './PeopleList';

class RandomMeUsers extends Component {
    constructor(props) {
        super(props)
        this.url = "https://randomuser.me/api"
    }

    render() {
        if (this.props.count) {
            this.url = `${this.url}/?results=${this.props.count}`
        }
        const RandomMeList = DataComponent(PeopleList, this.url)
        return (
            <RandomMeList {...this.props} />
        )

    }
}
export default RandomMeUsers