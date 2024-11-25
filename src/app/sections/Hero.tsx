import memojiImage from '@/assets/images/memoji-computer.png'
import Image from 'next/image';
export const HeroSection = () => {
  return (

    <>
    <div className="container">
      <Image src={memojiImage} alt={'Girl peeking out of a laptop'}></Image>
    </div>
    </>
  );
};
