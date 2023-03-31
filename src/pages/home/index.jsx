
import { store } from '../../assets/store/store';
import userImage from '../../assets/image/user-img.jpg';
import { NavLink } from 'react-router-dom';
import './style.scss';
import { Typewriter } from 'react-simple-typewriter'
import { memo, useEffect } from 'react';

function Home(){

    const skills = store.skills;
    const usercv = store.CV

    return (
        <>
        <section className='G-container home-hero'>
            <div className='home-hero-user' data-aos='flip-right'>
                <img src={userImage} alt="user img" />
            </div>
            <div className='home-hero-text' data-aos='fade-left'>
                <h1>HEY, I'M DAVRESH</h1>
                <div className='text-animation'>
                    <span className='anim-1' >Skills</span>
                    <span className = 'anim-2'>
                    <Typewriter
                        words={skills}
                        loop={Infinity}
                        cursor
                        cursorBlinking='_'
                        typeSpeed={200}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                    </span>
                </div>
                <p>A Frontend Web Developer building the Frontend of Websites that leads to the success of the overall product</p>
                <p>
                    <NavLink className='to-project' to={'/projects'}>
                        projects <span className='icon-diagram-project-solid'/>
                    </NavLink>
                </p>
            </div>
        </section>
        <section className='G-container about-me-block'>
            <div className='resume' data-aos='flip-right'>
                <h1>Resume</h1>
                <p>If you are interested in my candidacy, you can download my resume directly from this site. Without registration and SMS.</p>
                <a 
                    href={usercv}
                    download='Davresh-Gharoyan-CV' 
                    className='to-project'
                >Download CV <span className='icon-file-arrow-down-solid'/></a>
            </div>
            <div className='hobby-purpose'>
                <div className='d-box' data-aos='fade-right'>
                    <h1>Hobby</h1>
                    <p>A little about my hobbies. During my free time I like listening to music, reading fantasy and historical books, watching movies, playing football, doing fitness.</p>
                </div>
                <div className='d-box' data-aos='fade-left'>
                    <h1>Purpose</h1>
                    <p>Become a “senior developer”, learn as many programming languages as possible, develop and become an expert in programming.</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default memo(Home);