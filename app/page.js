import Footer from '@/components/footer/footer'
import Featured from '@/components/home/featured'
import Hero from '@/components/home/hero'
import NavBar from '@/components/navbar/navbar'

import hero from "@/public/assets/poster.png"

export default function Home() {
  return (
    <main>
        <section 
        className="h-[600px] w-full bg-black"
        >
            <section className="px-3 lg:px-6 xl:px-20">
                <NavBar />
                <section className="mt-10 sm:mt-16 lg:mt-20">
                    <Hero />
                </section>
            </section>
        </section>
        <section className="mt-10 px-3 lg:px-6 xl:px-20">
            <Featured />
        </section>
        <Footer />
    </main>
  )
}
