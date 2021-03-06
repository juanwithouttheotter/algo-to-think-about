import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import Home from './pages/Home';
import EmployeesTable from './pages/EmployeesTable';
import NewEmployees from './pages/NewEmployees';

function App() {
        const burgerChange = (e) => {
                e.preventDefault();
                console.log(e.target);
        };

        return (
                <Router>
                        <div className="container">
                                <div className="columns">
                                        <div className="column">
                                                <nav className="navbar">
                                                        <div className="navbar-brand">
                                                                <a
                                                                        className="navbar-item"
                                                                        href="http://localhost:3000/"
                                                                >
                                                                        <FontAwesomeIcon
                                                                                icon={faAddressBook}
                                                                                size="2x"
                                                                                className="ml-4"
                                                                        />
                                                                        <h3 className="title is-4 pl-4 m-1">
                                                                                Employeable Employees Directory
                                                                        </h3>
                                                                </a>

                                                                <button
                                                                        className="navbar-burger"
                                                                        aria-label="menu"
                                                                        aria-expanded="false"
                                                                        onClick={burgerChange}
                                                                        type="button"
                                                                >
                                                                        {' '}
                                                                        <span aria-hidden="true" />
                                                                        <span aria-hidden="true" />
                                                                        <span aria-hidden="true" />
                                                                </button>
                                                        </div>

                                                        <div id="navbarBasicExample" className="navbar-menu is-active">
                                                                <div className="navbar-start ">
                                                                        <Link className="navbar-item" to="/">
                                                                                Home
                                                                        </Link>

                                                                        <Link className="navbar-item" to="/employees">
                                                                                Employees
                                                                        </Link>
                                                                        <Link
                                                                                className="navbar-item"
                                                                                to="/newemployees"
                                                                        >
                                                                                New Employees
                                                                        </Link>
                                                                </div>
                                                        </div>
                                                </nav>
                                        </div>
                                </div>
                                <div className="columns is-justify-content-center">
                                        <Switch>
                                                <Route exact path="/" component={Home} />
                                                <Route exact path="/employees" component={EmployeesTable} />
                                                <Route exact path="/newemployees" component={NewEmployees} />
                                        </Switch>
                                </div>
                        </div>
                </Router>
        );
}

export default App;
