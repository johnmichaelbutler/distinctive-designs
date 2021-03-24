import Mapbox from '../components/mapbox';
import Head from 'next/head';
import Team from '../components/team';
import PageHero from '../components/page-hero';
export default function AboutUs() {
  return (
    <div className="pt-16">
      <Head>
        <title>About Us - Distinctive Designs LLC</title>
        <link rel="icon" href="/logo_white.ico" />
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet' />
        <script src="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js" />
      </Head>
        <div className="">
          <PageHero imageName="house_photos/snavely/snavely_house.jpg" pageName="About Us" alt="About Us Page"/>
          <div className="contain mx-auto text-center">
            <h1 className="section-title">What Makes Us Stand Out</h1>
            <p className="body-text">We are an architectural firm that provides residential and commercial designs, remodels, compliance reports, and any drafting needs for construction. We have a vast library from modest homes to the lavish. Contact us and we can discuss your design needs. Allow us to show you what our experience can create for you.</p>
            <Team />
            <Mapbox />
          </div>
        </div>
    </div>
  )
}