import React from 'react';
import ZR1 from '../images/ZR-1-Stop-Shop.png';
import Trivia from '../images/Trivia-War.png';

const styles = {
    mainCard: {
        width: "18rem",
        // height: "20rem",
        backgroundColor: '#9bb7d0',
    },
    mainP: {
        marginBottom: -2,
    },
    cards: {
        maxHeight: 540, 
        backgroundColor: '#9bb7d0',
    },
    images: {
        height: '80%',
        marginTop: '7%',
    }, 
    triviaImg: {
        height: '60%',
        marginTop: '2%',
        marginLeft: '10%'
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
        <section class="container">

            <br/>
            
            <div class="card mb-3" style={styles.cards}>
                <div class="row g-0">
                    <div class="col-md-7">
                        <img src={ZR1} class="img-fluid rounded-start" style={styles.images} alt="..."/>
                    </div>
                    <div class="col-md-5">
                        <div class="card-body" style={styles.cardBody}>
                            <h3 class="card-title" id="two">ZR-1-Stop-Shop</h3>
                            <p class="card-text text-decoration-underline" style={styles.cardP}>Interactive Full-Stack Project:</p>
                            <ul>
                                <li>MySQL / Sequelize ORM for database</li>
                                <li>Node.js and Express.js for RESTful API</li>
                                <li>GET and POST routes</li>
                                <li>Responsive, Interactive, Authentication</li>
                            </ul>
                            <p class="card-text"><small class="text-white-30">JavaScript / Handlebars / CSS</small></p>
                            <a href="https://whispering-basin-00391.herokuapp.com/" target="_blank" class="btn btn-primary">Go To Deployed Application</a>
                            <br/>
                            <a href="https://github.com/RPAPE3/Project-2" target="_blank" class="btn btn-primary" style={styles.cardA}>Go To GitHub Repo</a>
                        </div>
                    </div>
                </div>
            </div>

            <br/>

                <div class="card mb-3" style={styles.cards}>
                    <div class="row g-0">
                        <div class="col-md-5">
                            <div class="card-body" style={styles.cardBody}>
                            <h3 class="card-title" id="two">ZR-1-Stop-Shop</h3>
                            <p class="card-text text-decoration-underline" style={styles.cardP}>Interactive Full-Stack Project:</p>
                            <ul>
                                <li>MySQL / Sequelize ORM for database</li>
                                <li>Node.js and Express.js for RESTful API</li>
                                <li>GET and POST routes</li>
                                <li>Responsive, Interactive, Authentication</li>
                            </ul>
                            <p class="card-text"><small class="text-white-30">JavaScript / Handlebars / CSS</small></p>
                            <a href="https://whispering-basin-00391.herokuapp.com/" target="_blank" class="btn btn-primary">Go To Deployed Application</a>
                            <br/>
                            <a href="https://github.com/RPAPE3/Project-2" target="_blank" class="btn btn-primary" style={styles.cardA}>Go To GitHub Repo</a>
                            </div>
                        </div>
                        
                        <div class="col-md-7">
                            <img src={ZR1} class="img-fluid rounded-start" style={styles.images} alt="..."/>
                        </div>
                    </div>
                  </div>

                  <div class="card mb-3" style={styles.cards}>
                    <div class="row g-0" >
                        <div class="col-md-7">
                            <img src={Trivia} class="img-fluid rounded-start" style={styles.triviaImg} alt="..."/>
                        </div>
                        <div class="col-md-5">
                            <div class="card-body" style={styles.cardBody}>
                                <h3 class="card-title" id="three">Trivia-War</h3>
                                <p class="card-text text-decoration-underline" style={styles.cardP}>Interactive Front-End Project:</p>
                                <ul>
                                    <li>Two server side APIs</li>
                                    <li>Accept and respond to user input</li>
                                    <li>Use client-side storage</li>
                                    <li>Polished UI</li>
                                </ul>
                                <p class="card-text"><small class="text-white-30">JavaScript / CSS / HTML</small></p>
                                <a href="https://rpape3.github.io/Trivia-War/" target="_blank" class="btn btn-primary">Go To Deployed Application</a>
                                <br/>
                                <a href="https://github.com/RPAPE3/Trivia-War" target="_blank" class="btn btn-primary" style={styles.cardA}>Go To GitHub Repo</a>
                            </div>
                        </div>
                    </div>
                  </div>

                  <div class="card mb-3" style={styles.cards}>
                    <div class="row g-0">
                        <div class="col-md-5">
                            <div class="card-body" style={styles.cardBody}>
                            <h3 class="card-title" id="two">ZR-1-Stop-Shop</h3>
                            <p class="card-text text-decoration-underline" style={styles.cardP}>Interactive Full-Stack Project:</p>
                            <ul>
                                <li>MySQL / Sequelize ORM for database</li>
                                <li>Node.js and Express.js for RESTful API</li>
                                <li>GET and POST routes</li>
                                <li>Responsive, Interactive, Authentication</li>
                            </ul>
                            <p class="card-text"><small class="text-white-30">JavaScript / Handlebars / CSS</small></p>
                            <a href="https://whispering-basin-00391.herokuapp.com/" target="_blank" class="btn btn-primary">Go To Deployed Application</a>
                            <br/>
                            <a href="https://github.com/RPAPE3/Project-2" target="_blank" class="btn btn-primary" style={styles.cardA}>Go To GitHub Repo</a>
                            </div>
                        </div>
                        
                        <div class="col-md-7">
                            <img src={ZR1} class="img-fluid rounded-start" style={styles.images} alt="..."/>
                        </div>
                    </div>
                  </div>

              <div class="card mb-3" style={styles.cards}>
                <div class="row g-0">
                    <div class="col-md-7">
                        <img src={ZR1} class="img-fluid rounded-start" style={styles.images} alt="..."/>
                    </div>
                    <div class="col-md-5">
                        <div class="card-body" style={styles.cardBody}>
                            <h3 class="card-title" id="two">ZR-1-Stop-Shop</h3>
                            <p class="card-text text-decoration-underline" style={styles.cardP}>Interactive Full-Stack Project:</p>
                            <ul>
                                <li>MySQL / Sequelize ORM for database</li>
                                <li>Node.js and Express.js for RESTful API</li>
                                <li>GET and POST routes</li>
                                <li>Responsive, Interactive, Authentication</li>
                            </ul>
                            <p class="card-text"><small class="text-white-30">JavaScript / Handlebars / CSS</small></p>
                            <a href="https://whispering-basin-00391.herokuapp.com/" target="_blank" class="btn btn-primary">Go To Deployed Application</a>
                            <br/>
                            <a href="https://github.com/RPAPE3/Project-2" target="_blank" class="btn btn-primary" style={styles.cardA}>Go To GitHub Repo</a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
};

export default Portfolio;