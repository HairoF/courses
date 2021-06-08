import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import './App.css';
import AppHeader from '../header';
import PostAddForm from '../post-add-form';
import CourseList from '../course-list';
import Modal from '../modal';
import Spinner from '../spinner';

import {fetchCourses, fetchCourse} from '../api';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            currentShown: 0,
            onDuration: false,
            onPrice: false,
            onRate: false,
            loading: false
        };
        this.onClose = this.onClose.bind(this);
        this.itemSelected = this.itemSelected.bind(this);
        this.onSubmitEvent = this.onSubmitEvent.bind(this);
        this.onDurationHandler = this.onDurationHandler.bind(this);
        this.onPriceHandler = this.onPriceHandler.bind(this);
        this.onRateHandler = this.onRateHandler.bind(this);
    }

    async onSubmitEvent(data) {
        const url = document.location.pathname;
        
        if(data.course.trim() === '' && data.skill.trim() === '') {
            alert("Add course or skill")
            return
        }

        const courses = await fetchCourses(url,data);
        console.log(courses)
        this.setState({data: courses})
        
    }

    componentDidUpdate() {
        //Oops
        console.log('Поток ерестроен...')
        console.log(this.state)
    }

    onDurationHandler(eve) {
        console.log(eve)
        this.setState(({onDuration})=> ({
            onPrice: false,
            onDuration: !onDuration,
            onRate: false
        }))
    }

    onPriceHandler(eve) {
        console.log(eve)
        this.setState( ({onPrice}) => ({
            onPrice: !onPrice,
            onDuration:false,
            onRate: false
        }))
    }

    onRateHandler(eve) {
        console.log(eve)
        this.setState( ({onRate}) => ({
            onPrice: false,
            onDuration:false,
            onRate: !onRate
        }))
    }

    onClose() {
        this.setState({
            currentShown: 0
        })
    }

    async itemSelected(course_ID) {
        const url = document.location.pathname;
        console.log(`URL: ${url}, course_ID: ${course_ID}`);
        const course = await fetchCourse(url,course_ID);
        this.setState({
            currentShown: course
        })
    }

    async componentDidMount() {

    }

    render() {
        const allPosts = this.state.data.length || 0;
        const {currentShown, onPrice, onDuration, onRate, loading} = this.state;
        const dataSlice = this.state.data.slice();
        const isLoading = loading ? <Spinner/> : null;

        return (
            <Router>
                <div className="app">
                    <AppHeader
                        allPosts={allPosts}
                        duration={onDuration}
                        price={onPrice}
                    />
                    <PostAddForm
                        onSubmitEvent={this.onSubmitEvent}
                    >
                        <Route path='/' exact/>
                        <Route path='/all/'/>
                        <Route path='/programming/'/>
                        <Route path='/analys'/>
                    </PostAddForm>
                    <CourseList
                        onDurationHandler={this.onDurationHandler}
                        onPriceHandler={this.onPriceHandler}
                        onRateHandler={this.onRateHandler}
                        data={dataSlice}
                        price={onPrice}
                        rate={onRate}
                        duration={onDuration}
                        itemSelected={this.itemSelected}
                    />
                    {currentShown !== 0 ?
                        <Modal
                            onClose={this.onClose}
                            course={currentShown}
                        />
                        : null}
                </div>
            </Router>
        )
    }
}

export default App;
