import React, {Component} from 'react'

class Palindrome extends Component {
    constructor(){
        super()
        this.state = {
            userInput: '',
            palindrome:''
        }
    }

    handleChange(value){
        this.setState({userInput: value})
    }

    isPalindrome(){
        let str = this.state.userInput
        let reversedStr = [...str].reverse().join('')

        if(str === reversedStr){
            this.setState({palindrome: "true"})
        } else {
            this.setState({palindrome: "false"})
        }

    }


    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={(event) => this.handleChange(event.target.value)} />
                <button className='confirmationButton' onClick={() => this.isPalindrome()}>Check</button>
                <span className='resultsBox'>Is Palindrome: {`${this.state.palindrome}`}</span>

            </div>
        )
    }
}

export default Palindrome