import Container from '../components/Container';
import '../styles/HeroSection.css';
import image2 from '../assets/iamge1.jfif';
import image1 from '../assets/image2.jfif';
import image3 from '../assets/image3.jfif';
import image4 from '../assets/image4.jfif';
import image5 from '../assets/image5.jfif';

export default function CardSection() {
  return (
    <section>
      <Container className="h-screen py-25">
        <div className="h-full grid grid-cols-3 grid-rows-2 gap-8 ">
          <div
            data-aos="fade-up"
            className=" rounded-[50px] overflow-hidden box-shadow2  "
          >
            <img src={image1} className="w-full h-full object-cover" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="  rounded-[50px] overflow-hidden box-shadow2 "
          >
            <img src={image2} className="w-full h-full object-cover" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="  rounded-[50px] overflow-hidden box-shadow2 "
          >
            <img src={image3} className="w-full h-full object-cover" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="  rounded-[50px] overflow-hidden box-shadow2 "
          >
            <img src={image4} className="w-full h-full object-cover" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="col-start-3 row-start-1 row-span-2  rounded-[50px] overflow-hidden box-shadow2 "
          >
            <img src={image5} className="w-full h-full object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
