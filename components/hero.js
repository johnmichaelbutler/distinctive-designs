export default function Hero() {
  return (
    <div>
    <div className="relative h-full w-screen">
      <div className="w-12 flex">
        <h1 className="absolute font-thin z-10 text-4xl text-center center-abolute transition-opacity">Distinctive Drafting and Designs</h1>
      </div>
      <video autoPlay muted loop className="filter-image">
        <source src="home_video.mp4" type="video/mp4" />
      </video>
      {/* <img className="z-0 filter-image" src="https://images.squarespace-cdn.com/content/58527565cd0f68eedd3e7ff4/1582739189142-B33T9ANONBWJ7RVPC9RA/Website+Render.jpg?format=2500w&content-type=image%2Fjpeg" alt="Background"/> */}
    </div>
  </div>
  )
};