import PageHero from '../components/page-hero';
import { NextSeo } from 'next-seo';
export default function Services() {
  return (
    <div className="pt-16 ">
      <NextSeo
        title="Services - Distinctive Drafting and Design"
        description="Services provided by Distinctive Drafting and Design "
      />
      <PageHero imageName="house_photos/modern_2.jpg" pageName="Services" alt="Services page" />
      <div className="contain mx-auto text-center">
        <h1 className="section-title">Imagine your dream home. Then see it come to life</h1>
        <p className="body-text">We develop a three dimensional sandbox where our team provides you with a visual concept of the interior and exterior fo the house, allowing you to get a true feel of your future home.</p>
        {/* Insert 3D rendering here  */}
        <div className="h-96 mt-10">
          <iframe  className="w-full h-full"  allow="autoplay" src="https://www.youtube.com/embed/zchm8A-iyHc?autohide=1&amp;autoplay=0&amp;controls=0&amp;enablejsapi=1&amp;iv_load_policy=3&amp;loop=0&amp;modestbranding=1&amp;playsinline=1&amp;rel=0&amp;showinfo=0&amp;wmode=opaque&amp;origin=https%3A%2F%2Fdistinctive-designsllc.com&amp;widgetid=1"  />
        </div>
        <br/>
        <p className="body-subheading">Our Services include:</p>
        <ul className="body-text">
          <li>3D Renderings</li>
          <li>Architectural Design and Drawings</li>
          <li>Custom Homes</li>
          <li>Remodels</li>
          <li>Home Additions and Extensions</li>
          <li>Drafting</li>
          <li>Floor Plans</li>
          <li>Site Planning</li>
          <li>Construction Drawings</li>
        </ul>
        <br />
        <p className="body-text">We work on many different residential and commercial projects including new homes, home additions, commercial finish-outs and new commercial buildings.</p>
        <br/>
        <h2 className="body-subheading">Serving:</h2>
        <p className="body-text">Rio Grande Valley, San Antonio, Austin, Hill Country</p>
      </div>
    </div>
  )
}