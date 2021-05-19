import React from 'react';
import './app-header.css';
import {Link} from 'react-router-dom';

const AppHeader = ({allPosts}) => {
    return(
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
                <h1 className="header-title navbar-brand">
                    <Link className="link p-2 mb-5" to='/'>Агрегатор курсов</Link>
                </h1>
                <ul className="header-list">
                    <li>
                        <Link className="shadow p-2 bg-white rounded" to='/all/'>Все</Link>
                    </li>
                    <li>
                        <Link className="shadow p-2 bg-white rounded" to='/programming/'>Программирование</Link>
                    </li>
                    <li>
                        <Link className="shadow p-2 bg-white rounded" to='/analysis/'>Анализ</Link>   
                    </li>
                </ul>
                <h2 className='count'>Всего курсов найдено: {allPosts}</h2>
            </nav>
            
        </div>
    )
}

export default AppHeader;