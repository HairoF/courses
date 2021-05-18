import React from 'react';
import CourseListItem from '../course-list-item';


import './course-list.css';

const CourseList = ({data, onDelete}) => {
    
    const elements = data.map((elem) => {
        if (typeof elem === 'object' && isEmpty(elem)) {
            const {id, ...elemProps} = elem;
        return(
            <li key={id} className="list-group-item">
                <CourseListItem 
                {...elemProps}
                onDelete={() => onDelete(id)}
                />
            </li>
        )
        }
    })
    
    function isEmpty(obj) {
        for(let key in obj)
        {
            return true;
        }
        return false;
    }

    return(
        <ul className="course-list list-group">
            {elements}
        </ul>
    )
}

export default CourseList;