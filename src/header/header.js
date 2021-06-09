import React from 'react';
import './app-header.css';
import {Link} from 'react-router-dom';

const AppHeader = ({allPosts, onDurationHandler,onPriceHandler, onFiltersDelete,price,duration}) => {
    return(
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
                <h1 className="header-title navbar-brand">
                    <a className="link p-2 mb-5" href='/'><img src="aik.png"></img></a>
                </h1>
                <ul className="header-list">
                    <li>
                        {/* <Link className={`p-2 ${duration ? '' : 'bg-white'} rounded`} to='/'>По длительности</Link> */}
                    </li>
                    <li>
                        {/* <Link className={`p-2 ${price ? '' : 'bg-white'} rounded`} to='/'>По цене</Link> */}
                    </li>
                    <li>
                        {/* <Link className="shadow p-2 bg-white rounded" to='/'>Убрать фильтры</Link>    */}
                    </li>
                </ul>
                <h2 className='count'>Всего курсов найдено: {allPosts}</h2>
            </nav>
            
        </div>
    )
}

export default AppHeader;