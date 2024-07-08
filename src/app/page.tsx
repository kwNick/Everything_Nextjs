import Image from 'next/image';
import windows from "../images/windows.jpg";
import oranges from "../images/productOY.jpg";
import streets from '../images/streets.jpg';
import madara from '../images/madara.jpg';
import beach from '../images/beach.jpg';
import retro from '../images/retro.jpg';
import blurTown from '../images/blur-town.jpg';
import TextImageReveal from '@/components/TextImageReveal';
import { honk } from '@/fonts/fontsGoogle';
import LandingTitle from '@/components/LandingTitle';
import LandingHero from '@/components/LandingHero';
import ImageParallax from '@/components/ImageParallax';
import TextParallax from '@/components/TextParallax';

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-y-4">

      <div className='min-h-[10vh]' />

      <div className='flex w-full h-[80vh] rounded-md bg-rose-950 py-8'>
        <LandingHero>
          <ImageParallax>
            <section className='h-full w-1/5 flex flex-col items-center justify-around overflow-hidden '>
              <div className='min-h-full w-full '>
                <Image src={streets} alt='streets image for landing page' height={500} width={350} className='left imgUp min-w-full min-h-full ' />
              </div>
              <div className='min-h-full w-full '>
                <Image src={madara} alt='madara image for landing page' height={500} width={350} className='left imgUp min-w-full min-h-full ' />
              </div>
            </section>
          </ImageParallax>

          <section className={`relative mx-4 h-full w-3/5 flex items-center justify-center text-center`}>
            <Image src={blurTown} alt="bg for title hero section" height={500} width={500} className='mainImg absolute w-full h-full' priority />
            <LandingTitle>
              <h1 className={`drop-shadow-2xl shadow-2xl shadow-amber-500 text-9xl uppercase ${honk.className}`} >Home Page!</h1>
            </LandingTitle>
          </section>

          <ImageParallax>
            <section className='h-full w-1/5 flex flex-col items-center justify-around overflow-hidden'>
              <div className='min-h-full w-full '>
                <Image src={beach} alt='beach image for landing page' height={500} width={350} className='right imgUp min-w-full min-h-full ' />
              </div>
              <div className='min-h-full w-full '>
                <Image src={retro} alt='retro image for landing page' height={500} width={350} className='right imgUp min-w-full min-h-full ' />
              </div>
            </section>
          </ImageParallax>
        </LandingHero>

      </div>

      <div className='min-h-[25vh]' />

      <section className='relative min-w-full h-[20%] text-nowrap overflow-hidden bg-slate-700 bg-opacity-30 my-10'>
        <TextParallax>
          <div className='flex'>
            <p className='textTop w-full text-white uppercase '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dignissimos repudiandae, ipsa iure blanditiis, magnam, quis tenetur id perspiciatis voluptates totam cum in? Fugit alias rerum minus aspernatur rem consequatur aliquid neque vel doloremque possimus?
            </p>
            <p className='textTop w-full text-white uppercase'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dignissimos repudiandae, ipsa iure blanditiis, magnam, quis tenetur id perspiciatis voluptates totam cum in? Fugit alias rerum minus aspernatur rem consequatur aliquid neque vel doloremque possimus?
            </p>
          </div>
          <div className='flex'>
            <p className='textMiddle w-full text-white uppercase pr-[50px] '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dignissimos repudiandae, ipsa iure blanditiis, magnam, quis tenetur id perspiciatis voluptates totam cum in? Fugit alias rerum minus aspernatur rem consequatur aliquid neque vel doloremque possimus? ---hellio
            </p>
            <p className='textMiddle w-full text-white uppercase pr-[50px] '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dignissimos repudiandae, ipsa iure blanditiis, magnam, quis tenetur id perspiciatis voluptates totam cum in? Fugit alias rerum minus aspernatur rem consequatur aliquid neque vel doloremque possimus?
            </p>
          </div>
          <div className='flex'>
            <p className='textBottom w-full text-white uppercase'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dignissimos repudiandae, ipsa iure blanditiis, magnam, quis tenetur id perspiciatis voluptates totam cum in? Fugit alias rerum minus aspernatur rem consequatur aliquid neque vel doloremque possimus?
            </p>
            <p className='textBottom w-full text-white uppercase'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dignissimos repudiandae, ipsa iure blanditiis, magnam, quis tenetur id perspiciatis voluptates totam cum in? Fugit alias rerum minus aspernatur rem consequatur aliquid neque vel doloremque possimus?
            </p>
          </div>
        </TextParallax>
      </section>

      <TextImageReveal>
        <section className="m-4 h-[60vh] w-3/5 flex items-center gap-x-10 text-3xl tracking-wider font-semibold font-serif">
          <div>
            <p className='reveal-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae labore ab culpa, suscipit quaerat molestiae distinctio blanditiis minus similique, repellendus inventore nam possimus perferendis alias!</p>
          </div>
          <Image src={windows} alt={'windows'} width={150} height={250} className='reveal-image w-auto' />
        </section>

        <section className="m-4 h-[60vh] w-3/5 flex items-center gap-x-10 text-3xl tracking-wider font-semibold font-serif">
          <Image src={oranges} alt={'fruit'} width={150} height={250} className='reveal-image w-auto' />
          <div>
            <p className='reveal-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur unde aspernatur commodi? Autem ratione sint voluptate accusantium animi illo, odit suscipit modi aut minus facere rerum voluptates at velit voluptas enim eos nam in? Culpa.</p>
          </div>
        </section>

      </TextImageReveal>
    </div>
  );
}
