import React, {Component} from 'react';

import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course : '',
            skill : ''
        }
        this.onCourseChange = this.onCourseChange.bind(this);
        this.onSkillChange = this.onSkillChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onCourseChange(e) {
        this.setState({
            course: e.target.value
        })
    }
    onSkillChange(e) {
        this.setState({
            skill: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        this.props.onSubmitEvent(this.state);
        
    }


    render() {
        return(
            <form 
            method="POST"
            className="bottom-panel d-flex"
            onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="course"
                    placeholder="Какой курс вы ищете ?"
                    className="form-control new-post-label"
                    onChange={this.onCourseChange}
                    value={this.state.text}
                />
                <input
                    type="text"
                    name="skill"
                    placeholder="Какой навык вы хотели бы получить после прохождения курса ?"
                    className="form-control new-post-label"
                    onChange={this.onSkillChange}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                    >
                    Найти
                </button>
            </form>
        )
    }
}

