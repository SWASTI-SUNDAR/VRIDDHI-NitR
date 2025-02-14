import React from "react";
import Image from "next/image";


const page = () => {
  return (
    <section className="min-h-screen bg-[#111A21]  flex flex-col text-white justify-center items-center overflow-hidden ">
      <h1 className="text-5xl uppercase mb-20 ">Conact US</h1>
      <div
        className="flex flex-col md:flex-row justify-center  items-center gap-11
    md:gap-32
    "
      >
        <div className="   ">
          <Image
            src={"/map.jpg"}
            alt="Picture of the author"
            width={500}
            height={100}
            className="rounded-xl md:h-[20rem] h-auto w-[15rem] md:w-auto  "
          />
        </div>
        <div className="flex flex-col gap-9 md:w-1/4 w-[15rem] ">
          {CotactData.map((item) => {
            return (
              <div key={item.id} className="flex md:justify-start flex-col md:flex-row md:text-start justify-center text-center items-center gap-6 md:items-center">
                <Image
                  src={item.logo}
                  alt="logo"
                  width={1}
                  height={1}
                  className="w-[39px] h-[29px] "
                />
              
                <span className="text-white w-56 md:w-auto">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-10">

      </div>
    </section>
  );
};

export default page;
const CotactData = [
  {
    id: 1,
    name: "National Insitute of Technology Rourkela, Jindal Colony, Udit Nagar, Rourkela, Odisha 769001",
    logo: "/location.svg",
  },
  {
    id: 2,
    name: 'nitr.vriddhi@gmail.com',
    logo: "/email.svg",
  },
  {
    id: 2,
    name: "John Doe: 9000000000",
    logo: "/call.svg",
  },
];
