import Container from '../components/Container';
import sideimg from '../assets/sideimg1.png';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function InfoSectionTow() {
  const emojiRef = useRef(null);

  useEffect(() => {
    const emoji = emojiRef.current;

    // Floating animation
    const floatAnimation = gsap.to(emoji, {
      y: -25,
      rotate: 2,
      duration: 2,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
    });

    // Hover animation
    const handleEnter = () => {
      gsap.to(emoji, {
        scale: 1.1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleLeave = () => {
      gsap.to(emoji, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    emoji.addEventListener('mouseenter', handleEnter);
    emoji.addEventListener('mouseleave', handleLeave);

    return () => {
      floatAnimation.kill();
      emoji.removeEventListener('mouseenter', handleEnter);
      emoji.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <section>
      <Container className="h-full py-25 flex justify-between">
        <div className="flex w-full flex-col  gap-8">
          <h1 className="text-6xl md:text-7xl font-medium">
            <span
              data-aos="fade-up"
              className="inline-block max-w-full border border-black px-6 threeBordeRounded pb-4 pt-3 box-shadow2"
            >
              Customize the
            </span>

            <br />

            <span
              data-aos="fade-up"
              data-aos-delay="100"
              className="inline-block max-w-full bg-black text-white px-6 threeBordeRounded py-4 box-shadow2"
            >
              entier experience
            </span>
          </h1>
          <p
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="200"
            data-aos-offset="0"
            className="max-w-xl text-xl"
          >
            there's no such thing as one-size-fit-all. you can match your brand
            by changing colours, found and styling, and implement our SDK to fil
            natively into your product's workflow.
          </p>
        </div>
        <div data-aos="zoom-in-up" className=" flex justify-center">
          <img ref={emojiRef} src={sideimg} className="glow-icon" />
        </div>
      </Container>
    </section>
  );
}
