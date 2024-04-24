import videoMP4 from "../assets/videoWEBM.webm";
import "../assets/css/LandingPage.css";
import LandingPicture from "../assets/images/L-CORE-MEDELLIN_LOGO_WHITE.png"
import Faq from "../components/Faq"
import Carrousel from "../components/Carrousel";
export default function LandingPage() {

  return (
    <>
      <div className="video-container">
        <video
          src={videoMP4}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover absolute inset-0"
        ></video>
      </div>
      <div className="absolute -z-50 inset-0 sm:pt-20 flex flex-col items-center justify-center gap-8 sm:gap-12 bg-black bg-opacity-50">
        <h1 className="text-2xl sm:font-semibold">TOMORROWLAND PRESENTS</h1>
        <img
          fetchpriority="high"
          decoding="async"
          className="h-[100px] W-[200px] sm:h-[200px] sm:w-[550px]"
          src={LandingPicture}
          alt="CORE MEDELLIN_LOGO"
          title="CORE MEDELLIN_LOGO"
        ></img>
        <h1 className="text-1xl sm:text-2xl sm:font-semibold">SATURDAY MAY 11 & SUNDAY MAY 12 2024</h1>
      </div>
      <Carrousel />
      <Faq />
    </>
  );
}
