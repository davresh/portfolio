
import { memo} from 'react';
import { NavLink } from 'react-router-dom';
import { store } from '../../assets/store/store';
import Skills from '../../components/skill';
import Title from '../../components/title';
import './style.scss';


function About(){
    const usercv = store.CV
    return (
        <>
            <section className='G-container about-user-boxs'>
                <Title head='about me' text='Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology'/>
                <div className='col-1200'>
                    <div className='about-me-box' data-aos='flip-right'>
                        <h1>Get to know me!</h1>
                        <p>I'm a <b>Frontend Web Developer</b> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <b>Projects</b> section.</p>
                        <p className='marg-30'>I'm open to <b>Job</b> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <b>contact</b> me.</p>
                        <NavLink className='to-project' to={'/contact'}>contact <span className='icon-envelope-solid'/></NavLink>
                    </div>
                    <div className='about-me-box' data-aos='flip-left'>
                        <h1>My Skills</h1>
                        <div className='skill-boxs'>
                            {store.skills.map((el,id) => <Skills key={id} skill={el} />)}
                        </div>
                        <a 
                            href={usercv}
                            download='Davresh-Gharoyan-CV' 
                            className='to-project'
                        >Download CV <span className='icon-file-arrow-down-solid'/></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default memo(About);