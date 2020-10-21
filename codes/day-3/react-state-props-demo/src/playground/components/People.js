import React from 'react';
//Object.setPrototypeOf(People.prototype,Component.prototype)
/**
 * function Component(properties){
 *   this.props = properties;
 * }
 * function People(attributes){
 *  People.call(this,attributes);
 *  console.log(this.props);
 * }
 * Object.setProtoypeOf(People.prototype,Component.prototype)
 * 
 * const peopleComponent = new People({value:20})
 * peopleComponent.props
 */
export default class People extends React.Component {

    constructor(attributes) {
        // People.call(this,props)
        super(attributes)
        this.state = {
            
        }
    }

    render() {
        return (
            <span>
                Hello from Class component:{this.props}
            </span>
        )
    }
}
/**
 * {
 * type:'span',
 * props:{
 *  value:20
 * }
 * }
 */