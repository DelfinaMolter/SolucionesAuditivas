import emailjs from "@emailjs/browser";

export const sendEmail=(data)=>{
    emailjs.sendForm('service_7kfl6zg', 'template_nyzk4ec', data,'hT2gwvfUJdgSCqtkn')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
}
