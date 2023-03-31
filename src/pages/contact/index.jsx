
import { memo } from 'react';
import Title from '../../components/title';
import useEamil from '../../hooks/useEamil';
import useValidation from '../../hooks/useValidation';
import './style.scss';

function Contact(){
    const {form,sendEmail} = useEamil()
    const [name,mail,message,setInputValue] = useValidation()
    
    return (
        <section className='G-container contact-page'>
            <Title head='contact' text='Feel free to Contact me by submitting the form below and I will get back to you as soon as possible' />
            <form ref={form} className='contact-inputs' onSubmit={(e)=>{
                if(name && mail && message){
                    sendEmail(e)
                }
            }}>
                <div className="send-btn" data-aos='fade-right'>
                    <label>Name</label>
                    <input type="text" 
                        placeholder='Jone Doe' 
                        name='user_name' 
                        onChange={setInputValue}
                        required/>
                </div>
                <div className="send-btn" data-aos='fade-left'>
                    <label>Email</label>
                    <input 
                        type="email" 
                        placeholder='item@mail.ru'
                        name='user_email' 
                        onChange={setInputValue}
                    required/>
                </div>
                <div className="send-btn" data-aos='fade-right'>
                    <label>Message</label>
                    <textarea 
                        name="message" 
                        rows="10" 
                        placeholder='Enter Your Message'
                        onChange={setInputValue}
                        required
                    />
                </div>
                <div className='send-btn'data-aos='fade-left'>
                    <button type='submit' className='to-project' >
                        Send Message
                        <span className='icon-telegram'/>
                    </button>
                </div>
            </form>
        </section>
    )
}

export default memo(Contact);