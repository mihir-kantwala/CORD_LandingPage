import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import Container from '../components/Container';
import emoji from '../assets/emoji1.png';

export default function CollabSection() {
  const emojiRef = useRef(null);

  useEffect(() => {
    const emoji = emojiRef.current;

    // Floating animation
    const floatAnimation = gsap.to(emoji, {
      y: -20,
      rotate: -2,
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
      <Container className="h-full py-25 flex">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl md:text-6xl font-medium">
            <span
              data-aos="fade-up"
              className="inline-block max-w-full border border-black px-6 threeBordeRounded pb-4 pt-3 box-shadow2"
            >
              Collabrative Products
            </span>

            <br />

            <span
              data-aos="fade-up"
              data-aos-delay="100"
              className="inline-block max-w-full bg-black text-white px-6 threeBordeRounded py-4 box-shadow2"
            >
              Grow Faster
            </span>
          </h1>

          <p
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            className="max-w-xl text-xl"
          >
            Attract, engage and retain users by adding new ways for them to work
            together in your product. Let your users invite their teams through
            @mentions and share via emails - watch your user base grow.
          </p>
        </div>

        <div data-aos="fade-up">
          <img
            ref={emojiRef}
            src={emoji}
            className="emoji-icon w-100 h-100 object-cover"
            alt="Emoji"
          />
        </div>
      </Container>
    </section>
  );
}
