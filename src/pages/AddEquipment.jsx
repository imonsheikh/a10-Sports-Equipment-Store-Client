import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [availableQuantity,setAvailableQuantity] = useState(1000)
  const [gripIsChecked, setGripIsChecked] = useState(false)
  const [hitPaperIsChecked, setHitPaperIsChecked] = useState(false)
  console.log(gripIsChecked, hitPaperIsChecked);
  

  const categoryItems = {
    Cricket: ["Cricket Bat", "Cricket Ball", "Leg Pads", "Batting Helmet"],
    Football: [
      "Football",
      "Goalkeeper Gloves",
      "Football Cleats",
      "Shin Guards",
    ],
    Basketball: ["Basketball", "Basketball Hoop", "Basketball Shoes"],
    Tennis: ["Tennis Racket", "Tennis Ball", "Tennis Shoes"],
    Badminton: ["Badminton Racket", "Shuttlecock", "Badminton Net"],
  };

  //category handler
  const handleCategory = (e) => {
    setSelectedCategory(e.target.value);
    // setSelectedCategory('')
  };
  //item handler
  const handleItem = (e) => {
    setSelectedItem(e.target.value);
  };

  const handleAddEquipment = (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.image.value;
    const itemName = form.itemName.value;
    const categoryName = form.categoryName.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const extraGrip = form.extraGrip.value 
    const hitPaper = form.hitPaper.value
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;

    console.log(
      image,
      itemName,
      categoryName,
      price,
      description,
      rating,
      extraGrip,
      hitPaper,
      processingTime,
      stockStatus
    );

    const equipInfo = {
      image,
      itemName,
      categoryName,
      price,
      description,
      rating,
      extraGrip,
      hitPaper,
      processingTime,
      stockStatus,
    };

    fetch("http://localhost:5050/allEquipments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(equipInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("equimment data paisi", data);
        setAvailableQuantity(availableQuantity - 1)
        //Sweet alert 
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Add it!"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Success!",
              text: "Product added to database.",
              icon: "success"
            });
          }
        });
      });
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Add New Product
        </h2>

        <form
          onSubmit={handleAddEquipment}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Left Column */}
          <div className="space-y-6">
            {/* Product Image */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Product Image URL
              </label>
              <input
                type="url"
                name="image"
                placeholder="Enter image URL"
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Category Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Category Name
              </label>
              <select
                value={selectedCategory}
                onChange={handleCategory}
                name="categoryName"
                className="border p-2 w-full"
              >
                <option value="" disabled>
                  Select Category
                </option>
                {Object.keys(categoryItems).map((category) => (
                  <option 
                  // key={category} 
                  // value={category}
                  >
                    {category}
                  </option>
                ))}
              </select>
            </div>
               
                         {/* Item Name */}
                        <div>
              <label className="block text-gray-700 font-medium mb-2">
                Item Name
              </label>
             <select 
             value={selectedItem}
             onChange={handleItem}
             className="border p-2 w-full"
             name="itemName" 
             id="">
              <option value='' disabled>
                select Item
              </option>
              {selectedCategory && 
               categoryItems[selectedCategory].map(item => (
                 <option
                 key={item}
                 value={item}
                 >{item}</option>
               ))}
             </select>
            </div>

            {/* Price */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Price
              </label>
              <input
                type="number"
                name="price"
                placeholder="Enter price"
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Description */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Enter product description"
                rows="3"
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Rating
              </label>
              <input
                type="number"
                name="rating"
                placeholder="Enter rating (0-5)"
                step="0.1"
                min="0"
                max="5"
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Customization */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Customization Options
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input 
                  value={gripIsChecked}
                  onChange={(e) => setGripIsChecked(e.target.checked)}
                  type="checkbox" name="extraGrip" />
                  <span>Extra Grip</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input 
                  value={hitPaperIsChecked}
                  onChange={(e) => setHitPaperIsChecked(e.target.checked)}
                  type="checkbox" name="hitPaper" />
                  <span>Hit Paper</span>
                </label>
              </div>
            </div>

            {/* Stock Status */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Available Quantity
              </label>
              <input
                type="number"
                name="stockStatus"
                value={availableQuantity}
                placeholder="Enter available quantity"
                readOnly
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Full Width Inputs */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            {/* Processing Time */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Processing Time (in days)
              </label>
              <input
                type="number"
                name="processingTime"
                //   value={formData.processingTime}
                //   onChange={handleChange}
                placeholder="e.g., 3-5 days"
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* User Information */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  User Email
                </label>
                <input
                  type="email"
                  value={user?.email}
                  readOnly
                  className="w-full px-4 py-2 border rounded-md bg-gray-100 cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  User Name
                </label>
                <input
                  type="text"
                  value={user?.displayName}
                  readOnly
                  className="w-full px-4 py-2 border rounded-md bg-gray-100 cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Submit Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEquipment;
