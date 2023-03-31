
import './style.scss';

function Title({head,text}){
    return (
        <div className='title-text' data-aos='flip-down'>
            <h1>{head}</h1>
            <div className='hr-box'><div className='hr-line'/></div>
            <p>{text}</p>
        </div>
    )
}
export default Title;