// PersonalInfoPart.js
import React from "react";

const PersonalInfoPart = ({ data, setData }) => {
  const renderSubjectOptions = () => {
    if (data.stream === "science") {
      return (
        <>
          <option value="math">Math</option>
          <option value="biology">Biology</option>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Current Qualification
        </label>
        <select
          onChange={(e) => setData({ ...data, qualification: e.target.value })}
          value={data.qualification}
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select</option>
          <option value="12th">12th</option>
          <option value="graduate">Graduate</option>
        </select>
      </div>

      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Stream
        </label>
        <select
          onChange={(e) => setData({ ...data, stream: e.target.value })}
          value={data.stream}
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select</option>
          <option value="science">Science</option>
          <option value="arts">Arts</option>
          <option value="commerce">Commerce</option>
        </select>
      </div>

      {data.stream === "science" && (
        <div className="mt-1">
          <label className="block text-sm font-medium text-gray-700 pb-2">
            Subject
          </label>
          <select
            onChange={(e) => setData({ ...data, subject: e.target.value })}
            value={data.subject}
            className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            <option value="">Select</option>
            {renderSubjectOptions()}
          </select>
        </div>
      )}
    </div>
  );
};

export default PersonalInfoPart;
