import Container from '../components/Container';
import '../styles/HeroSection.css';
import image1 from '../assets/Chat Group Sticker PNG Images (Transparent HD Photo Clipart).jfif';

export default function CardSection() {
  return (
    <section>
      <Container className="h-screen py-25">
        <div className="h-full grid grid-cols-3 grid-rows-2 gap-8 ">
          <div className="bg-[#bebebe] rounded-[50px]">
            <img src={image1} className="w-full h-full object-cover" />
          </div>
          <div className=" bg-[#4aff62] rounded-[50px]">img 2</div>
          <div className=" bg-[#849aff] rounded-[50px]">img 3</div>
          <div className=" bg-[#dbdbdb] rounded-[50px]">img 4</div>
          <div className="col-start-3 row-start-1 row-span-2 bg-[#ff8080] rounded-[50px]">
            img 5
          </div>
        </div>
      </Container>
    </section>
  );
}
