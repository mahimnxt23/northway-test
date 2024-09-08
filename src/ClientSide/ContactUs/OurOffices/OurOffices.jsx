const OurOffices = () => {
  const officeData = [
    {
      flag: "https://i.ibb.co.com/yP4VKMT/image-14-3-66dd3b0f1691c.webp",
      name: "Bangladesh",
    },
    { flag: "https://i.ibb.co.com/bHc4vCc/image-14-5.png", name: "Ghana" },
    {
      flag: "https://i.ibb.co.com/SvjNNzW/image-14-66dd3a70578b1.webp",
      name: "India",
    },
    {
      flag: "https://i.ibb.co.com/2FmcyWz/image-14-8-66dd4ab221d98.webp",
      name: "Kenya",
    },
    {
      flag: "https://i.ibb.co.com/PwcnccN/image-14-1-66dd3aa63071a.webp",
      name: "Nepal",
    },
    {
      flag: "https://i.ibb.co.com/MGXrLbK/image-14-6-66dd4a3545443.webp",
      name: "Pakistan",
    },
    {
      flag: "https://i.ibb.co.com/YLrp8Zs/image-14-7-66dd4a760b58e.webp",
      name: "Philippines",
    },
    {
      flag: "https://i.ibb.co.com/JrX4XSz/image-14-2-66dd3adc09621.webp",
      name: "Sri Lanka",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="max-w-[1140px]">
          <h2 className="text-[48px] font-semibold leading-[120%] text-center">
            Our <span className="text-[#F6941E]">offices</span>
          </h2>
          <div className=" flex flex-wrap gap-[22px]  items-center justify-center mt-[50px]">
            {officeData.map((office) => (
              <div
                key={office.name}
                className="w-[268px] bg-white py-5 flex items-center
                                 justify-center border-custom border-[1px] shadow-officeShadow"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={office.flag}
                    alt="Country flag where office is situated"
                  />
                  <p>{office.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurOffices;