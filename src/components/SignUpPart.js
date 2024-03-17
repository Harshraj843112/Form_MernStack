import React from "react";

const SignUpPart = ({ data, setData }) => {
  return (
    <div className="space-y-7 ">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="w-full md:w-1/2">
          <label className="block text-sm font-medium text-gray-700 pb-2">
            Username
          </label>
          <input
            onChange={(e) => setData({ ...data, username: e.target.value })}
            value={data.username}
            type="text"
            id="name"
            className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="w-full md:w-1/2">
          <label className="block text-sm font-medium text-gray-700 pb-2">
            Email
          </label>
          <input
            onChange={(e) => setData({ ...data, email: e.target.value })}
            value={data.email}
            type="email"
            id="email"
            className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="w-full md:w-1/2">
          <label className="block text-sm font-medium text-gray-700 pb-2">
            Gender
          </label>
          <select
            onChange={(e) => setData({ ...data, gender: e.target.value })}
            value={data.gender}
            className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="w-full md:w-1/2">
          <label className="block text-sm font-medium text-gray-700 pb-2">
            Date of Birth
          </label>
          <input
            onChange={(e) => setData({ ...data, dob: e.target.value })}
            value={data.dob}
            type="date"
            id="dob"
            className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Phone Number
        </label>
        <input
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          value={data.phone}
          type="text"
          id="phone"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Address
        </label>
        <textarea
          onChange={(e) => setData({ ...data, address: e.target.value })}
          value={data.address}
          id="address"
          rows="4"
          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        ></textarea>
      </div>
    </div>
  );
};

export default SignUpPart;
