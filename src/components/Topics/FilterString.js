import React, { Component } from 'react'

class FilterString extends Component {
    constructor(){
        super()
        this.state = {
            userInput: '',
            names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            filteredArray: []
        }
    }

    handleUpdate(value){
        this.setState({userInput: value})
    }

    filterString(input){
        let arr = this.state.names
        let filteredArr = []
        for(let i = 0; i < arr.length; i++){
            if(arr[i].toLowerCase().includes(input.toLowerCase())){
                filteredArr.push(arr[i])
            }
        }
        this.setState({filteredArray: filteredArr})
    }



    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Original: {`${this.state.names}`}</span>
                <input className='inputLine' onChange={(event) => this.handleUpdate(event.target.value) }/>
                <button className='confirmationButton' onClick={() => this.filterString(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered Names: {`${this.state.filteredArray}`}</span>

            </div>
        )
    }
}

export default FilterString