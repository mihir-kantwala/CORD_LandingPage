import Container from '../components/Container';
import GetStatedButton from '../components/GetStartedButton';
import '../styles/HeroSection.css';

export default function HeroSection() {
  return (
    <section>
      <Container className="h-screen">
        <div className=" max-w-10xl flex flex-col gap-7 justify-center items-start h-full  ">
          <h1 className="text-6xl md:text-8xl font-medium">
            <span className="inline-block max-w-full border border-black px-6 threeBordeRounded pb-4 pt-3">
              Get teams talking
            </span>

            <br />

            <span className="inline-block max-w-full bg-black text-white px-6 threeBordeRounded py-4">
              in your product
            </span>
            <span className="bg-[#6f56dd] text-[#6f56dd] px-6 rounded-full  pb-3 pt-2.5 ">
              ...
            </span>
          </h1>

          <p className="max-w-xl text-xl">
            Add collaboration to your product in under an hour. Our SDK helps
            you re-imagine your app with a rich, real-time collaboration
            experience - in minutes, not months.
          </p>
          <div className="flex gap-5 items-baseline">
            <GetStatedButton name="Get Started" />
            <span className="font-semibold">Request a demo</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
