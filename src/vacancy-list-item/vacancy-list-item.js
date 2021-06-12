import React, {Component} from 'react';
import './vacancy-list-item.css';

export default class VacancyListItem extends Component {
    constructor(props) {
        super(props)
        this.onCourse = this.onCourse.bind(this);
    }
    onCourse() {
        this.props.itemSelected()
    }

    render() {
        const arrayVacancy = this.props.skill;
        const li = arrayVacancy.map( el => {
            const {course_ID, title, duration, price, rate} = el;
            return (
                <li key={course_ID}>
                    <div className='vacancy__main__title'>{title}</div>
                    <div className='vacancy__main__info'>
                        <strong>H: {duration}h</strong>
                        <strong>P: {price}p</strong>
                        <strong>R: {rate}r</strong>
                        <button onClick={() => this.onCourse(course_ID)}>Link</button>
                    </div>
                </li>
            )

        })
        return (
            <ul className='content__vacancy__main'>
                {li}
            </ul>
        )
    }
}