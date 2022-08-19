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

function Project () {
    return (
        <section class="container">
          <div class="row align-items-center">

                <div class="card" style={styles.card}>
                  <div class="row">

                    <div class="col-4" style={styles.div1}>
                  <img src={Headshot} class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h3 class="card-title text-center">Robert Pape</h3>
                    <p class="card-text text-center">Full-Stack Web Developer</p>
                    <p class="card-text text-center"><small class="text-white-30">JavaScript / React / HTML / CSS / MERN / APIs / NodeJS / OOP / PWA / Express / SQL / No-SQL / ORM / MVC</small></p>
                  </div>
                </div>
                
                <div class="col-8">
                <div class="card-body">
                  <h5 class="card-header text-center" id="aboutMe">About Me</h5>
                  <div class="card-body text-center">
                    <p class="card-text lh-lg">Hello! My name is Robert Pape. I live in Queen Creek, Arizona and currently attending the University of Arizona Full Stack Web-Development bootcamp. I’ve always been the one to report and detect system errors but soon I’ll be helping to resolve them! I’m excited to pursue a career in web development where I can grow and expand in this field.  I look forward to the continuous learning, had work, dedication and problem solving. Lets Code!</p>
                    <img src={Arizona} class="card-img-top align-items-center" alt="..." style={styles.mountain}/>
                  </div>
                </div>
              </div>
             </div>

            </div>
          </div>

        </section>
    )
}

export default Project;