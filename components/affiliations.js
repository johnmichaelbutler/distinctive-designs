import Image from "next/image";

export default function Affiliations() {
  return (
    <div className="relative contain">
      <div className="h-70vh  text-white grid grid-cols-2 items-center justify-center content-center pt-20 lg:pt-0 mb-20">
        {/* If not doing multi-colored, change to h-full and remov h-screen, bg-gray-200 adn text-black */}
        <div className="col-span-2 lg:col-span-1 z-20  px-12 ">
          <p className="body-text">Affiliated with the Texas and American Institute of Building Design, you can be assured that you are working with experienced professionals that hold themselves and their work to the highest standards.</p>
        </div>
        <div className="col-span-2 lg:col-span-1 z-20">
          {/* <p className="body-text">Affiliations</p> */}
          <div className="row-span-1 flex justify-around my-10 ">
            {/* <img className="h-24" title="AIBD - American Institute of Building Design" src="https://st.hzcdn.com/fimgs/50f37a8f03ada6d9_5719-w52-h52-b0-p0--.jpg" /> */}
            <img className="h-24 w-24 md:h-36 md:w-36" title="AIBD - American Institute of Building Design" src="/distinctive-design-images/aibd.jpg" />
            <img className="h-24 w-24 md:h-36 md:w-36" title="Texas Institute of Building Design" src="/distinctive-design-images/TIBD.jpg" />
            {/* <img className="h-24" title="Texas Institute of Building Design" src="https://st.hzcdn.com/fimgs/185314830c49e71c_7164-w52-h52-b0-p0--.jpg" /> */}
          </div>
        </div>
      </div>
      <div className="h-full">
        <Image
          src="/distinctive-design-images/house_photos/modern_2.jpg"
          layout="fill"
          className="filter-image"
          objectFit="cover"
          quality={100}
        />
      </div>
    </div>
  )
}