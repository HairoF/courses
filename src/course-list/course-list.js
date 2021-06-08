import React from 'react';
import CourseListItem from '../course-list-item';


import './course-list.css';

class CourseList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.isEmpty = this.isEmpty.bind(this);
        this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
    }

    isEmpty(obj) {
        for(let key in obj)
        {
            return true;
        }
        return false;
    }
    onChangeCheckbox(event) {
        console.log(event.target.value)
        this.props.onRateHandler(event.target.value)
    }
    render() {
        const {price,duration,rate} = this.props;
        const data = price 
                    ? this.props.data.sort( (a,b) => a.price - b.price) 
                    : duration 
                    ? this.props.data.sort( (a,b) => parseInt(a.duration) - parseInt(b.duration)) 
                    : rate
                    ? this.props.data.sort( (a,b) => parseFloat(b.rating) - parseFloat(a.rating)) 
                    : this.props.data
        const elements = data.map((elem) => {
            if (typeof elem === 'object' && this.isEmpty(elem)) {
                const {course_ID, ...elemProps} = elem;
            return(
                <li key={course_ID} className="list-group-item">
                    <CourseListItem 
                    {...elemProps}
                    itemSelected={() => this.props.itemSelected(course_ID)}
                    />
                </li>
            )
            }
        })
        return(
            <div className="content">
            <div className="content__filter">
                <h2>ФИЛЬТРЫ</h2>
            <div className="content__filter_checkbox form-check">
            <input className="form-check-input" checked={duration} type="checkbox" value="1" id="flexRadioDuration" onChange={(event) => this.props.onDurationHandler(event.target.checked)}/>
            <label className="form-check-label" htmlFor="flexRadioDuration">
                По продолжительности
            </label>
            </div>
            <hr/>
            <div className="content__filter_checkbox form-check">
            <input className="form-check-input" checked={price} type="checkbox" value="2" id="flexRadioPrice" onChange={(event) => this.props.onPriceHandler(event.target.checked)}/>
            <label className="form-check-label" htmlFor="flexRadioPrice">
                По стоимости
            </label>
            </div>
            <hr/>
            <div className="content__filter_checkbox form-check">
            <input className="form-check-input" checked={rate} type="checkbox" value="3" id="flexRadioRate" onChange={(event) => this.props.onRateHandler(event.target.checked)}/>
            <label className="form-check-label" htmlFor="flexRadioRate">
                По рейтингу
            </label>
            </div>
            </div>
            <ul className="content__list course-list list-group">
                {elements}
            </ul>
            </div>
        )
    }
}

export default CourseList;

