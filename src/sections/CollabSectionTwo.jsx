import Container from '../components/Container';
import '../styles/HeroSection.css';

import vid from '../assets/vid2.mp4';

export default function CollabSectionTow() {
  return (
    <section>
      <Container className="h-full  flex  bg-[#f5f5f5] py-20 rounded-4xl ">
        <div className="text-6xl w-full">
          <h1
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="text-2xl mb-8 "
          >
            Crod power collaboration in
          </h1>

          <div className="">
            <span
              data-aos="fade-up"
              className="inline-block max-w-full border bg-white border-black px-6 threeBordeRounded pb-4 pt-3 box-shadow2"
            >
              Monday
            </span>

            <span
              data-aos="fade-up"
              data-aos-delay="100"
              className="inline-block max-w-full border border-black px-6 threeBordeRounded pb-4 pt-3 bg-white box-shadow2"
            >
              {' '}
              Stoplight
            </span>
          </div>
          <div>
            <span
              data-aos="fade-up"
              data-aos-delay="200"
              className="inline-block max-w-full border bg-white box-shadow2  border-black px-6 threeBordeRounded pb-4 pt-3"
            >
              Finmarket
            </span>

            <span
              data-aos="fade-up"
              data-aos-delay="300"
              className="inline-block max-w-full border border-black px-6 threeBordeRounded pb-4 pt-3 bg-white box-shadow2"
            >
              Walnut
            </span>
          </div>
          <div>
            <span
              data-aos="fade-up"
              data-aos-delay="400"
              className="inline-block max-w-full border border-black px-6 threeBordeRounded pb-4 pt-4 bg-white box-shadow2"
            >
              Trumpet
            </span>

            <span
              data-aos="fade-up"
              data-aos-delay="500"
              className="inline-block max-w-full bg-black text-white border-black px-6 threeBordeRounded  box-shadow2 py-4"
            >
              <p className="text-[#b9b9b9] inline ">●</p>●
            </span>
          </div>
        </div>
        <div>
          <video src={vid} autoPlay muted loop playsInline />
        </div>
      </Container>
    </section>
  );
}
