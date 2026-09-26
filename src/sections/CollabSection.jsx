import Container from '../components/Container';

export default function CollabSection() {
  return (
    <section>
      <Container className="h-full py-25">
        <div className="flex flex-col  gap-8">
          <h1 className="text-6xl md:text-7xl font-medium">
            <span className="inline-block max-w-full border border-black px-6 threeBordeRounded pb-4 pt-3">
              Collabrative Products
            </span>

            <br />

            <span className="inline-block max-w-full bg-black text-white px-6 threeBordeRounded py-4">
              Grow Faster
            </span>
          </h1>
          <p className="max-w-xl text-xl">
            Attract, engage and retain users by addin new ways forn them to work
            togetherin your porduct. Let your users invite their terms through
            @mentions and saher via emails - wathch your user base grow.
          </p>
        </div>
      </Container>
    </section>
  );
}
