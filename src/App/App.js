import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import './App.css';
import AppHeader from '../header';
import PostAddForm from '../post-add-form';
import CourseList from '../course-list';
import Modal from '../modal';
import Spinner from '../spinner';
import SearchPanel from '../search-form';

import {fetchCourses, fetchCourse} from '../api';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            server: {
                URL: null,
                DATA:null
            },
            data: [],
            vacancy: [],
            vacancyName: '',
            competitionString: '',
            currentShown: 0,
            onDuration: false,
            onPrice: false,
            onRate: false,
            filter: {
                from: null,
                to: null
            },
            loading: false
        };
        this.onClose = this.onClose.bind(this);
        this.itemSelected = this.itemSelected.bind(this);
        this.onSubmitEvent = this.onSubmitEvent.bind(this);
        this.onDurationHandler = this.onDurationHandler.bind(this);
        this.onPriceHandler = this.onPriceHandler.bind(this);
        this.onRateHandler = this.onRateHandler.bind(this);
        this.onChangeFrom = this.onChangeFrom.bind(this);
        this.onChangeTo = this.onChangeTo.bind(this);
        this.onSearchJob = this.onSearchJob.bind(this);
    }

    async onSubmitEvent(data) {
        const url = document.location.pathname;
        
        if(data.course.trim() === '' && data.skill.trim() === '') {
            alert("Add course or skill")
            return
        }
        this.setState({
            data: [],
            server: {
                URL: url,
                DATA: data
            },
            loading: true
        })
    }

    async componentDidUpdate() {
        //Oops
        console.log('Поток ерестроен...')
        if(this.state.loading) {
            const {URL, DATA} = this.state.server;
            fetchCourses(URL,DATA)
            .then(courses => this.setState({data: courses, loading: false}))
            
        }
    }

    onDurationHandler(eve) {
        // console.log(eve)
        this.setState(({onDuration})=> ({
            onPrice: false,
            onDuration: !onDuration,
            onRate: false
        }))
    }

    onPriceHandler(eve) {
        // console.log(eve)
        this.setState( ({onPrice}) => ({
            onPrice: !onPrice,
            onDuration:false,
            onRate: false
        }))
    }

    onRateHandler(eve) {
        // console.log(eve)
        this.setState( ({onRate}) => ({
            onPrice: false,
            onDuration:false,
            onRate: !onRate
        }))
    }

    onChangeFrom(event) {
        const number = event ? parseInt(event.replace(/\D/g,'')) : null;
        this.setState({
            filter: {from:number},
        })
    }
    onChangeTo(event) {
        const number = event ? parseInt(event.replace(/\D/g,'')) : null;
        this.setState({
            filter: {to:number}
        })
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

    async onSearchJob(vacancyAndSkills) {
        // console.log(vacancyAndSkills)
        const url = '/programming'
        const {beliberda, competitionList} = await fetchCourses(url,vacancyAndSkills);
        const competitionString = competitionList.join(', ')
        this.setState({
            vacancy: beliberda,
            competitionString: competitionString,
            vacancyName: vacancyAndSkills.queryVacancy
        })

        // console.log(this.state);
    }
    

    render() {
        const {vacancy, vacancyName, competitionString} = this.state;
        const allPosts = this.state.data.length || 0;
        const {currentShown, onPrice, onDuration, onRate, loading} = this.state;
        const {from, to} = this.state.filter;
        const dataSlice = from && to 
                        ? this.state.data.filter(element => to < parseInt(element.duration) < from ) 
                        : from 
                        ? this.state.data.filter(element => from < parseInt(element.duration))
                        : to
                        ? this.state.data.filter(element => to > parseInt(element.duration))
                        : this.state.data.slice();
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
                        <Route path='/programming/'/>
                    </PostAddForm>
                    <div className="message">
                        <hr/>
                        <div className="message__navigate alert alert-warning">Поиск по вакансии</div>
                    </div>
                    <SearchPanel onSearch={this.onSearchJob}/>
                    {isLoading}

                    <CourseList
                        onDurationHandler={this.onDurationHandler}
                        onPriceHandler={this.onPriceHandler}
                        onRateHandler={this.onRateHandler}

                        data={dataSlice}

                        vacancy={vacancy}
                        queryVacancy={vacancyName}
                        competitionString={competitionString}

                        price={onPrice}
                        rate={onRate}
                        duration={onDuration}

                        onChangeFrom={this.onChangeFrom}
                        onChangeTo={this.onChangeTo}

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
