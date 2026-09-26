import Container from '../components/Container';
import '../styles/HeroSection.css';

export default function LastSection() {
  return (
    <section>
      <Container className="h-full p-25">
        <div className="flex gap-8">
          <div className=" grow bg-[#2ddfa9] card-1-radius p-10">
            <h1 className="text-6xl mb-5">Start Building</h1>

            <p className="max-w-md">
              Explore our{' '}
              <span className="inline-block max-w-full border  p-2 threeBordeRounded-witoutcolor ">
                collaboration Guides
              </span>{' '}
              to play around with adding Cord to your product today.
            </p>
          </div>
          <div className="w-1/4 bg-[#d8d8d8] rounded-[50px] p-10">
            <h1 className="text-6xl mb-5">Pricing</h1>
            <p>
              Get for free or see our{' '}
              <span className="inline-block max-w-full border  p-2 threeBordeRounded-witoutcolor   ">
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
