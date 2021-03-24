import Image from 'next/image';
export default function PageHero({pageName, imageName, alt}) {
  return (
    <div className="relative">
      <div className="flex">
        <h1 className="image-text">{pageName}</h1>
      </div>
      <div className="h-80">
        <Image
          src={`/distinctive-design-images/${imageName}`}
          alt={alt}
          className="filter-image object-cover object-center"
          layout="fill"
        />
      </div>
  </div>
  )
}