import { Link } from "react-router-dom"



function Container2() {
 
  return (
    <>
    <div className="photo1">
      <div>
    <p className="text-3xl text-white font-medium mt-16">Own your daily routine</p>
    <p className="text-6xl text-white font-bold">0.4 TrackMate XE</p>
    <p className="text-xl text-white font-medium mt-1">A health tracker that motivates you in every step of the way</p>
    <Link to="/BuyProduct">
    <button className=" mt-5 ml-5 shadow-lg shadow-violet-500/50 font-normal bg-violet-600 hover:bg-white text-white px-7 h-11 hover:text-black rounded-full">
  Buy Now
</button>
</Link>
</div>

<img className="ml-80 zoom object-cover " src="https://static.wixstatic.com/media/c837a6_8abd90a25be34a758931e215516dbd7f~mv2.png/v1/crop/x_1756,y_452,w_3479,h_3461/fill/w_548,h_540,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/new%20first%20fold.png" alt="" /> 
</div>




    </>

   
  )
}

export default Container2