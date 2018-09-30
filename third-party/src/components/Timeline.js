import d3 from 'd3'
import React, { Component } from 'react'
import Canvas from './Canvas'
import TimelineDot from './TimelineDot'

class Timeline extends Component {

    constructor({data=[]}) {
        super(data)
        const times = d3.extent(data.map(d => d.year))
        const range = [50, 450]
        this.scale = d3.time.scale().domain(times).range(range)
        this.state = {data, times, range}
    }

    render() {
        const { data } = this.state
        const { scale } = this
        return (
            <div className="timeline">
                <h1>{this.props.name} Timeline</h1>
                <Canvas>
                    {data.map((d, i) => 
                        <TimelineDot 
                            key={i}
                            position={scale(d.year)} 
                                     txt={`${d.year} - ${d.event}`}
                        />
                    )}
                </Canvas>
            </div>
        )
    }
}

export default Timeline