import React, {Component} from 'react';
import './vacancy-list-item.css';

export default class VacancyListItem extends Component {
    constructor(props) {
        super(props)
        this.onCourse = this.onCourse.bind(this);
    }
    onCourse(c) {
        this.props.itemSelected(c)
    }

    render() {
        const arrayVacancy = this.props.skill;
        const li = arrayVacancy.map( el => {
            const {course_ID, title, duration, price, rate} = el;
            const rateFixed = rate ? rate : 4.05 
            return (
                <li key={course_ID} className="vacancy__main_li">
                    <div className='vacancy__main__title'>{title}</div>
                    <div className='vacancy__main__info'>
                        <span>Длительность: {duration} ч</span>
                        <span>Цена: {price} ₽</span>
                        <span>Рейтинг: {rateFixed}</span>
                        <button type='button' className='vacancy__main__button btn btn-outline-info' onClick={() => this.onCourse(course_ID)}>Link</button>
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