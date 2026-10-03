import Container from '../components/Container';
import GetStatedButton from '../components/GetStartedButton';
import '../styles/HeroSection.css';
import gsap from 'gsap';

import icon from '../assets/section1icon.png';
import { useEffect } from 'react';

export default function HeroSection() {
  useEffect(() => {
    gsap.from('.hero-icon', {
      x: 300,
      rotation: 360,
      scale: 1.5,
      duration: 1,
    });
  }, []);
  return (
    <section>
      <Container className="h-screen">
        <div className=" max-w-10xl flex flex-col gap-7 justify-center items-start h-full  ">
          <h1 className="text-6xl md:text-8xl font-medium pt-15">
            <span
              data-aos="fade-up"
              className="inline-block bg-white max-w-full border border-black px-6 threeBordeRounded pb-4 pt-3 box-shadow3"
            >
              {/* Get teams talking */}
              Every thing Animated
            </span>

            <br />
            <div className="flex">
              <span
                data-aos="fade-up"
                data-aos-delay="100"
                className="inline-block max-w-full bg-black text-white px-6 threeBordeRounded py-4 box-shadow3"
              >
                in your product
              </span>

              <img src={icon} className="hero-icon z-5 w-32 h-32 " />
            </div>

            {/* <span className="bg-[#6f56dd] text-[#6f56dd] px-6 rounded-full  pb-3 pt-2.5  ">
              ...
            </span> */}
          </h1>

          <p
            className="max-w-xl text-xl"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            Add collaboration to your product in under an hour. Our SDK helps
            you re-imagine your app with a rich, real-time collaboration
            experience - in minutes, not months.
          </p>
          <div
            className="flex gap-5 items-baseline "
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <GetStatedButton name="Get Started" />
            <button className="font-semibold cursor-pointer">
              Request a demo
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
