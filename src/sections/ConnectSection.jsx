import Container from '../components/Container';
import GetStartedButton from '../components/GetStartedButton';
import image1 from '../assets/section2img.png';
import '../styles/HeroSection.css';

export default function ConnectSection() {
  return (
    <section>
      <Container className="h-screen p-25">
        <div
          className="h-full flex justify-center bg-[#f0f0f0] rounded-4xl box-shadow "
          data-aos="fade-up"
        >
          <div className="w-1/2 flex items-center ">
            <img src={image1} alt="Chat Image" className="rounded-r-4xl" />
          </div>

          <div className=" flex w-1/2 flex-col justify-center items-start gap-6 p-25">
            <div className="text-xl">
              <span
                data-aos="fade-up"
                className="inline-block max-w-full border border-black px-4 threeBordeRounded pb-2 pt-1 box-shadow4"
              >
                Everything your
              </span>
              <br />
              <span
                data-aos="fade-up"
                data-aos-delay="100"
                className="inline-block max-w-full bg-black text-white px-4 threeBordeRounded py-2 box-shadow4"
              >
                users need
              </span>
            </div>

            <p
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="100"
              data-aos-offset="0"
              className=" text-md"
            >
              Cord comes with everything your users need or a rich collaboration
              exprerience from live chat and commenting, to annotation, live
              presece and integration.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex gap-5 items-baseline"
            >
              <GetStartedButton
                name="Start building Collaboration"
                className="text-lg box-shadow4"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
