// components/BuyProduct.jsx
import React, { useState, useContext } from "react";
import { CartContext } from "./CartContext";

const BuyProduct = () => {
  const { addToCart } = useContext(CartContext);

  const [hoveredColor, setHoveredColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(
    "https://static.wixstatic.com/media/c837a6_e211e4cc12b84a2884128090c1c39a5a~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_e211e4cc12b84a2884128090c1c39a5a~mv2.png"
  );

  const [selectedColor, setSelectedColor] = useState(null);

  const handleAddToCart = () => {
    if (!selectedColor) {
      alert("Please select a color before adding to cart.");
      return;
    }

    const product = {
      id: 1, 
      name: "0.4 TrackMate XE",
      color: selectedColor,
      quantity,
    };

    addToCart(product);
  };

  const colors = [
    {
      id: 1,
      price: 85,
      name: "White",
      value: "bg-white",
      image:
        "https://static.wixstatic.com/media/c837a6_e211e4cc12b84a2884128090c1c39a5a~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_e211e4cc12b84a2884128090c1c39a5a~mv2.png",
    },
    {
      id: 2,
      price: 85,
      name: "Black",
      value: "bg-black",
      image:
        "https://static.wixstatic.com/media/c837a6_b03daf4fd619491fa5e07adc1c7399d4~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_b03daf4fd619491fa5e07adc1c7399d4~mv2.png",
    },
    {
      id: 3,
      price: 85,
      name: "Blue",
      value: "bg-blue-700",
      image:
        "https://static.wixstatic.com/media/c837a6_b362ea86a18844d495739928ad088b9d~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_b362ea86a18844d495739928ad088b9d~mv2.png",
    },
    {
      id: 4,
      price: 85,
      name: "Purple",
      value: "bg-purple-700",
      image:
        "https://static.wixstatic.com/media/c837a6_6a524e8e414b469a9900ec65d016e834~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_6a524e8e414b469a9900ec65d016e834~mv2.png",
    },
  ];

  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    if (value >= 1) {
      setQuantity(value);
    }
  };

  return (
    <div className="flex items-center ml-96">
      {/* Main Product Image */}
      <div className="flex flex-col items-center">
        <img
          src={mainImage}
          alt="Product"
          className="w-96 h-96 transform transition-transform duration-100 hover:scale-125"
        />

        {/* Smaller Images */}
        <div className="flex space-x-4 mt-4">
          {colors.map((color) => (
            <img
              key={color.id}
              src={color.image}
              alt={color.name}
              className={`w-16 h-16 object-cover border-2 ${
                hoveredColor === color.name ? "border-blue-500" : "border-white"
              } cursor-pointer`}
              onMouseEnter={() => setHoveredColor(color.name)}
              onClick={() => {
                setMainImage(color.image);
                setSelectedColor(color); // Set the selected color
              }}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 ml-8">
        <p className="text-white text-3xl">0.4 TrackMate XE</p>
        <p className="text-white text-xl mt-10">$85.00</p>
        <p className="text-white text-xl mt-9">Color</p>

        <div className="flex items-center space-x-4 mt-3">
          {colors.map((color) => (
            <div key={color.id} className="flex flex-col items-center">
              {hoveredColor === color.name && (
                <span className="text-white">{hoveredColor}</span>
              )}
              <div
                className={`w-8 h-8 rounded-full border-2 border-white ${color.value} cursor-pointer`}
                onMouseEnter={() => setHoveredColor(color.name)}
                onClick={() => {
                  setMainImage(color.image);
                  setSelectedColor(color); // Set the selected color
                }}
              ></div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <label className="text-white text-xl" htmlFor="quantity">
            Quantity:
          </label>
          <input
            id="quantity"
            type="number"
            min="1"
            value={quantity}
            onChange={handleChange}
            className="ml-4 w-16 text-center rounded border-2 border-white bg-gray-800 text-white"
          />
        </div>

        <button
          onClick={handleAddToCart}
          className="shadow-lg shadow-violet-500/50 font-normal bg-violet-600 hover:bg-white text-white px-5 h-11 hover:text-black rounded-full mt-9"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BuyProduct;
  