function Container7() {
  return (
    <>
      <div className="mt-32 flex space-x-12 justify-center">
        <div
          className="relative h-[800px] w-[600px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://static.wixstatic.com/media/77aaa4_19cc747490f248b58a38c55ff6392ce7~mv2.jpg/v1/fill/w_740,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/77aaa4_19cc747490f248b58a38c55ff6392ce7~mv2.jpg')",
          }}
        >
          <div className="absolute  inset-0 bg-black opacity-30"></div>
          <div className="relative ml-32  z-10 p-4 text-white">
            <img
              className="ml-28 mt-9"
              src="https://static.wixstatic.com/media/c837a6_a456684c1dab43f292af8dd3c2ad05b2~mv2.png/v1/fill/w_80,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/icon%205.png"
              alt=""
            />
            <h1 className="text-xl font-bold mt-5 m-2 ">
              LEARN MORE ABOUT YOURSELF
            </h1>
            <h1 className="text-5xl font-bold mt-3">
              <span className="ml-11">Track Your </span>
              <br />
              Sleeping Habits
            </h1>
          </div>
        </div>

        <div
          className="relative h-[800px] w-[600px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://static.wixstatic.com/media/11062b_bb84df452cad42d288b7553b8c72411f~mv2.jpg/v1/fill/w_530,h_484,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_bb84df452cad42d288b7553b8c72411f~mv2.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative ml-24  z-10 p-4 text-white">
            <img
              className="ml-36 mt-9"
              src="https://static.wixstatic.com/media/c837a6_15f5a06def3641e1bbf493281a2e37df~mv2.png/v1/fill/w_80,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/icon%206.png"
              alt=""
            />
            <h1 className="text-xl font-bold mt-5 m-2 ml-24">
              TAKE A DEEP BREATH
            </h1>
            <p className="text-5xl font-bold mt-3">
              <span className="ml-12">Get a Guided </span> Mindfulness Break
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Container7;
