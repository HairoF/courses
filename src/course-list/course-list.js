import React from 'react';
import CourseListItem from '../course-list-item';
import Filters from '../filters';
import VacancyList from '../vacancy-list/vacancy-list';
import './course-list.css';

class CourseList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            from: '',
            to: ''
        };
        this.isEmpty = this.isEmpty.bind(this);

    }
    // componentDidMount() {
    //     this.setState({
    //         data: this.props.data
    //     })
    // }
    componentDidUpdate() {
        console.log(this.state);
    }
    isEmpty(obj) {
        for(let key in obj)
        {
            return true;
        }
        return false;
    }



    render() {
        const {vacancy, queryVacancy, competitionString} = this.props

        const {price,duration,rate} = this.props;
        const isData = this.props.data.length > 0 ? true : false;
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
                <Filters
                    onDurationHandler={this.props.onDurationHandler}
                    onPriceHandler={this.props.onPriceHandler}
                    onRateHandler={this.props.onRateHandler}
                    price={this.props.price}
                    rate={this.props.rate}
                    duration={this.props.duration}
                    onChangeFrom={this.props.onChangeFrom}
                    onChangeTo={this.props.onChangeTo}
                    courseCount={data.length}
                />

                {isData 
                ? <ul className="content__list course-list list-group">
                    {elements}
                  </ul>
                : <VacancyList 
                    queryVacancy={queryVacancy} 
                    competitionString={competitionString}  
                    vacancy={vacancy} 
                    itemSelected={this.props.itemSelected}/>
                }

            </div>
        )
    }
}

export default CourseList;

