import React from 'react';

import './modal.css';

class Modal extends React.Component {
    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }
    
    componentWillUnmount() {
        document.body.style.overflow = 'unset';
    }
    render() {
        const {onClose} = this.props;
        const {title, description, url, duration, acquired_skills, author, price, rating, required_skills} = this.props.course;
        const skillArray = acquired_skills.split(';');
        const skillElement = skillArray.map((skill,i) => {
            return (
                <li key={i}>{skill}</li>
            )
        })
        let requiredSkillElement
        if(required_skills) {
            const requiredSkillArray = required_skills.split(';');
                requiredSkillElement = requiredSkillArray.map((skill,i) => {
            return (
                <li key={i}>{skill}</li>
            )
        })
        }
        return (
            <div className="modal-vindow">
                <div className="modal__app">
                    <div className="modal__header">
                        <div className="modal__title">
                            <h3 className="modal__title-title">{title}</h3>
                            <div className="modal__title-info">
                                <span className="modal__info__element">Автор: <b>{author}</b></span>
                                <span className="modal__info__element">Длительность: <b>{duration}</b></span>
                                <span className="modal__info__element">Цена: <b>{price}</b></span>
                                {rating ? <span className="modal__info__element"></span> : null}
                            </div>
                        </div>
                        <div className="modal__link">
                            <a href={url} target="_blank" rel="noreferrer">Перейти на источник</a>
                        </div>
                    </div>
                    <div className="modal__main d-flex flex-row">
                        <div className="modal__description">
                            <h3>Описание курса</h3>
                            <div className='modal__description-text'>{description}</div>
                        </div>
                        <div className="modal__skills">
                        <h4>Требуется для прохождения курса</h4>
                        <ul className="modal__skills-required">
                            {required_skills ? requiredSkillElement: <p>Лишь ваше усердие</p>}
                        </ul>
                        <hr/>
                        <h4>После прохождения курса овладеете</h4>
                        <ul className="modal__skills-acquired">
                            {skillElement}
                        </ul>
                        </div>
                    </div>
                    <span 
                        className="close-button"
                        onClick={onClose}>&times;</span>
                </div>
                
            </div>
        )
    }
}
export default Modal;