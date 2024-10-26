import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

const StudyDestination = () => {
  const boxRef = useRef();
  const boxRef2 = useRef();
  const boxRef3 = useRef();
  const boxRef4 = useRef();
  const boxRef5 = useRef();
  const boxRef6 = useRef();

  useGSAP(() => {
    gsap.from(boxRef.current, {
      x: -200, // Start from the right
      opacity: 1, // Start with opacity 0 for a fade-in effect
      duration: 3,
      delay: 0.5,
      ease: "power2.out",
    });
    gsap.from(boxRef2.current, {
      x: -200, // Start from the right
      opacity: 1, // Start with opacity 0 for a fade-in effect
      duration: 3,
      delay: 0.5,
      ease: "power2.out",
    });
    gsap.from(boxRef3.current, {
      x: 200, // Start from the right
      opacity: 1, // Start with opacity 0 for a fade-in effect
      duration: 3,
      delay: 0.5,
      ease: "power2.out",
    });
    gsap.from(boxRef4.current, {
      x: 200, // Start from the right
      opacity: 1, // Start with opacity 0 for a fade-in effect
      duration: 3,
      delay: 0.5,
      ease: "power2.out",
    });
    gsap.from(boxRef5.current, {
      y: 200, // Start from the right
      opacity: 1, // Start with opacity 0 for a fade-in effect
      duration: 3,
      delay: 0.3,
      ease: "power2.out",
    });
    gsap.from(boxRef6.current, {
      y: -200, // Start from the right
      opacity: 1, // Start with opacity 0 for a fade-in effect
      duration: 5,
      delay: 0.3,
      ease: "power2.out",
    });
  });
  return (
    <div className="sectionGap">
      {/* mobile */}
      <div className="md:hidden block ">
        <h1
          className=" text-[#1E1E1E]
           xs:text-[30px] xs:leading-[36px]
         xs:pb-[20px] font-helvetica font-bold text-center"
        >
          <span className="text-[#F6941E] ">Study </span> Destination
        </h1>
        <p
          className=" text-[#1E1E1E]/[.8]   xs:pb-[30px]
          text-center font-normal font-helvetica 
          xs:text-[14px] xs:leading-[21px] "
        >
          Discover your ideal study destination with our expert guidance. We
          help you navigate the best global educational opportunities, tailored
          to your goals and ambitions. Start your journey towards academic
          success today!
        </p>
      </div>

      {/* large */}
      <div className="hidden md:block text-center">
        <h1
          className=" studyDestinationHeading
         
          lg:pb-[20px] md:pb-[20px] xl:pb-[20px]  pb-[20px] xs:pb-[20px] text-[#1E1E1E]  "
        >
          <span className="text-[#F6941E] ">Study </span> Destination
        </h1>

        <p className=" text-[#1E1E1E]/[.8] max-w-[750px] mx-auto xl:pb-[30px]  pb-[30px] xs:pb-[30px] EveryPara">
          Discover your ideal study destination with our expert guidance. We
          help you navigate the best global educational opportunities, tailored
          to your goals and ambitions. Start your journey towards academic
          success today!
        </p>

        <p
          className="md:hidden block text-[#1E1E1E]/[.8] xl:mr-[563px] 2xl:mr-[563px] lg:mr-[320px]
        md:mr-[120px] xl:pb-[30px] 2xl:pb-[30px] pb-[30px] xs:pb-[30px]"
        >
          Discover your ideal study destination with our expert guidance. We
          help you navigate the best global educational opportunities, tailored
          to your goals and ambitions. Start your journey towards academic
          success today!
        </p>
      </div>
      {/* large */}
      <div className="hidden md:block">
        <div
          className="grid   
      md:grid-cols-3   grid-cols-1   md:gap-[23px]   "
        >
          {/* div1 */}

          <div ref={boxRef} className="relative group w-full h-[267px] ">
            <img
              src="https://i.ibb.co.com/JkjRg9s/frame-18-2-66e0a3febd983.webp"
              alt="United States"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h1 className="united">United States</h1>
              <Link to="/studyDistention">
                <button className="flex items-center justify-center readMore ">
                  Read more <MdArrowRightAlt className="ml-2" />
                </button>
              </Link>
            </div>
          </div>
          <div ref={boxRef5} className=" relative group w-full h-[267px] ">
            <img
              src="https://i.ibb.co.com/VV6xZHC/Facts-1280x720.webp"
              alt="United States"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h1 className="united">UAE</h1>
              <Link to="/studyDistention">
                <button className="flex items-center justify-center readMore ">
                  Read more <MdArrowRightAlt className="ml-2" />
                </button>
              </Link>
            </div>
          </div>

          <div ref={boxRef3} className="relative group w-full h-[267px] ">
            <img
              src="https://i.ibb.co.com/6sLjbDZ/image-8-2-66e0a5ce77b18.webp"
              alt="United States"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h1 className="united">Australia</h1>
              <Link to="/studyDistention">
                <button className="flex items-center justify-center readMore ">
                  Read more <MdArrowRightAlt className="ml-2" />
                </button>
              </Link>
            </div>
          </div>

          <div ref={boxRef2} className="relative group w-full h-[267px] ">
            <img
              src="https://i.ibb.co.com/C1KQqK6/pexels-vincent-albos-322257-1750754.webp"
              alt="United States"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h1 className="united">Canada</h1>
              <Link to="/studyDistention">
                <button className="flex items-center justify-center readMore ">
                  Read more <MdArrowRightAlt className="ml-2" />
                </button>
              </Link>
            </div>
          </div>

          <div ref={boxRef6} className="relative group w-full h-[267px]">
            {/* Image */}
            <img
              src="https://i.ibb.co.com/GPmQbs2/ireland-6717714b87c95.webp"
              alt="United States"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h1 className="united">Ireland</h1>
              <Link to="/studyDistention">
                <button className="flex items-center justify-center readMore ">
                  Read more <MdArrowRightAlt className="ml-2" />
                </button>
              </Link>
            </div>
          </div>

          <div ref={boxRef4} className="relative group w-full h-[267px] ">
            <img
              src="https://i.ibb.co.com/DzDqDPW/europ-671771c9cc68d.webp"
              alt="United States"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h1 className="united">Europe</h1>
              <Link to="/studyDistention">
                <button className="flex items-center justify-center readMore ">
                  Read more <MdArrowRightAlt className="ml-2" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="md:hidden block">
        <div
          className="grid   
        grid-cols-1   xs:grid-cols-1   "
        >
          {/* div1 */}
          <div>
            <div className="relative group w-full h-[267px] pb-[20px]">
              <img
                src="https://i.ibb.co.com/JkjRg9s/frame-18-2-66e0a3febd983.webp"
                alt="United States"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="united">United States</h1>
                <Link to="/studyDistention">
                  <button className="flex items-center justify-center readMore gap-x-[10px]">
                    Read more <MdArrowRightAlt />
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative group w-full h-[267px] pb-[20px]">
              <img
                src="https://i.ibb.co.com/VV6xZHC/Facts-1280x720.webp"
                alt="UAE"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="united">UAE</h1>
                <Link to="/studyDistention">
                  <button className="flex items-center justify-center readMore gap-x-[10px]">
                    Read more <MdArrowRightAlt />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="relative group w-full h-[267px] pb-[20px]">
              <img
                src="https://i.ibb.co.com/6sLjbDZ/image-8-2-66e0a5ce77b18.webp"
                alt="Australia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="united">Australia</h1>
                <Link to="/studyDistention">
                  <button className="flex items-center justify-center readMore gap-x-[10px]">
                    Read more <MdArrowRightAlt />
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative group w-full h-[267px] pb-[20px]">
              {/* Image */}
              <img
                src="https://i.ibb.co.com/C1KQqK6/pexels-vincent-albos-322257-1750754.webp"
                alt="Canada"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="united">Canada</h1>
                <Link to="/studyDistention">
                  <button className="flex items-center justify-center readMore gap-x-[10px]">
                    Read more <MdArrowRightAlt />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="relative group w-full h-[267px] pb-[20px]">
              <img
                src="https://i.ibb.co.com/GPmQbs2/ireland-6717714b87c95.webp"
                alt="Ireland"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="united">Ireland</h1>
                <Link to="/studyDistention">
                  <button className="flex items-center justify-center readMore gap-x-[10px]">
                    Read more <MdArrowRightAlt />
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative group w-full h-[267px] pb-[20px]">
              <img
                src="https://i.ibb.co.com/DzDqDPW/europ-671771c9cc68d.webp"
                alt="United States"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="united">Europe</h1>
                <Link to="/studyDistention">
                  <button className="flex items-center justify-center readMore gap-x-[10px]">
                    Read more <MdArrowRightAlt />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyDestination;
