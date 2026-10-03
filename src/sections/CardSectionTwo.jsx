import Container from '../components/Container';
import GetStartedButton from '../components/GetStartedButton';
import image1 from '../assets/section6img.png';
import '../styles/HeroSection.css';

export default function CardSectionTwo() {
  return (
    <section>
      <Container className="h-screen p-25">
        <div
          data-aos="fade-up"
          className="h-full flex justify-center bg-[#e7e7e7] rounded-4xl box-shadow"
        >
          <div className="w-1/2 ">
            <img
              src={image1}
              alt="Chat Image"
              className="rounded-r-4xl w-full h-full object-cover"
            />
          </div>

          <div className=" flex w-1/2 flex-col justify-center items-start gap-6 p-25">
            <div className="text-xl">
              <span
                data-aos="fade-up"
                data-aos-delay="100"
                className="inline-block max-w-full border bg-black text-white border-black px-4 threeBordeRounded pb-2 pt-1"
              >
                Bye vs Build makes sence
              </span>
            </div>
            <div
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="200"
              data-aos-offset="0"
            >
              <p className="border-[#b6b6b6]  text-sm border-l-3 pl-4  ">
                "I had to explain to our CEO why we buy and not build
                in-house... Once I showed him the demo, with all the features he
                said 'Okay, i get it'"
              </p>
              <span className="text-xs pl-5">
                Product Manager, Mihir kantwala
              </span>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex gap-5 items-baseline"
            >
              <GetStartedButton name="View the Docs" className="text-md" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
