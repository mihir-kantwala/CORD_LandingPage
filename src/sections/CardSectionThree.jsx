import Container from '../components/Container';
import GetStartedButton from '../components/GetStartedButton';
import image1 from '../assets/ChatImage.jpg';
import '../styles/HeroSection.css';

export default function CardSectionThree() {
  return (
    <section>
      <Container className="h-screen p-15">
        <div className="h-full flex justify-center bg-[#e7e7e7] rounded-4xl ">
          <div className="w-1/2 flex items-start py-20">
            <img
              src={image1}
              alt="Chat Image"
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>

          <div className=" flex w-1/2 flex-col justify-center items-start gap-6 p-25">
            <div className="text-xl">
              <span className="inline-block max-w-full border bg-black text-white border-black px-4 threeBordeRounded pb-2 pt-1">
                Expetert in Collabration
              </span>
            </div>
            <div>
              <p className="border-[#b6b6b6]  text-sm border-l-3 pl-4  ">
                "Cord's collabration experience is leap ahead of waht we could
                have built in house."
              </p>
              <span className="text-xs pl-5">
                Product Manager, Pankaj malviya
              </span>
            </div>

            <div className="flex gap-5 items-baseline">
              <GetStartedButton
                name="Start building collabration"
                className="text-md"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
