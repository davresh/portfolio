
import Skills from '../skill';
import './style.scss';

function Template({site}){
    return (
        <div className='template-box'>
            <div className='template-img' data-aos='flip-right'>
                <h3>Click on the image to visit the website</h3>
                <a target='_blank' href={site.linkSite}>
                    <img src={site.img} alt={site.name}/>
                </a>
                
            </div>
            <div className='template-text' data-aos='flip-left'>
                <h1>{site.siteName}</h1>
                <p>{site.text}</p>
                <div className='skill-boxs'>{site.language.map((el,id) => <Skills key={id} skill={el} />)}</div>
                <p><a target='_blank' href={`${site.link}`} className='to-project'>go to gitHub <span className='icon-github'/></a></p>
            </div>
        </div>
    )
}   

export default Template;