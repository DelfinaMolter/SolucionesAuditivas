import "./Mission.css";

function Mission({data}){
    return(
        <div >
            <img src={data.img} alt="" />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </div>
    )
}

export default Mission;