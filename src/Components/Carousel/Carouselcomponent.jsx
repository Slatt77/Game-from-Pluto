import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carouselcomponent = ({caroclassname, content1, content2, imgsrc1, imgsrc2}) => {
  return (
    <Carousel className={caroclassname} autoPlay='true' infiniteLoop='true' interval='3000' showThumbs={false}>
        <div>
          <p>{content1}</p>
          <img src={imgsrc1} alt="" />
        </div>
        <div>
          <p>{content2}</p>
          <img src={imgsrc2} alt="" />
        </div>
 
    </Carousel>
 
  )
}

export default Carouselcomponent