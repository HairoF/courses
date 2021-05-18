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
                const {id, ...elemProps} = elem;
            return(
                <li key={id} className="list-group-item">
                    <CourseListItem 
                    {...elemProps}
                    onDelete={() => this.props.onDelete(id)}
                    itemSelected={() => this.props.itemSelected(id)}
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