import React from 'react';
import CourseListItem from '../course-list-item';


import './course-list.css';

class CourseList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.isEmpty = this.isEmpty.bind(this);
    }

    isEmpty(obj) {
        for(let key in obj)
        {
            return true;
        }
        return false;
    }
    render() {
        const {price,duration} = this.props;
        const data = price ? this.props.data.sort( (a,b) => a.price - b.price) : duration ? this.props.data.sort( (a,b) => a.duration - b.duration) : this.props.data
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
            <ul className="course-list list-group">
                {elements}
            </ul>
        )
    }
}

export default CourseList;