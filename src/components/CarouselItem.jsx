import "./CarouselItem.css";


function CarouselItem({data}){
    return(
        <div className='carouselitem'>
            <picture>
                <source media="(max-width: 991px)" srcSet={data.imgMobile}/>
                <img
                    src={data.imgDesktop}
                    alt="Foto"
                />
            </picture>
        </div>

    )
}

export default CarouselItem;