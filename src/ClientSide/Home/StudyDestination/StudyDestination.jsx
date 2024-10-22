import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const StudyDestination = () => {
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
      <div className="hidden md:block">
        <h1
          className=" studyDestinationHeading
         
          lg:pb-[20px] md:pb-[20px] xl:pb-[20px]  pb-[20px] xs:pb-[20px] text-[#1E1E1E]  "
        >
          <span className="text-[#F6941E] ">Study </span> Destination
        </h1>

        <p
          className=" text-[#1E1E1E]/[.8] xl:mr-[563px] lg:mr-[320px]
        md:mr-[120px] xl:pb-[50px]  pb-[50px] xs:pb-[50px] EveryPara"
        >
          Discover your ideal study destination with our expert guidance. We
          help you navigate the best global educational opportunities, tailored
          to your goals and ambitions. Start your journey towards academic
          success today!
        </p>

        <p
          className="md:hidden block text-[#1E1E1E]/[.8] xl:mr-[563px] 2xl:mr-[563px] lg:mr-[320px]
        md:mr-[120px] xl:pb-[50px] 2xl:pb-[50px] pb-[50px] xs:pb-[50px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      {/* large */}
      <div className="hidden md:block">
        <div
          className="grid   
      md:grid-cols-3   grid-cols-1   md:gap-[23px]   "
        >
          {/* div1 */}

          <div className="relative group w-full h-[267px] ">
            <img
              src="https://i.ibb.co.com/mBSbXYK/pexels-zetong-li-880728-16757986-6717404fa6849.webp"
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
          <div className="relative group w-full h-[267px] ">
            <img
              src="https://i.ibb.co.com/PTWHMFd/uae-671739e2be709.webp"
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

          <div className="relative group w-full h-[267px] ">
            <img
              src="https://i.ibb.co.com/YDHPK3d/australia-67173b515a485.webp"
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

          <div className="relative group w-full h-[267px] ">
            <img
              src="https://i.ibb.co.com/Q7wVrTZ/canada-67173c601e575.webp"
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

          <div className="relative group w-full h-[267px]">
            {/* Image */}
            <img
              src="https://i.ibb.co.com/ZT2QpYb/ireland-67173d317bc45.webp"
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

          <div className="relative group w-full h-[267px] ">
            <img
              src="https://i.ibb.co.com/NptPSj9/pexels-jegor-nagel-113940522-14385598-67173f8f58704.webp"
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
                src="https://i.ibb.co.com/fHKyFgN/pexels-migsg-2421025.webp"
                alt="United States"
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
                alt="United States"
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
            <div className="relative group w-full h-[267px] pb-[20px]">
              {/* Image */}
              <img
                src="https://i.ibb.co.com/C1KQqK6/pexels-vincent-albos-322257-1750754.webp"
                alt="United States"
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
          </div>

          <div>
            <div className="relative group w-full h-[267px] pb-[20px]">
              <img
                src="https://i.ibb.co.com/vXPcMB2/pexels-kelly-1179532-2382681-2.webp"
                alt="United States"
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
              <img
                src="https://i.ibb.co.com/1KHNkQ1/image-11-66e0a757ad7d1.webp"
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
