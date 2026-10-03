import Container from './Container';
import GetStatedButton from './GetStartedButton';
import '../styles/HeroSection.css';

export default function Navbar() {
  return (
    <nav
      data-aos="fade-down"
      data-aos-delay="500"
      className="py-3 fixed bg-[#ffffff]  w-full top-0 left-0 shadow-md z-10"
    >
      <Container>
        <div className="flex items-center justify-between">
          <span className="logo-font font-semibold text-2xl text-white bg-black px-2 threeBordeRounded box-shadow4">
            GSAP
          </span>

          <div className="hidden md:flex items-center gap-5">
            <h1>Product</h1>
            <h1>Pricing</h1>
            <h1>Docs</h1>
            <h1>Jobs</h1>
            <h1>Product</h1>
            <h1>About</h1>
            <GetStatedButton name="Get Started" className="box-shadow4" />
          </div>
        </div>
      </Container>
    </nav>
  );
}
