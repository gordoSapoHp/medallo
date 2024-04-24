import Img2 from "../assets/images/Carrousel-2.png";
import Img3 from "../assets/images/Carrousel-3.png";
import Img4 from "../assets/images/Carrousel-4.png";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../assets/css/Carrousel.css"

function Carrousel() {
  const layoutAlt = "Coreworld-medellin-";
  const images = [

    {
      original: Img2,
      thumbnail: `${layoutAlt}2`,
      originalAlt: `${layoutAlt}2`,
    },
    {
      original: Img3,
      thumbnail: `${layoutAlt}3`,
      originalAlt: `${layoutAlt}3`,
    },
    {
      original: Img4,
      thumbnail: `${layoutAlt}4`,
      originalAlt: `${layoutAlt}4`,
    },
  ];
  const slideDuration = 500;
  const slideInterval = 2000; 
  return (
    <section className="grid md:grid-cols-2 p-5 gap-8 md:p-0 sm:m-20 lg:m-30 xl:m-36 md:gap-8 lg:gap-16">
      <div className="flex flex-col justify-center md:items-start  gap-6 ">
        <h2 className="font-extrabold text-3xl">CORE MEDELLÍN</h2>
        <p className="text-[18px]">
          After a spectacular world premiere of the brand new CORE stage in
          Tulum’s jungle, Tomorrowland is bringing the mythical CORE stage to
          Colombia for a two-day festival on Saturday May 11 & Sunday May 12,
          2024.
        </p>
        <p className="text-[18px]">
          Dance to the finest sounds across 3 stages in Parque Norte, Medellín.
        </p>
      </div>
      <div className="flex justify-center items-center">
      <ImageGallery
        items={images}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        slideDuration={slideDuration}
        slideInterval={slideInterval}
        additionalClass="custom-gallery"
      />
      </div>
    </section>
  );
}

export default Carrousel;
