import React from 'react';

import './modal.css';

class Modal extends React.Component {
    
    async getData(id) {
        const data = await console.log(`got this ${id}`);
    }
    render() {
        const {onClose} = this.props;
        const {title, description, fullUrl, period, skills} = this.props.course;
        const skillArray = skills.split(';');
        const skillElement = skillArray.map((skill) => {
            return (
                <li>{skill}</li>
            )
        })
        return (
            <div className="app-backdrop">
                <div className="app-modal">
                    <div className="header-modal">
                        <div className="modal-main">
                            <div className="modal-main_title">
                                <h2>{title}</h2>
                                <div className="modal-description">
                                    {description}
                                </div>
                            </div>
                            <ul className="modal-main_skills">
                                {skillElement}
                            </ul>
                        </div>
                        <span 
                        className="close-button"
                        onClick={onClose}>&times;</span>
                    </div>
                    description
                </div>
            </div>
        )
    }
}
export default Modal;