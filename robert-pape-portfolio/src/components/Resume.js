import React, { useState } from 'react';
import ResumeImg from '../images/Resume.png'

const styles = {
    button: {
        width: '25%',
        height: '15%',
        fontSize: '45px'
    },
    divImg: {
        width: '45%',
        marginLeft: '27%'
    }
};

function Resume () {

    const [resume, setResume] = useState(false)

    return (
        <div>
            {resume ? (
            <div>

                <img style={styles.divImg} src={ResumeImg} alt="..."/>

            </div>

            ) : (

            <div class="d-grid gap-2 col-6 mx-auto">

                <button class="btn btn-dark opacity-40 border border-warning border-5 border-opacity-50 position-absolute top-50 start-50 translate-middle" type="button" style={styles.button} onClick={() => setResume(true)}> View Resume</button>

            </div>
            )}
        </div>
    )
};

export default Resume;