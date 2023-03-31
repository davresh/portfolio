
import './style.scss';
import user from '../../assets/image/user.jpg'
import { NavLink} from 'react-router-dom';
import { memo,useRef } from 'react';
function Header(){
    const barRef = useRef()
    return (
        <>
        <a href='mailto:garoyan1910@gmail.com'>
            <span className='icon-style icon-envelope-solid'></span>
        </a>
        <header className='G-container header'>
           <div className='header-min-box'> 
                <div className='about-user'>
                    <img src={user} alt='Davresh Gharoyan' title='Davresh Gharoyan'/>
                    <h2 title='Frontend Developer' className='user-name' >Davresh Gharoyan</h2>
                </div>
                <div className='pages-head-box' ref={barRef} onClick={(e)=>{
                    e.stopPropagation()
                    e.target.classList.remove('page-link-block')
                }}>
                    <ul className='page-links' >
                        <li><span className='icon-cross' onClick={()=>{
                            barRef.current.classList.remove('page-link-block')
                        }}/></li>
                        <li><NavLink to={'/portfolio'}>home</NavLink></li>
                        <li><NavLink to={'/about'}>about</NavLink></li>
                        <li><NavLink to={'/projects'}>projects</NavLink></li>
                        <li><NavLink to={'/contact'}>contact</NavLink></li>
                    </ul>
                </div>
                <div className='bar-box'><span className='icon-bars-solid' onClick={()=>{
                    barRef.current.classList.add('page-link-block')
                }}/></div>
            </div>
        </header>
        </>
    )
}
export default memo(Header);