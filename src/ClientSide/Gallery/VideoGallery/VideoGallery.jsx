import { MdArrowRightAlt } from "react-icons/md";
import Navbar from "../../Shared/Navbar/Navbar";
import { useState } from "react";
import Footer from "../../Shared/Footer/Footer";

const VideoGallery = () => {
  const [showAll, setShowAll] = useState(false); // Step 1: state to toggle showing all images

  const images = [
    "https://www.youtube.com/embed/nYVLmQ0rTtY?si=AZtf4tP-C38tBGF5&rel=0",
    "https://www.youtube.com/embed/nYVLmQ0rTtY?si=AZtf4tP-C38tBGF5&rel=0",
    "https://www.youtube.com/embed/nYVLmQ0rTtY?si=AZtf4tP-C38tBGF5&rel=0",
    "https://www.youtube.com/embed/nYVLmQ0rTtY?si=AZtf4tP-C38tBGF5&rel=0",
    "https://www.youtube.com/embed/nYVLmQ0rTtY?si=AZtf4tP-C38tBGF5&rel=0",
    "https://www.youtube.com/embed/nYVLmQ0rTtY?si=AZtf4tP-C38tBGF5&rel=0",
    "https://www.youtube.com/embed/nYVLmQ0rTtY?si=AZtf4tP-C38tBGF5&rel=0",
    "https://www.youtube.com/embed/nYVLmQ0rTtY?si=AZtf4tP-C38tBGF5&rel=0",
    "https://www.youtube.com/embed/nYVLmQ0rTtY?si=AZtf4tP-C38tBGF5&rel=0",
    "https://www.youtube.com/embed/nYVLmQ0rTtY?si=AZtf4tP-C38tBGF5&rel=0",
    "https://www.youtube.com/embed/nYVLmQ0rTtY?si=AZtf4tP-C38tBGF5&rel=0",

    // Add more image URLs here
  ];

  const visibleImages = showAll ? images : images.slice(0, 6); // Step 2: Show only 6 images initially

  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-[30px]  relative">
        {/* Background image section */}
        <div
          style={{
            backgroundImage: `url(${"https://i.ibb.co.com/yQVwchJ/banner-8-66dc8b53510e5.webp"})`,
          }}
          className="bg-no-repeat bg-center bg-cover w-[100%] h-[250px] flex justify-center items-center"
        ></div>

        {/* Text Section */}
        <div className="absolute inset-0 flex flex-col items-center justify-center lg:flex-row lg:justify-between px-0 lg:px-[150px]  text-center lg:text-left">
          <h1 className="text-2xl lg:text-4xl text-white font-bold">
            Video Gallery
          </h1>
          <p className="text-sm lg:text-base text-white mt-2 lg:mt-0">
            Home / Gallery / Video gallery
          </p>
        </div>
      </div>

      <div className="sectionGap mt-10">
        <div className="">
          <div
            className="grid grid-cols-1 md:grid-cols-3 justify-center items-center
              lg:gap-[24px]  md:gap-[24px] gap-x-0 gap-y-[24px]"
          >
            {visibleImages.map((image, index) => (
              <div
                key={index}
                className="relative w-full h-[221px] overflow-hidden chooseUsImgParent"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/nYVLmQ0rTtY?si=AZtf4tP-C38tBGF5&rel=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>

          <button
            className="flex justify-center items-center mx-auto mt-4 
            border border-[#F6941E] text-[#F6941E] font-helvetica
             font-bold text-[18px] leading-[23px] py-[13px] px-[20px]"
            onClick={() => setShowAll(!showAll)} // Step 3: Toggle between showing all and limited images
          >
            {showAll ? "Show Less" : "See All"}{" "}
            <MdArrowRightAlt className="ml-2" />
          </button>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default VideoGallery;