import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import './App.css';
import AppHeader from '../header';
import PostAddForm from '../post-add-form';
import CourseList from '../course-list';
import Modal from '../modal';

import {fetchCourses, fetchCourse} from '../api';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            currentShown: 0
        };
        this.onClose = this.onClose.bind(this);
        this.itemSelected = this.itemSelected.bind(this);
        this.onSubmitEvent = this.onSubmitEvent.bind(this);
    }

    async onSubmitEvent(data) {
        const url = document.location.pathname;
        console.log(`URL: ${url}, DATA: ${data}`);
        const courses = await fetchCourses(url,data);
        console.log(courses)
        this.setState({data: courses})
        
    }

    componentDidUpdate() {
        //Oops
        // console.log(this.state)
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
        const {currentShown, data} = this.state;

        return (
            <Router>
                <div className="app">
                    <AppHeader
                        allPosts={allPosts}
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
                        data={data}
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
