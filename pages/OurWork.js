import { useState } from 'react';
import Image from 'next/image';
import PageHero from '../components/page-hero';
import Modal from '../components/modal';
import images_data from '../images_data';
export default function OurWork() {
  const [showModal, setShowModal] = useState(false);
  const [src, setSrc] = useState('');

  const handleClick = (src, width, height) => {
    setSrc(src);
    setShowModal(true);
    console.log(src, width)
  }


  const images = images_data.map(({className, src, width, height, name}) => (
    <div className={className} key={name}>
      <Image
        src={src}
        width={width}
        height={height}
        layout="responsive"
        className="object-fill cursor-pointer"
        onClick={() => handleClick(src)}
      />
    </div>
  ));

  return (
    <div className="pt-16">
      <PageHero pageName="Our Work" imageName="house_photos/snavely/pool.jpg" alt="Our Work Page" />
      {showModal && <Modal showModal={showModal} src={src} handleClose={() => setShowModal(false)} />}
      {/* <iframe width="1280" height="720" src="https://www.houzz.com/embed/highlightVideo/0b609f5e0ddc2946" frameBor="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> */}
      <div className="contain mx-auto text-center">
        <h1 className="section-title">Let our work speak for itself</h1>
        <div className="mt-10 grid grid-cols-9 grid-rows-9 gap-x-2 gap-y-2">
          {images}
        </div>
        {/* Specific Designs */}
        <span className="font-thin text-2xl xl:text-4xl border-b-2">Hill Country Home Design</span>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 my-5">
          <iframe title="Hill Country House Demo" className="video" src="https://www.youtube.com/embed/DMkhmEiZsaY?modestbranding=1" allow="fullscreen; autoplay " loading="lazy" />
          <iframe title="Hill Country Design Demo" className="video" src="https://www.youtube.com/embed/mxsxOrxWRyc?modestbranding=1" allow="fullscreen; autoplay " loading="lazy" />
          <iframe title="Country House Demo" className="video" src="https://www.youtube.com/embed/4ZEO7Abe3U8?modestbranding=1" allow="fullscreen; autoplay " loading="lazy" />
          <div className="video relative">
            <Image
              src="/distinctive-design-images/house_photos/hill_country_1.jpg"
              layout="fill"
              className="object-fill"
            />
          </div>
          <div className="video relative">
            <Image
              src="/distinctive-design-images/house_photos/hill_country_2.jpg"
              layout="fill"
              className="object-fill"
            />
          </div>
        </div>
        <span className="font-thin text-2xl xl:text-4xl border-b-2">Tuscan Home Design</span>
        <div className="grid grid-cols-2 gap-2 my-5">
          <iframe title="Tuscan House Demo" className="video" src="https://www.youtube.com/embed/u7e0oXsXf9U" allow="fullscreen; autoplay " loading="lazy" />
          <iframe title="Tuscan House Design" className="video" src="https://www.youtube.com/embed/zchm8A-iyHc" allow="fullscreen; autoplay " loading="lazy" />
          <iframe title="Tuscan House Overall" className="video" src="https://www.youtube.com/embed/KEFXmXTgdHs" allow="fullscreen; autoplay " loading="lazy" />
          <div className="video relative">
            <Image
              src="/distinctive-design-images/house_photos/tuscan_1.jpg"
              layout="fill"
              className="object-fill"
            />
          </div>
        </div>
        <span className="font-thin text-2xl xl:text-4xl border-b-2">Mediterranean Home Design</span>
        <div className="grid grid-cols-2 gap-2 my-5">
          <iframe title="Mediterranean House Demo" className="video" src="https://www.youtube.com/embed/ZDhoxbIHleg" allow="fullscreen; autoplay " loading="lazy" />
          <div className="video relative">
            <Image
              src="/distinctive-design-images/house_photos/mediterranean_1.jpg"
              layout="fill"
              className="object-fill"
            />
          </div>
        </div>
        <span className="font-thin text-2xl xl:text-4xl border-b-2">Modern Home Design</span>
        <div className="grid grid-cols-2 gap-2 my-5">
          <iframe title="Modern House Demo" className="video" src="https://www.youtube.com/embed/rFfa4F6J_CI" allow="fullscreen; autoplay " loading="lazy" />
          <div className="video relative">
            <Image
              src="/distinctive-design-images/house_photos/modern_1.jpg"
              layout="fill"
              className="object-fill"
            />
          </div>
          <div className="video relative">
            <Image
              src="/distinctive-design-images/house_photos/modern_2.jpg"
              layout="fill"
              className="object-fill"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
