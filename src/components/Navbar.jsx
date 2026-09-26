import Container from './Container';
import GetStatedButton from './GetStartedButton';
import '../styles/HeroSection.css';

export default function Navbar() {
  return (
    <nav className="py-4 fixed bg-[#d1d1d1c0]  w-full top-0 left-0 shadow-xl">
      <Container>
        <div className="flex items-center justify-between">
          <span className="logo-font font-semibold text-2xl text-white bg-black px-2 threeBordeRounded">
            CORD
          </span>

          <div className="hidden md:flex items-center gap-5">
            <h1>Product</h1>
            <h1>Pricing</h1>
            <h1>Docs</h1>
            <h1>Jobs</h1>
            <h1>Product</h1>
            <h1>About</h1>
            <GetStatedButton name="Get Started" />
          </div>
        </div>
      </Container>
    </nav>
  );
}
