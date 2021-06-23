import React, {Component} from 'react';
import './course-list-item.css';



export default class CourseListItem extends Component {

    onPush = () => {
        this.props.itemSelected()
    }

    render() {
        const {title, duration, rating,  price} = this.props;
        const rate = this.props.rating && typeof(this.props.rating) === 'number'? <li className="item-info__element">Рейтинг: {rating.toFixed(2)}</li> : null; 
        return(
            <div className="app-list-item d-flex justify-content-between">
            <div className="item__info">
                <span className="item-title">{title}</span>
                <ul className="item-group">
                    {rate}
                    <li className="item-info__element">Длительность: {duration} ч</li>
                    <li className="item-info__element">Цена: {price} ₽</li>
                </ul>
            </div>
            <div className="list-group-item_button d-flex justify-content-center align-items-center">
                <button type="button" 
                        className="btn btn-outline-info"
                        onClick={(e)=>this.onPush(e)}>
                    Подробнее
                </button>  
            </div>
        </div>
        )
    }
}

