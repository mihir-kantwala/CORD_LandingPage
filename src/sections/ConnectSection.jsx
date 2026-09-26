import Container from '../components/Container';
import GetStartedButton from '../components/GetStartedButton';
import image1 from '../assets/ChatImage.jpg';
import '../styles/HeroSection.css';

export default function ConnectSection() {
  return (
    <section>
      <Container className="h-screen p-15">
        <div className="h-full flex justify-center bg-[#e7e7e7] rounded-4xl ">
          <div className="w-1/2 flex justify-center items-center">
            <img src={image1} alt="Chat Image" className="rounded-4xl" />
          </div>

          <div className=" flex w-1/2 flex-col justify-center items-start gap-6 p-25">
            <div className="text-xl">
              <span className="inline-block max-w-full border border-black px-4 threeBordeRounded pb-2 pt-1">
                Everything your
              </span>
              <br />
              <span className="inline-block max-w-full bg-black text-white px-4 threeBordeRounded py-2">
                users need
              </span>
            </div>

            <p className=" text-md">
              Cord comes with everything your users need or a rich collaboration
              exprerience from live chat and commenting, to annotation, live
              presece and integration.
            </p>

            <div className="flex gap-5 items-baseline">
              <GetStartedButton
                name="Start building Collaboration"
                className="text-lg"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
