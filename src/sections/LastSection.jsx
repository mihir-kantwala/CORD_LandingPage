import Container from '../components/Container';
import '../styles/HeroSection.css';

export default function LastSection() {
  return (
    <section>
      <Container className="h-full p-25">
        <div className="flex gap-8">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className=" grow bg-[#2ddfa9] card-1-radius p-10  box-shadow2"
          >
            <h1 className="text-6xl mb-5">Start Building</h1>

            <p className="max-w-md">
              Explore our{' '}
              <span className="inline-block max-w-full  bg-white border-none py-1 px-3 threeBordeRounded-witoutcolor ">
                collaboration Guides
              </span>{' '}
              to play around with adding Cord to your product today.
            </p>
          </div>
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-offset="0"
            className="w-1/4 bg-[#d8d8d8] rounded-[50px] p-10  box-shadow2"
          >
            <h1 className="text-6xl mb-5">Pricing</h1>
            <p>
              Get for free or see our{' '}
              <span className="inline-block max-w-full border bg-white border-none  py-1 px-3 threeBordeRounded-witoutcolor   ">
                Pricing
              </span>{' '}
              for the package that suits you
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
