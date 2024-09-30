function BackroundPhoto() {
  return (
    <>
      <div
        className="relative bg-cover bg-center bg-fixed h-screen flex items-center justify-center mt-20"
        style={{ backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/6028102d487274457fe447f3/bde1297b-5e53-4faa-851d-40cbc6eafce6/Best+Hiking+Watches+of+2024+-+Garmin+Enduro+2+Outdoor+Watch+-+Best+Outdoor+Watches+to+Buy+in+2024+-+The+Wildest+Road+Blog.jpeg')" }}>
        <div className="absolute inset-0 bg-slate-800 opacity-30"></div> 
        <div className="relative z-10">
          <div className="alert flex items-center justify-center text-white">
            <img
              src="https://static.wixstatic.com/media/c837a6_7b579a63efae49d4aa78878b8009b60c~mv2.png/v1/fill/w_70,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/notifications.png"
              alt=""
            />
            <p className="text-2xl">ALERT SYSTEM</p>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-white text-center">
              <h1 className="font-bold text-6xl text-white mb-5">
                Let Your Body Be Your Guide
              </h1>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default BackroundPhoto;

