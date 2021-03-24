export default function MainHero() {
  return (
    <div className="h-full">
      <div className="relative  w-screen">
        <div className="w-12 flex">
          <h1 className="image-text">Distinctive Drafting and Designs</h1>
        </div>
        <video autoPlay muted loop className="filter-image w-screen">
          <source src="home_video.mp4" className="object-fill" type="video/mp4" />
        </video>
      </div>
  </div>
  )
};