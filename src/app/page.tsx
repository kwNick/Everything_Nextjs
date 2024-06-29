// 'use client';
import Image from 'next/image'
import windows from "../images/windows.jpg"
import oranges from "../images/productOY.jpg"
// import { useLenis } from 'lenis/react';

export default function Home() {
  // const lenis = useLenis(({ scroll }) => {
  //   // called every scroll
  // })
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-y-4">
      <section className="m-4 h-[100vh] w-3/5 flex items-center justify-center">
        <h1 className=''>HomePage!</h1>
      </section>

      <section className="m-4 h-[60vh] w-3/5 flex items-center gap-x-10 text-3xl tracking-wider font-semibold font-serif">
        <p className='reveal-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae labore ab culpa, suscipit quaerat molestiae distinctio blanditiis minus similique, repellendus inventore nam possimus perferendis alias!</p>
        <Image src={windows} alt={'windows'} width={200} height={250} className='reveal-image w-auto' />
      </section>

      <section className="m-4 h-[80vh] w-3/5 flex items-center gap-x-10 text-3xl tracking-wider font-semibold font-serif">
        <p className='reveal-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur unde aspernatur commodi? Autem ratione sint voluptate accusantium animi illo, odit suscipit modi aut minus facere rerum voluptates at velit voluptas enim eos nam in? Culpa.</p>
        <Image src={oranges} alt={'fruit'} width={200} height={250} className='reveal-image w-auto' />
      </section>

    </div>
  );
}
