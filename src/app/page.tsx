import Image from 'next/image'
import windows from "../images/windows.jpg"
import oranges from "../images/productOY.jpg"
import HomeAnimations from '@/components/HomeAnimations';
import { honk } from '@/fonts/fontsGoogle';

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-y-4">
      <section className="m-4 h-[80vh] w-3/5 flex items-center justify-center">
        <h1 className={`landingTitle drop-shadow-2xl shadow-2xl shadow-amber-500 text-9xl uppercase ${honk.className}`} >Home Page!</h1>
      </section>

      <div className='min-w-screen h-[15%] mt-2 mb-2 pt-2 pb-2 overflow-hidden'>
        <p className='w-[90%] '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dignissimos repudiandae, ipsa iure blanditiis, magnam, quis tenetur id perspiciatis voluptates totam cum in? Fugit alias rerum minus aspernatur rem consequatur aliquid neque vel doloremque possimus?
        </p>
      </div>

      <HomeAnimations>
        <section className="m-4 h-[60vh] w-3/5 flex items-center gap-x-10 text-3xl tracking-wider font-semibold font-serif">
          <p className='reveal-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae labore ab culpa, suscipit quaerat molestiae distinctio blanditiis minus similique, repellendus inventore nam possimus perferendis alias!</p>
          <Image src={windows} alt={'windows'} width={200} height={250} className='reveal-image w-auto' />
        </section>
        <section className="m-4 h-[80vh] w-3/5 flex items-center gap-x-10 text-3xl tracking-wider font-semibold font-serif">
          <p className='reveal-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur unde aspernatur commodi? Autem ratione sint voluptate accusantium animi illo, odit suscipit modi aut minus facere rerum voluptates at velit voluptas enim eos nam in? Culpa.</p>
          <Image src={oranges} alt={'fruit'} width={200} height={250} className='reveal-image w-auto' />
        </section>
      </HomeAnimations>
    </div>
  );
}
