import React from 'react'

const Singleproduct = () => {
  return (
        <div className="min-h-screen bg-[#F9F9FB] font-[Poppins] text-[#7E7E8F] p-8 flex-1">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-black mb-2">Product Details</h1>
      <p className="text-sm mb-6">Home / Product Details</p>

      {/* Main Form */}
      <div className="bg-white p-8 rounded-2xl shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className=" space-y-5">
          {/* Product Name */}
          <div>
            <label className="text-sm font-medium block mb-1">Product Name</label>
            <input
              type="text"
              placeholder="Type name here"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#7364DB] outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium block mb-1">Description</label>
            <textarea
              placeholder="Type description here"
              className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:ring-2 focus:ring-[#7364DB] outline-none"
            ></textarea>
          </div>

          {/* Category & Brand */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium block mb-1">Category</label>
              <select className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#7364DB] outline-none">
                <option>Type Category here</option>
                <option>Watch</option>
                <option>Phone</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Brand</label>
              <select className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#7364DB] outline-none">
                <option>Type Brand name here</option>
                <option>Apple</option>
                <option>Samsung</option>
              </select>
            </div>
          </div>

          {/* SKU & Stock */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="SKU"
              defaultValue="FOX-2983"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#7364DB] outline-none"
            />
            <input
              type="number"
              placeholder="Stock quantity"
              defaultValue="1258"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#7364DB] outline-none"
            />
          </div>

          {/* Prices */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Regular Price"
              defaultValue="$500"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#7364DB] outline-none"
            />
            <input
              type="text"
              placeholder="Sale Price"
              defaultValue="$450"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#7364DB] outline-none"
            />
          </div>

          {/* Tax */}
          <div className="grid grid-cols-2 gap-4">
            <select className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#7364DB] outline-none">
              <option>Taxable</option>
              <option>None</option>
            </select>
            <select className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#7364DB] outline-none">
              <option>Standard</option>
              <option>Reduced</option>
            </select>
          </div>

          {/* Tag */}
          <div>
            <label className="text-sm font-medium block mb-1">Tag</label>
            <input
              type="text"
              placeholder="smartwatch, Apple, Watch, smartphone"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#7364DB] outline-none"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          {/* Main Image */}
          <div className="border rounded-2xl p-6 flex justify-center bg-[#F6F6FB]">
            <img
              src="https://res.cloudinary.com/demo/image/upload/w_200/sample.jpg"
              alt="Product"
              className="rounded-xl w-48"
            />
          </div>

          {/* Gallery */}
          <div>
            <h2 className="font-medium mb-2 text-black">Product Gallery</h2>

            <div className="border-2 border-dashed border-[#D9D9E3] rounded-2xl p-6 flex flex-col items-center justify-center bg-[#F9F9FB]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#7364DB]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-6-4v6m0-6l-3 3m3-3l3 3M12 4v6"
                />
              </svg>
              <p className="mt-2 text-sm">
                Drop your image here, or{" "}
                <span className="text-[#7364DB] cursor-pointer">browse</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">JPG, PNG, and GIF files are allowed</p>
            </div>

            {/* Uploaded Files */}
            <div className="mt-4 space-y-2">
              {[
                "Product_thumbnail_1.png",
                "Product_thumbnail_2.png",
                "Product_thumbnail_3.png",
                "Product_thumbnail_4.png",
                "Product_thumbnail_5.png",
              ].map((file, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-[#F6F6FB] px-4 py-2 rounded-xl"
                >
                  <span className="text-sm">{file}</span>
                  <button className="text-red-500 font-bold hover:text-red-600">X</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end mt-8 gap-3">
        <button className="bg-[#7364DB] text-white px-6 py-2 rounded-lg hover:bg-[#5d50c4]">
          Update
        </button>
        <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
          Delete
        </button>
        <button className="border border-gray-300 text-[#7E7E8F] px-6 py-2 rounded-lg hover:bg-gray-100">
          Cancel
        </button>
      </div>
    </div>
  )
}

export default Singleproduct
