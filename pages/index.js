import MainHero from '../components/main-hero';
import Reviews from '../components/reviews';
import {NextSeo} from 'next-seo';
import Affiliations from '../components/affiliations';
import IndexGallery from '../components/index-gallery';


export default function Home() {
  return (
    <div >
      <NextSeo
        title="Home - Distinctive Drafting and Design"
        description="Distinctive Drafting and Design, LLC - Available for your drafting and design needs in South Texas"
      />
      <main className="pt-16">
        <MainHero className=" " />
        <div className=" mx-auto text-center">
          {/* Introductory video
          <div className="h-screen mx-auto">
            <iframe className="w-full h-3/4"  src="https://www.houzz.com/embed/highlightVideo/0b609f5e0ddc2946" allow="autoplay; fullscreen" />
          </div> */}
          {/* Who We Are */}
          <div className="contain flex-row content-between">
            <h1 className="section-title pl-4 border-l-2">Imagine your dream home. Then see it come to life</h1>
            <h2 className="text-2xl tracking-widest font-thin pt-10 h-1/2">At Distinctive Drafting and Design, our goal is to build the home of your dreams and make the process as simple as possible. Whether you are looking to build the perfect house or looking to remodel your current home and give it a fresh feel, Distinctive Drafting and Designs can help you every step of the way.</h2>
          </div>
          <IndexGallery />
          <Affiliations />
          <Reviews />
        </div>
      </main>
      <footer>
      </footer>
    </div>
  )
}
