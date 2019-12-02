import React, {Component} from 'react'

class FilterObject extends Component{

    constructor(){
        super()
        this.state = {
            employees: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
              ],
        
              userInput: '',
              filteredEmployees: []
            }
        }


    handleChange(value){
        this.setState({userInput: value})
    }

    filterArray(userInput){
        let employees = this.state.employees
        let filtered = []
        for(let i = 0; i < employees.length; i++){
            if(employees[i].hasOwnProperty(userInput)){
                filtered.push(employees[i])
            }
        }

        this.setState({filteredEmployees: filtered})
    }

    render(){
        return(
            <div className='puzzleBox filterObjectPB'>
            <h4>Filter Object</h4>
                <span className='puzzleText'>Original : {JSON.stringify(this.state.employees)}</span>
                <input className='inputLine' onChange={(event) => this.handleChange(event.target.value)} />
                <button className='confirmationButton' onClick={() => this.filterArray(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterObjectRB'>{JSON.stringify(this.state.filteredEmployees)}</span>
            </div>
        )
    }
}

export default FilterObject