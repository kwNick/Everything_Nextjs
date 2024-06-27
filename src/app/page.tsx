import Image from 'next/image'
import windows from "../images/windows.jpg"
import oranges from "../images/productOY.jpg"

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-y-10">
      <section className="m-4 h-[100vh] w-3/5 flex items-center justify-center">
        <h1 className=''>HomePage!</h1>
      </section>

      <section className="m-4 h-[100vh] w-3/5 flex items-center gap-x-10">
        <p className='reveal-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas possimus natus ullam dolores, qui minima quos voluptate necessitatibus odio quod dicta quia similique sequi aperiam placeat fugiat quam fuga commodi explicabo veniam, impedit quidem. Expedita sunt fugiat exercitationem iure qui tempora, temporibus dolorem. Distinctio, incidunt voluptate. Eius autem modi provident obcaecati quidem beatae, nobis veritatis blanditiis deleniti, vero, in odit facilis eveniet optio ipsa dolorem! Eaque obcaecati numquam animi quibusdam harum enim ea assumenda, impedit modi recusandae ratione et nulla in consequatur perspiciatis culpa illo quasi maiores voluptate earum pariatur dolores magnam alias quam? Corrupti iure quod praesentium. Iste, inventore!</p>
        <Image src={windows} alt={'windows'} width={200} height={250} className='reveal-image w-auto' />
      </section>

      <section className="m-4 h-[100vh] w-3/5 flex items-center gap-x-10">
        <p className='reveal-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit eos porro harum nostrum. Illum sapiente pariatur atque eveniet sed quisquam odit! Rerum provident eius eum laboriosam architecto, iure dolorum hic nisi fuga, magni obcaecati corrupti quae, quo soluta iusto quaerat totam adipisci alias nostrum vel quod ea ullam aut nobis. Accusantium optio, nam autem facilis, quos possimus sit odit aut dolor iste repellendus perspiciatis explicabo sunt molestiae modi facere nemo delectus. Ad ex facere iure.</p>
        <Image src={oranges} alt={'fruit'} width={200} height={250} className='reveal-image w-auto' />
      </section>
    </div>
  );
}
