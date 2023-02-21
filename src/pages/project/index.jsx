
import { memo } from 'react';
import { store } from '../../assets/store/store';
import Template from '../../components/template';
import Title from '../../components/title';
import './style.scss';

function Project(){

    return (
        <>
            <section className='G-container my-project-app'>
                <Title head='PROJECTS' text='Here you will find some of the personal and clients projects that I created with each project containing its own case study' />
                <div className='project-user-box'>
                    {store.sites.map(el => <Template key={el.id} site={el} language={el.language} />)}
                </div>
            </section>
        </>
    )
}

export default memo(Project);