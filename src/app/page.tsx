
import Extensions from '@/components/Extensions'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import Questions from '@/components/Questions'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
  <NavBar/>
<Hero/>
<Features/>
<Extensions/>
<Questions/>

<Footer/>
     
    </main>
  )
}
