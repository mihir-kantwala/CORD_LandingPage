import Container from '../components/Container';

export default function InfoSectionTow() {
  return (
    <section>
      <Container className="h-full py-25">
        <div className="flex flex-col  gap-8">
          <h1 className="text-6xl md:text-7xl font-medium">
            <span className="inline-block max-w-full border border-black px-6 threeBordeRounded pb-4 pt-3">
              Customize the
            </span>

            <br />

            <span className="inline-block max-w-full bg-black text-white px-6 threeBordeRounded py-4">
              entier experience
            </span>
          </h1>
          <p className="max-w-xl text-xl">
            there's no such thing as one-size-fit-all. you can match your brand
            by changing colours, found and styling, and implement our SDK to fil
            natively into your product's workflow.
          </p>
        </div>
      </Container>
    </section>
  );
}
