import React from 'react';
import './app-header.css';
import {Link} from 'react-router-dom';

const AppHeader = ({allPosts}) => {
    return(
        <div className="header">
            <h1 className="header-title">
                <Link className="link shadow p-2 mb-5 bg-white rounded" to='/'>Агрегатор курсов</Link>
            </h1>
            <ul className="header-list list-group-horizontal">
                <li>
                    <Link className="link list-group-item" to='/all/'>Все</Link>
                </li>
                <li>
                    <Link className="link list-group-item" to='/programming/'>Программирование</Link>
                </li>
                <li>
                    <Link className="link list-group-item list-group-item-secondary" to='/analysis/'>Анализ</Link>   
                </li>
            </ul>
            <h2>Всего курсов найдено: {allPosts}</h2>
        </div>
    )
}

export default AppHeader;