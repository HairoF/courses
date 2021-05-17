import React from 'react';
import './app-header.css';
import {Link} from 'react-router-dom';

const AppHeader = ({allPosts}) => {
    return(
        <div className="header">
            <h1 className="header-title">
                <Link className="link" to='/'>Агрегатор курсов</Link>
            </h1>
            <ul className="header-list">
                <li>
                    <Link className="link" to='/all/'>Все</Link>
                </li>
                <li>
                    <Link className="link" to='/programming/'>Программирование</Link>
                </li>
                <li>
                    <Link className="link" to='/analysis/'>Анализ</Link>   
                </li>
            </ul>
            <h2>Всего курсов найдено: {allPosts}</h2>
        </div>
    )
}

export default AppHeader;