import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function (){
    const form = useRef();
    const sendEmail = e => {
        e.preventDefault();
        emailjs.sendForm('service_7uc9y1l',
         'template_5vig4lw', form.current, 
         'bPh3yNwywNX0iSZqD')
          .then((result) => {
            alert('Email has been sent')
          },
          (error) => {
            alert('Erorr')
          });
          e.target.reset()
    }

    return {form,sendEmail}
}