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

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-y-4">

      <div className='hero flex w-full h-[80vh]'>
        <div className='h-full w-1/5 flex flex-col items-center justify-around overflow-hidden'>
          <div className='min-h-full w-full bg-slate-700'>
            <Image src={streets} alt='streets image for landing page' height={500} width={350} className='imgParallax min-w-full min-h-full' />
          </div>
          <div className='min-h-full w-full bg-slate-700'>
            <Image src={madara} alt='image image for landing page' height={500} width={350} className='imgParallax min-w-full min-h-full' />
          </div>
        </div>

        <section className={`relative m-4 h-full w-3/5 flex items-center justify-center`}>
          <Image src={blurTown} alt="bg for title hero section" height={500} width={500} className='absolute w-full h-full' />
          <h1 className={`landingTitle drop-shadow-2xl shadow-2xl shadow-amber-500 text-9xl uppercase ${honk.className}`} >Home Page!</h1>
        </section>

        <div className='h-full w-1/5 flex flex-col items-center justify-around overflow-hidden'>
          <div className='min-h-full w-full bg-slate-700'>
            <Image src={beach} alt='beach image for landing page' height={500} width={350} className='imgParallax min-w-full min-h-full ' />
          </div>
          <div className='min-h-full w-full bg-slate-700'>
            <Image src={retro} alt='retro image for landing page' height={500} width={350} className='imgParallax min-w-full min-h-full ' />
          </div>
        </div>

      </div>

      <div className='w-[90%] h-[15%] mt-2 mb-2 pt-2 pb-2 '>
        <p className='absolute'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dignissimos repudiandae, ipsa iure blanditiis, magnam, quis tenetur id perspiciatis voluptates totam cum in? Fugit alias rerum minus aspernatur rem consequatur aliquid neque vel doloremque possimus?
        </p>
      </div>

      <TextImageReveal>
        <section className="m-4 h-[60vh] w-3/5 flex items-center gap-x-10 text-3xl tracking-wider font-semibold font-serif">
          <p className='reveal-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae labore ab culpa, suscipit quaerat molestiae distinctio blanditiis minus similique, repellendus inventore nam possimus perferendis alias!</p>
          <Image src={windows} alt={'windows'} width={150} height={250} className='reveal-image w-auto' />
        </section>

        <section className="m-4 h-[60vh] w-3/5 flex items-center gap-x-10 text-3xl tracking-wider font-semibold font-serif">
          <p className='reveal-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur unde aspernatur commodi? Autem ratione sint voluptate accusantium animi illo, odit suscipit modi aut minus facere rerum voluptates at velit voluptas enim eos nam in? Culpa.</p>
          <Image src={oranges} alt={'fruit'} width={150} height={250} className='reveal-image w-auto' />
        </section>

      </TextImageReveal>
    </div>
  );
}
