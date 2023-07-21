
import emailjs from "@emailjs/browser";


export const sendEmail=(data)=>{
    emailjs.sendForm('service_gtzj4al', 'template_sxeyp3c', data,'sc_1rPPUe3AcD8G6r')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
}
