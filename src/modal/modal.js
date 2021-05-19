import React from 'react';
import {fetchCourse} from "../api";
import './modal.css';

class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            course: null
        }

    }

    async componentDidMount() {
        const data = await fetchCourse(this.props.course);
        this.setState({course: data});
    }


    render() {
        const {onClose} = this.props;

        if (this.state.course) {
            const {title, description, fullUrl, period, skills} = this.state.course
            const skillArray = skills.split(';');
            const skillElement = skillArray.map((skill, idx) => {
                return (
                    <li key={idx}>{skill}</li>
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
        } else {
            return (
                <div className="app-backdrop">
                    <div className="app-modal">
                        <div className="header-modal">
                            <div className="modal-main">
                                <div className="modal-main_title">
                                    <h2>Загрузка...</h2>
                                </div>
                            </div>
                            <span
                                className="close-button"
                                onClick={onClose}>&times;</span>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Modal;