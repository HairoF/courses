import React, { Component } from 'react';
import { fetchJobs } from '../api';
import './search-panel.css'; 

export default class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            queryVacancy: '',
            option : null,
            isFetching: true
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onChange = this.onChange.bind(this)
    }
    componentDidMount() {
        const url = document.location.pathname;
        fetch('http://localhost:4000/api/')
        .then( (res) => res.json())
        .then((option) => this.setState({option: option, isFetching: false}))
        .catch(e => {
            console.log(e)
        });

    }
    onChange(e) {
        this.setState({queryVacancy: e.target.value})
    }
    onUpdateSearch(e) {
        e.preventDefault()
        const {queryVacancy} = this.state
        this.props.onSearch(queryVacancy);
    }

    render() {
        const {option, isFetching} = this.state;
   
            const options = !isFetching ? option.map( (option,i) => {
                return (<option key={i} value={option.ID}>{option.name}</option>)
            }) : null


        return(
            <form 
            method="POST"
            className="bottom-panel d-flex select_job"
            onSubmit={(event)=> this.onUpdateSearch(event)}>
            <select className="form-select" aria-label="Default select example" defaultValue={'0'} onChange={(e)=>this.onChange(e)}>
                <option disabled value="0">Выберите профессию</option>
                {!isFetching ? options : null}
            </select>
            <button
                type="submit"
                className="btn btn-outline-secondary">
                Подобрать профессию
            </button>
            </form>
        )
    }
}
