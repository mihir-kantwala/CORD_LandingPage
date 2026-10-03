import Container from './Container';
import '../styles/HeroSection.css';

export default function Footer() {
  return (
    <footer className="bg-black text-white ">
      <Container className="h-full py-15 ">
        <div className="flex gap-10 ">
          <div className="w-1/3 text-9xl font-extrabold">GSAP</div>
          <div className="flex grow justify-between text-sm">
            <div>
              <h3 className="font-semibold">Company</h3>
              <ul>
                <li>About</li>
                <li>Blog</li>
                <li>Jobs</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Product</h3>
              <ul>
                <li>Docs</li>
                <li>Pricing</li>
                <li>Status</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Legal</h3>
              <ul>
                <li>Privacy Policy</li>
                <li>Web Terms and Services</li>
                <li>Service Agreements</li>
                <li>Acceptable Use Policy</li>
                <li>Data Processing Agreements</li>
                <li>Security</li>
                <li>CCPA</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Contact</h3>
              <ul>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>info@cord.com</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
