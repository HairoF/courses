import React, { Component } from 'react';
import { fetchJobs } from '../api';
import './search-panel.css'; 

export default class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            queryVacancy: '',
            learnedSkills: '',
            option : null,
            isFetching: true
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onVacancySkillChange = this.onVacancySkillChange.bind(this);
    }

    componentDidMount() {
        const url = document.location.pathname;
        fetch('http://localhost:4000/api/')
        .then( (res) => res.json())
        .then((option) => this.setState({option: option, isFetching: false}))
        .catch(e => {
            console.log(e)
        });
        console.log(this.state)
    }

    onChange(e) {
        this.setState({queryVacancy: e.target.value})
    }

    onVacancySkillChange(e) {
        this.setState({learnedSkills: e.target.value})
    }

    onUpdateSearch(e) {
        e.preventDefault()
        const {queryVacancy, learnedSkills} = this.state
        this.props.onSearch({queryVacancy,learnedSkills});
    }


    render() {
        const {option, isFetching} = this.state;
   
            const options = !isFetching ? option.map( (option,i) => {
                return (<option key={option.ID} value={option.name}/>)
            }) : null


        return(
            <form 
            method="POST"
            className="bottom-panel d-flex select_job"
            onSubmit={(event)=> this.onUpdateSearch(event)}>
            <input className="select__job__vacancy" placeholder='Кем вы хотите стать?' type='text' list="data" onChange={(e)=>this.onChange(e)}/>
            <input
                type="text"
                name="skill"
                placeholder="Напишите навыки, которыми владеете"
                className="form-control new-post-label select__job__competition"
                onChange={this.onVacancySkillChange}
                value={this.state.learnedSkills}
            />
            <datalist id="data">
                {!isFetching ? options : null}
            </datalist>
            <button
                type="submit"
                className="btn btn-outline-secondary select__job__button">
                Подобрать курсы
            </button>
            </form>
        )
    }
}
