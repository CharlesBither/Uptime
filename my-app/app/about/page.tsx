import About from "../components/about"
import Navbar from "../components/navbar"
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'About us - Uptime',
}

const AboutPage = () => {
    return (
      <>
        <Navbar />
        <About />
      </>
    )
}

export default AboutPage