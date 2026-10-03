import Container from '../components/Container';
import '../styles/HeroSection.css';

export default function CollabSectionTow() {
  return (
    <section>
      <Container className="h-full py-25">
        <div className="text-6xl px-25">
          <h1 className="text-2xl mb-8 ">Crod power collaboration in</h1>

          <div className="">
            <span className="inline-block max-w-full border bg-white border-black px-6 threeBordeRounded pb-4 pt-3 box-shadow2">
              Monday
            </span>
            <span className="inline-block max-w-full border border-black px-6 threeBordeRounded pb-4 pt-3 bg-white box-shadow2">
              {' '}
              Stoplight
            </span>
          </div>
          <div>
            <span className="inline-block max-w-full border bg-white box-shadow2  border-black px-6 threeBordeRounded pb-4 pt-3">
              Finmarket
            </span>
            <span className="inline-block max-w-full border border-black px-6 threeBordeRounded pb-4 pt-3 bg-white box-shadow2">
              Walnut
            </span>
          </div>
          <div>
            <span className="inline-block max-w-full border border-black px-6 threeBordeRounded pb-4 pt-4 bg-white box-shadow2">
              Trumpet
            </span>
            <span className="inline-block max-w-full bg-black text-white border-black px-6 threeBordeRounded  box-shadow2 py-4">
              <p className="text-[#b9b9b9] inline ">●</p>●
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
