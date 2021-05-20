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
        const elements = this.props.data.map((elem) => {
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