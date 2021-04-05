import { Component } from 'react'
import './Form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'






class Form extends Component {
    constructor({ filterMovies }) {
        super() 
        this.state = {
            search: ''
        }
    }

    handleChange = e =>  {
        this.setState({ [e.target.name]: e.target.value })
        this.props.filterMovies(e.target.value)
    }

    render() {
        return (
            <form>
                <input 
                    type='text'
                    placeholder='Search a movie'
                    name='search'
                    value={this.state.search}
                    onChange={e => this.handleChange(e)}
                />
                <FontAwesomeIcon icon={ faSearch }/>
            </form>
        )
    }
}


export default Form;