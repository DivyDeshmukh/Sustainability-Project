import React, { useState } from "react";

const TaskDialog = ({ task, onClose, onSave}) => {
    console.log(task)
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
  
    const handleDescriptionChange = (e) => {
      setDescription(e.target.value);
    };
  
    const handleImageChange = (e) => {
      setImage(e.target.files[0]);
    };
  
    const handleSave = () => {
      // Save task updates, then mark task as completed
      onSave();
    };
  
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-lg ">
        <h2 className="text-xl font-semibold mb-4">Complete Task: {task?.name}</h2>
        <label className="text-lg " htmlFor="steps">What steps you took and impact you made?</label>
        <textarea
          className="w-full p-2 mt-2 border rounded mb-4"
          placeholder="Describe the steps taken"
          value={description}
          onChange={handleDescriptionChange}
        />

      <div className="flex flex-col">
      <label  className="text-lg" htmlFor="image">Upload image</label>
        <input
          type="file"
          accept="image/*"
          className="mb-4 mt-2"
          onChange={handleImageChange}
        />
      </div>
        <div className="flex justify-end">
          <button className="bg-gray-500 text-white py-2 px-4 rounded mr-2" onClick={onClose}>
            Cancel
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDialog;
