import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center border-b border-gray-600 pb-4">
          <div className="flex space-x-8">
          <a href="https://www.instagram.com">
          <FaInstagramSquare />
          </a>

          <a href="https://www.youtube.com">
          <IoLogoYoutube />
          </a>
          <a href="https://www.facebook.com">
          <FaFacebook />
          </a>
          <a href="https://www.tiktok.com">
          <FaTiktok />
          </a>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-gray-400">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-gray-400">
              Shipping & Returns
            </a>
            <a href="#" className="hover:text-gray-400">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm">© 2035 by TrackMate.</p>
          <div className="flex space-x-2">
            <img
              src="https://static.wixstatic.com/media/c837a6_0c038d1905244309869036f4b2a87fba~mv2.png/v1/fill/w_43,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Visa.png"
              alt="Visa"
              className="h-6"
            />
            <img
              src="https://static.wixstatic.com/media/c837a6_24b45424cb584c759d470b3ab5bd6ee8~mv2.png/v1/fill/w_43,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brand-mastercard_3x.png"
              alt="MasterCard"
              className="h-6"
            />
            <img
              src="https://static.wixstatic.com/media/c837a6_240e03fc0ff340c7b76226c536a43614~mv2.png/v1/fill/w_44,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brand-chinaunionpay_3x.png"
              alt="JCB"
              className="h-6"
            />
            <img
              src="https://static.wixstatic.com/media/c837a6_c2b8bb51f9ea4214a3dde0df612a7322~mv2.png/v1/fill/w_44,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brand-amex_3x.png"
              alt="American Express"
              className="h-6"
            />
            <img
              src="https://static.wixstatic.com/media/c837a6_3bd26f0fc46543128309cbbd71f8a5e3~mv2.png/v1/fill/w_44,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Discover.png"
              alt="Discover"
              className="h-6"
            />
            <img
              src="https://static.wixstatic.com/media/c837a6_c948fcfd7a7d4f8bb8b80c76565f9738~mv2.png/v1/fill/w_34,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Diners.png"
              alt="Diners Club"
              className="h-6"
            />
            <img
              src="https://static.wixstatic.com/media/c837a6_e124e91ed49541508b0a0b63f6490d1c~mv2.png/v1/fill/w_38,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PayPal.png"
              alt="PayPal"
              className="h-6"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
