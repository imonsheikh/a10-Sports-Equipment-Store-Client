import React, { useState } from "react";

const AddEquipment = () => {
  const [formData, setFormData] = useState();

  const handleAddEquipment = (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.image.value;
    const itemName = form.itemName.value;
    const categoryName = form.categoryName.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;

    console.log(
      image,
      itemName,
      categoryName,
      price,
      description,
      rating,
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
      processingTime,
      stockStatus,
    };

    fetch('http://localhost:5050/allEquipments',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(equipInfo)
    })
    .then(res => res.json())
    .then(data => {
        console.log('equimment data paisi', data);
        
    })



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
                //   value={formData.image}
                //   onChange={handleChange}
                placeholder="Enter image URL"
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Item Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Item Name
              </label>
              <input
                type="text"
                name="itemName"
                //   value={formData.itemName}
                //   onChange={handleChange}
                placeholder="Enter item name"
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Category Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Category Name
              </label>
              <input
                type="text"
                name="categoryName"
                //   value={formData.categoryName}
                //   onChange={handleChange}
                placeholder="Enter category name"
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Price
              </label>
              <input
                type="number"
                name="price"
                //   value={formData.price}
                //   onChange={handleChange}
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
                //   value={formData.description}
                //   onChange={handleChange}
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
                //   value={formData.rating}
                //   onChange={handleChange}
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
                    type="checkbox"
                    name="extraGrip"
                    //   checked={formData.customization.extraGrip}
                    //   onChange={handleChange}
                  />
                  <span>Extra Grip</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="hitPaper"
                    //   checked={formData.customization.hitPaper}
                    //   onChange={handleChange}
                  />
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
                //   value={formData.stockStatus}
                //   onChange={handleChange}
                placeholder="Enter available quantity"
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
                  // value={userEmail}
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
                  // value={userName}
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
