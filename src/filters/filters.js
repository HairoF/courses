import React, {Component} from 'react';
import './filters.css';
export default class Filters extends Component {

    render() {
        const {duration,price,rate} = this.props;
        return (
        <div className="content__filter">
            <h3>ФИЛЬТРЫ</h3>
            <h4>Курсы {this.props.courseCount}</h4>
            <div className="content__filter_checkbox form-check">
                <input className="form-check-input" checked={duration} type="checkbox" 
                        value="1" id="flexRadioDuration" 
                        onChange={(event) => this.props.onDurationHandler(event.target.checked)}/>
                <label className="form-check-label" htmlFor="flexRadioDuration">
                   Продолжительность, в часах
                </label>
                <div className="input__fromTo">
                    <input type="text" 
                            className="check__input check__input-from form-control" 
                            name='durat'
                            placeholder="ОТ"
                            onChange={(event)=> this.props.onChangeFrom(event.target.value)}/>
                    <input type="text" 
                            className="check__input check__input-to form-control" 
                            name='durat'
                            placeholder="ДО"
                            onChange={(event)=> this.props.onChangeTo(event.target.value)}/>
                </div>
            </div>
            <div className="content__filter_checkbox form-check">
                <input className="form-check-input" checked={price} type="checkbox" 
                        value="2" id="flexRadioPrice" 
                        onChange={(event) => this.props.onPriceHandler(event.target.checked)}/>
                <label className="form-check-label" htmlFor="flexRadioPrice">
                    Стоимость, в рублях
                </label>
                <div className="input__fromTo">
                    <input type="text" 
                            className="check__input check__input-from form-control" 
                            name='price'
                            placeholder="ОТ"
                            onChange={(event)=> this.props.onChangeFrom(event.target.value)}/>
                    <input type="text" 
                            className="check__input check__input-to form-control" 
                            name='price'
                            placeholder="ДО"
                            onChange={(event)=> this.props.onChangeTo(event.target.value)}/>
                </div>
            </div>
            <div className="content__filter_checkbox form-check">
                <input className="content__filter_checkbox form-check-input" checked={rate} 
                        type="checkbox" value="3" id="flexRadioRate" 
                        onChange={(event) => this.props.onCOURSERAHandler(event.target.checked)}/>
                <label className="form-check-label" htmlFor="flexRadioRate">
                    Рейтинг
                </label>
            </div>
            <div className="content__filter_checkbox form-check">
                <input className="content__filter_checkbox form-check-input" checked={rate} 
                        type="checkbox" value="4" id="flexCoursera" 
                        onChange={(event) => this.props.onCOURSERAHandler(event.target.checked)}/>
                <label className="form-check-label" htmlFor="flexCoursera">
                    Только <span className="text-family">Coursera</span>
                </label>
            </div>
            <div className="content__filter_checkbox form-check">
                <input className="content__filter_checkbox form-check-input" checked={rate} 
                        type="checkbox" value="5" id="flexUdemy" 
                        onChange={(event) => this.props.onUDEMYHandler(event.target.checked)}/>
                <label className="form-check-label" htmlFor="flexUdemy">
                    Только <span className="text-family">Udemy</span>
                </label>
            </div>
            <div className="content__filter_checkbox form-check">
                <input className="content__filter_checkbox form-check-input" checked={rate} 
                        type="checkbox" value="6" id="flexNetology" 
                        onChange={(event) => this.props.onNETOLOGYHandler(event.target.checked)}/>
                <label className="form-check-label" htmlFor="flexNetology">
                    Только <span className="text-family">Netology</span>
                </label>
            </div>
        </div>
        )
    }
}