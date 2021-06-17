import React, {Component} from 'react';
import './vacancy-list.css';
import VacancyListItem from '../vacancy-list-item';

export default class VacancyList extends Component {


    render() {
        
        const {vacancy, queryVacancy, competitionString} = this.props;
        console.log(vacancy)

        const vacancyLi = vacancy.map((job,i) => {
            const {skillName, skillsList} = job;

            return (
                <li key={`content__vacancy${i}`} className="vacancy__li">
                    <div className="content__vacancy">
                        <div className="content__vacancy_title">Курсы для получения навыков по {skillName}</div>
                            <VacancyListItem skill={skillsList} itemSelected={this.props.itemSelected}/>
                        </div>
                </li>
            )
        })
        return (
             <div className="vacancy">
                 {queryVacancy 
                 ? <div>
                    <div className="alert alert-warning" role="alert">
                        <h4 className="alert-heading">Недостаточно знаний</h4>
                        <p>Для работы {queryVacancy}(ом) большинство работадателей c HH указали следующие необходимые навыки: {competitionString}</p>
                    </div>
                    <ul className="vacancy">
                        {vacancyLi}
                    </ul>
                 </div>
                 : null}
            </div>
        )
    }
} // <div className="vacancy">
// <p className='vacancy__message'>Для работы Тестировщик(ом) вам не хвататет следующих навыков: js, react, redux</p>