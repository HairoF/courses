import React from 'react';
import './app-header.css';
import {Link} from 'react-router-dom';

export default class AppHeader extends React.Component {
    render() {
        
        return(
            <div className="header">
                <nav className="navbar navbar-expand-lg navbar-light  d-flex justify-content-between">
                    <h1 className="header-title">
                        <a className="link p-2 mb-5" href="/"><img src="aik.png"></img></a>
                    </h1>
                    <div className="form-check form-switch">
                        <Link className="p-2 bg-white rounded" to='/programming'>Standard search</Link>
                    </div>
                    <h2 className='count'>Всего курсов найдено: {this.props.allPosts}</h2>
                </nav>
            </div>
        )
    }
}


// <ul className="header-list">
// <li>
//     {/* <Link className={`p-2 ${doc ? 'bg-white' : ''} rounded`} ></Link> */}
// </li>
// <li>
//     {/* <Link className={`p-2 ${price ? '' : 'bg-white'} rounded`} to='/'>По цене</Link> */}
// </li>
// <li>
//     {/* <Link className="shadow p-2 bg-white rounded" to='/'>Убрать фильтры</Link>    */}
// </li>
// </ul>