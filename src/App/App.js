import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import './App.css';
import AppHeader from '../header';
import PostAddForm from '../post-add-form';
import CourseList from '../course-list';
import Modal from '../modal';
import {fetchCourses} from '../api';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            currentShown: 0
        };
        this.onClose = this.onClose.bind(this);
        this.itemSelected = this.itemSelected.bind(this);
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    onClose() {
        this.setState({
            currentShown: 0
        })
        // console.log(`Закрыл курс: ?{id}. Модалка в состоянии ${this.state.showModal}`);
    }

    itemSelected(id) {
        this.setState({
            currentShown: id
        })
    }

    async componentDidMount() {
        const courses = await fetchCourses()
        this.setState({data: courses})
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
                    <PostAddForm>
                        <Route path='/' exact/>
                        <Route path='/all/'/>
                        <Route path='/programming/'/>
                        <Route path='/analys'/>
                    </PostAddForm>
                    <CourseList
                        data={data}
                        itemSelected={this.itemSelected}
                    />
                    {currentShown > 0 ?
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
