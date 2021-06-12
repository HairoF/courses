import React, {Component} from 'react';
import './vacancy-list.css';
import VacancyListItem from '../vacancy-list-item';

export default class VacancyList extends Component {


    render() {
        
        const vacancy = this.props.vacancy;
        console.log(vacancy)

        const vacancyLi = vacancy.map((job,i) => {
            const {skillName, skillsList} = job;

            return (
                <li key={`content__vacancy${i}`}>
                    <div className="content__vacancy">
                        <div className="content__vacancy_title">Курсы для получения навыков по {skillName}</div>
                            <VacancyListItem skill={skillsList} itemSelected={this.props.itemSelected}/>
                        </div>
                </li>
            )
        })
        return (
            <ul className="vacancy">
                {vacancyLi}
            </ul>
        )
    }
}