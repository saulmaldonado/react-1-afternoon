import React, { Component } from 'react'

class EvenAndOdds extends Component{
    constructor(){
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(value){
        this.setState({userInput: value})
    }

    solveProblem(userInput){
        let arr = userInput.split(',')
        let even = []
        let odd = []

        for(let i = 0; i < arr.length; i++){
            if(arr[i] % 2 === 0){
                even.push(arr[i])
            } else {
                odd.push(arr[i])
            }
        }
        this.setState({evenArray: even})
        this.setState({oddArray: odd})
    }

    render(){
        return(
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className='inputLine'
                    onChange={ (event) => this.handleChange(event.target.value)}
                />
                <button className='confirmationButton' onClick={() => { this.solveProblem(this.state.userInput)}}>Split</button>
                <span className='resultsBox'>Even: {`${this.state.evenArray}`} </span>
                <span className='resultsBox'>Odd: {`${this.state.oddArray}`} </span>

            </div>
        )
    }
}

export default EvenAndOdds