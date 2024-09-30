import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Container6() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <p className="text-6xl text-white font-bold mt-28 text-center">0.4 TrackMate XE Specifications</p>
      <div className="relative flex justify-center items-center mt-12">
        <img
          className="object-center mt-9 w-90 h-90"
          src="https://static.wixstatic.com/media/c837a6_e211e4cc12b84a2884128090c1c39a5a~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_e211e4cc12b84a2884128090c1c39a5a~mv2.png"
          alt="TrackMate XE"
        />
        <div
          className="absolute top-0 left-0 mt-24 ml-96 p-1.5 bg-gray-200 rounded-lg shadow-lg"
          data-aos="fade-up"
        >
          <div className="flex">
          <img src="https://static.wixstatic.com/media/c837a6_1c7d5966b2164415870ed58685249104~mv2.png/v1/fill/w_48,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/icon%206.png" alt="" />
          <h2 className="text-lg font-bold mt-1">20 Hour Battery Life</h2>
          </div>
        </div>
        <div
          className="absolute top-0 right-0 mt-24 mr-96 p-1.5 bg-gray-200 rounded-lg shadow-lg"
          data-aos="fade-up"
        >
          <div className="flex" >
            <img src="https://static.wixstatic.com/media/c837a6_556b3fd49f0f41cbb4ea96784d47d852~mv2.png/v1/fill/w_48,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/icon%208.png" alt="" />
          <h2 className="text-lg font-bold mt-1">Bluetooth Connectivity</h2>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 mb-24 ml-96 p-1.5 bg-gray-200 rounded-lg shadow-lg"
          data-aos="fade-up"
        >
          <div className="flex">
          <img  src="https://static.wixstatic.com/media/c837a6_0b463e8a45104c3dad0a65d3557178e1~mv2.png/v1/fill/w_48,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/icon%209.png" alt="" />
          <h2 className="text-lg font-bold mt-1.5 ml-2">Wireless Charging</h2>
          </div>
        </div>
        <div
          className="absolute bottom-0 right-0 mb-24 mr-96 p-1 bg-gray-200 rounded-lg shadow-lg"
          data-aos="fade-up"
        >
          <div className="flex">
          <img src="https://static.wixstatic.com/media/c837a6_c0de30873ab34dfc8db744311a1be27a~mv2.png/v1/fill/w_49,h_43,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/icon%207.png" alt="" />
          <h2 className="text-lg font-bold mt-1.5">Water Resistance</h2>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button className="mt-5 ml-5 shadow-lg shadow-violet-500/50 font-normal bg-violet-600 hover:bg-white text-white px-7 h-11 hover:text-black rounded-full">
          Buy Now
        </button>
      </div>
    </>
  );
}

export default Container6;



