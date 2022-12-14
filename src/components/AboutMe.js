import React from 'react';
import Headshot from '../images/Profile-Pic.jpg';
import Arizona from '../images/Arizona-Desert-Mountains.jpg'


const styles = {
    card: {
        width: '100%',
    },
    div1: {
        marginTop: '3%',
    },
    mountain: {
      width: '80%'
    }
}

function AboutMe () {
    return (
        <section className="container">
          <div className="row align-items-center">

                <div className="card" style={styles.card}>
                  <div className="row">

                    <div className="col-4" style={styles.div1}>
                  <img src={Headshot} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h3 className="card-title text-center">Robert Pape</h3>
                    <p className="card-text text-center">Full-Stack Web Developer</p>
                    <p className="card-text text-center"><small className="text-white-30">JavaScript / React / HTML / CSS / MERN / APIs / NodeJS / OOP / PWA / Express / SQL / No-SQL / ORM / MVC</small></p>
                  </div>
                </div>
                
                <div className="col-8">
                <div className="card-body">
                  <h5 className="card-header text-center" id="aboutMe">About Me</h5>
                  <div className="card-body text-center">
                    <p className="card-text lh-lg">Hello! My name is Robert Pape. I live in Queen Creek, Arizona and currently attending the University of Arizona Full Stack Web-Development bootcamp. I’ve always been the one to report and detect system errors but soon I’ll be helping to resolve them! I’m excited to pursue a career in web development where I can grow and expand in this field.  I look forward to the continuous learning, hard work, dedication and problem solving. Lets Code!</p>
                    <img src={Arizona} className="card-img-top align-items-center" alt="..." style={styles.mountain}/>
                  </div>
                </div>
              </div>
             </div>

            </div>
          </div>

        </section>
    )
}

export default AboutMe;