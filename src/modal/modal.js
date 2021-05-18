import React from 'react';

import './modal.css';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    getData(id) {
        const data = await console.log(`got this ${id}`);
        this.setState({
            title:"a",
            description: "b"
        })
    }
    render() {
        const {title, description} = this.state;
        return (
            <div className="app-backdrop">
                <div className="app-modal">
                    <div className="header">
                        <h5>{title}</h5>
                        <span className="close-button" onClick={onClose}>&times;</span>
                    </div>
                    {description}
                </div>
            </div>
        )
    }
}
export default Modal;