import "./NosotrosSection.css";
import Mission from "./Mission";

const missions = [
    {
        img:'/images/vanguardia-icon.png',
        title:'Vanguardia',
        description:'Brindamos opciones de vanguardia que ayuden a las personas a recuperar su audición y participar plenamente en la sociedad.'
    },
    {
        img:'/images/responsabilidad-icon.png',
        title:'Responsabilidad',
        description:'Creemos en la importancia de construir relaciones sólidas basadas en la confianza y el respeto mutuo.'
    },
    {
        img:'/images/innovacion-icon.png',
        title:'Innovación',
        description:'Adaptamos a los avances tecnológicos para proporcionar las mejores opciones a nuestros clientes.'
    }
]

function NosotrosSection(){
    return(
        <div >
            <div className='container'>
                {missions.map((mission)=>
                    <Mission key={mission.title} data={mission}/>
                )
                }
            </div>
        </div>
    )
}

export default NosotrosSection;