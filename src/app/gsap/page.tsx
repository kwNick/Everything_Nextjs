import { bungee } from "@/fonts/fontsGoogle"

const page = () => {
    return (
        <section className="m-4 h-[80vh] w-3/5 flex items-center justify-center">
            <h1 className={`dynamicShadow drop-shadow-2xl shadow-2xl shadow-amber-500 text-9xl uppercase ${bungee.className}`} >GSAP!</h1>
        </section>
    )
}
export default page