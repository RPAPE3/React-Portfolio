import React from 'react';
import WYD from '../images/User-Feed-Page.png'
import ZR1 from '../images/ZR-1-Stop-Shop.png';
import Trivia from '../images/Trivia-War.png';
import Ecommerce from '../images/E-commerce.png';
import EmployeeTracker from '../images/Employee-Tracker.png'

const styles = {
    mainP: {
        marginBottom: -2,
    },
    cards: {
        maxHeight: 540, 
        backgroundColor: '#9bb7d0',
    },
    images: {
        // height: '80%',
        // marginTop: '7%',
        // marginLeft: '5%',
    },
    wydImage: {
        // height: '63%',
        // marginTop: '1%',
        // marginLeft: '5%',
    },
    triviaImg: {
        // height: '60%',
        // marginTop: '2%',
        // marginLeft: '10%'
    },
    Ecommerce: {
        // marginTop: '4%',
        // height: '80%',
        // marginLeft: '10%'
    },
    cardP: {
        marginBottom: -2,
    },
    cardA: {
        marginTop: 10,
    },
    cardBody: {
        marginTop: '17%',
        marginLeft: '8%',
    }
};

function Portfolio () {
    return (
        <section className="container" style={{}}>

            <br/>
            
            <div className="card overflow-auto mb-5" style={styles.cards}>
                <div className="row g-0">
                    <div className="col-md-7">
                        <img src={WYD} className="img-fluid rounded float-start" style={styles.wydImage} alt="..."/>
                    </div>
                    <div className="col-md-5">
                        <div className="card-body" style={styles.cardBody}>
                            <h3 className="card-title" id="two">WYD</h3>
                            <p className="card-text text-decoration-underline" style={styles.cardP}>Interactive MERN Stack Single-Page Application:</p>
                            <ul>
                                <li>GraphQL with a Node.js and Express.js server</li>
                                <li>MongoDB and Mongoose ODM for database</li>
                                <li>queries and mutations for retrieving, adding, updating, and deleting data</li>
                                <li>React for the front end</li>
                            </ul>
                            <p className="card-text"><small className="text-white-30">MongoDB / Express / React.JS / Node.JS / BCrypt Authentication</small></p>
                            <a href="https://peaceful-reef-29677.herokuapp.com/" target="_blank" className="btn btn-primary">Go To Deployed Application</a>
                            <br/>
                            <a href="https://github.com/RPAPE3/WYD" target="_blank" className="btn btn-primary" style={styles.cardA}>Go To GitHub Repo</a>
                        </div>
                    </div>
                </div>
            </div>


                <div className="card overflow-auto mb-5" style={styles.cards}>
                    <div className="row g-0">
                        <div className="col-md-5">
                            <div className="card-body" style={styles.cardBody}>
                            <h3 className="card-title" id="two">ZR-1-Stop-Shop</h3>
                            <p className="card-text text-decoration-underline" style={styles.cardP}>Interactive Full-Stack Project:</p>
                            <ul>
                                <li>MySQL / Sequelize ORM for database</li>
                                <li>Node.js and Express.js for RESTful API</li>
                                <li>GET and POST routes</li>
                                <li>Responsive, Interactive, Authentication</li>
                            </ul>
                            <p className="card-text"><small className="text-white-30">JavaScript / Handlebars / CSS</small></p>
                            <a href="https://whispering-basin-00391.herokuapp.com/" target="_blank" className="btn btn-primary">Go To Deployed Application</a>
                            <br/>
                            <a href="https://github.com/RPAPE3/Project-2" target="_blank" className="btn btn-primary" style={styles.cardA}>Go To GitHub Repo</a>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <img src={ZR1} className="img-fluid rounded float-end" style={styles.images} alt="..."/>
                        </div>
                    </div>
                  </div>

                  <div className="card overflow-auto mb-5" style={styles.cards}>
                    <div className="row g-0" >
                        <div className="col-md-7">
                            <img src={Trivia} className="img-fluid rounded float-start" style={styles.triviaImg} alt="..."/>
                        </div>
                        <div className="col-md-5">
                            <div className="card-body" style={styles.cardBody}>
                                <h3 className="card-title" id="three">Trivia-War</h3>
                                <p className="card-text text-decoration-underline" style={styles.cardP}>Interactive Front-End Project:</p>
                                <ul>
                                    <li>Two server side APIs</li>
                                    <li>Accept and respond to user input</li>
                                    <li>Use client-side storage</li>
                                    <li>Polished UI</li>
                                </ul>
                                <p className="card-text"><small className="text-white-30">JavaScript / CSS / HTML</small></p>
                                <a href="https://rpape3.github.io/Trivia-War/" target="_blank" className="btn btn-primary">Go To Deployed Application</a>
                                <br/>
                                <a href="https://github.com/RPAPE3/Trivia-War" target="_blank" className="btn btn-primary" style={styles.cardA}>Go To GitHub Repo</a>
                            </div>
                        </div>
                    </div>
                  </div>

                  <div className="card overflow-auto mb-5" style={styles.cards}>
                    <div className="row g-0">
                        <div className="col-md-5">
                            <div className="card-body" style={styles.cardBody}>
                            <h3 className="card-title" id="two">E-Commerce Back End</h3>
                            <p className="card-text text-decoration-underline" style={styles.cardP}>Object-Relational Mapping "ORM"</p>
                            <ul>
                                <li>configure Express.js API to use Sequelize</li>
                                <li>Sequelize interacts with a MySQL Database</li>
                                <li>RESTful CRUD Operations</li>
                                <li>Creat / Read / Update / Delete</li>
                            </ul>
                            <p className="card-text"><small className="text-white-30">JavaScript / MySQL2 / Sequelize / Express.js</small></p>
                            <a href="https://drive.google.com/file/d/1JXKxbAVBcxUPZPsKJjXhJj5hepYeP37W/view" target="_blank" className="btn btn-primary">Go To Walk Though Video</a>
                            <br/>
                            <a href="https://github.com/RPAPE3/E-commerce-Back-End" target="_blank" className="btn btn-primary" style={styles.cardA}>Go To GitHub Repo</a>
                            </div>
                        </div>
                        
                        <div className="col-md-7">
                            <img src={Ecommerce} className="img-fluid rounded float-end" style={styles.Ecommerce} alt="..."/>
                        </div>
                    </div>
                  </div>

              <div className="card overflow-auto mb-3" style={styles.cards}>
                <div className="row g-0">
                    <div className="col-md-7">
                        <img src={EmployeeTracker} className="img-fluid rounded float-start" style={styles.images} alt="..."/>
                    </div>
                    <div className="col-md-5">
                        <div className="card-body" style={styles.cardBody}>
                            <h3 className="card-title" id="two">Employee Tracker</h3>
                            <p className="card-text text-decoration-underline" style={styles.cardP}>SQL - Content Management Systems "CMS"</p>
                            <ul>
                                <li>MySQL2 - MySQL Database performs queries</li>
                                <li>Inquirer Package interacts with user via the command line</li>
                                <li>Console.table.Package prints MySQL rows to the console</li>
                                <li>Asynchronous queries</li>
                            </ul>
                            <p className="card-text"><small className="text-white-30">JavaScript / Node.js / Inquirer / MySql</small></p>
                            <a href="https://drive.google.com/file/d/1pkRo7A0-m5CSo2Uz_gLR5VUqVtiT4RfL/view" target="_blank" className="btn btn-primary">Go To Walk Through Video</a>
                            <br/>
                            <a href="https://github.com/RPAPE3/Employee-Tracker" target="_blank" className="btn btn-primary" style={styles.cardA}>Go To GitHub Repo</a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
};

export default Portfolio;