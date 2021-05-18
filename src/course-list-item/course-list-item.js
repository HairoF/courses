import React, {Component} from 'react';
import './course-list-item.css';



export default class CourseListItem extends Component {

    onPush = () => {
        this.props.itemSelected()
        this.props.onDelete()
    }

    render() {
        const {title, author, rating,  priceWithoutStr} = this.props;
        const rate = this.props.rating ? <li className="item-info__element">Рейтинг: {rating}</li> : null; 
        return(
            <div className="app-list-item d-flex justify-content-between">
            <div className="item__info">
                <span className="item-title">{title}</span>
                <ul className="item-group">
                    {rate}
                    <li className="item-info__element">Автор: {author}</li>
                    <li className="item-info__element">Цена: {priceWithoutStr}</li>
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
