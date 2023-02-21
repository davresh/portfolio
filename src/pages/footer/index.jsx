
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

function Footer(){
    return (
        <footer className='G-container'>
            <div className='socal-con'>
                <div className='footer-user-box'>
                    <ul className='page-links'>
                        <li><NavLink to={'/portfolio'}>home</NavLink></li>
                        <li><NavLink to={'/about'}>about</NavLink></li>
                        <li><NavLink to={'/projects'}>projects</NavLink></li>
                        <li><NavLink to={'/contact'}>contact</NavLink></li>
                    </ul>
                </div>
                <div className='footer-soc-box'>
                    <a href='tel:37477968132' className="user-number">+374 77968132 <span className='icon-phone'/></a>
                    <div className='footer-icon'>
                        <a target='_blank' href="https://www.facebook.com/100010516363307"><span className='icon-facebook'/></a>
                        <a target='_blank' href="https://www.instagram.com/dav._20/"><span className='icon-instagram'/></a>
                        <a target='_blank' href="https://www.linkedin.com/in/davresh-garoyan-97a170253/"><span className='icon-linkedin-in'/></a>
                        <a target='_blank' href="https://t.me/DavoGaroyan"><span className='icon-telegram'/></a>
                        <a target='_blank' href="https://github.com/davresh"><span className='icon-github'/></a>
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <h3>© Copyright 2023. Made by <a href="#root">Davresh Gharoyan</a></h3>
            </div>
        </footer>
    )
}

export default memo(Footer);