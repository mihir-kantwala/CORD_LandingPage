import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import CardSection from '../sections/CardSection';
import CardSectionThree from '../sections/CardSectionThree';
import CardSectionTwo from '../sections/CardSectionTwo';
import CollabSection from '../sections/CollabSection';
import CollabSectionTow from '../sections/CollabSectionTwo';
import ConnectSection from '../sections/ConnectSection';
import HeroSection from '../sections/HeroSection';
import InfoSectionTow from '../sections/InfoSectionTow';
import LastSection from '../sections/LastSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ConnectSection />
        <CollabSection />
        <CardSection />
        <InfoSectionTow />
        <CardSectionTwo />
        <CollabSectionTow />
        <CardSectionThree />
        <LastSection />
      </main>
      <Footer />
    </>
  );
}
