import React, {Component} from 'react'

class Sum extends Component{
    constructor(){
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: 0
        }
    }


    sum(){

        let sum = parseInt(this.state.number1) + parseInt(this.state.number2)

        this.setState({sum: sum})
    }

    handleChange1(value){
        this.setState({number1: value})
    }

    handleChange2(value){
        this.setState({number2: value})
    }
    
    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Sum</h4>
                <input className='inputLine' onChange={event => this.handleChange1(event.target.value)} />
                <input className='inputLine' onChange={event => this.handleChange2(event.target.value)}/>
                <button className='confirmationButton' onClick={() => this.sum()}>Add</button>
                <span className='resultsBox'>Sum: {`${this.state.sum}`}</span>
            </div>
        )
    }
}

export default Sum