/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import react, { useState, useRef } from "react";
import UserPost from "./UserPost";

function Community() {
  const [anchorEl, setAnchorEl] = react.useState(null);

  const fileInputRef = useRef(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      // Handle the file upload logic here
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const [isOpen, setIsOpen] = useState(false);
  const [locationType, setLocationType] = useState('onsite');

  const openDialog = () => {
      setIsOpen(true);
  };

  const closeDialog = () => {
      setIsOpen(false);
  };

  const handleLocationTypeChange = (event) => {
      setLocationType(event.target.value);
  };

  return (
    <div className="flex flex-col flex-auto min-w-0 min-h-screen">
      <div className="flex flex-col bg-white shadow">
        {/* Cover image */}
        <div>
          <img
            className="h-40 lg:h-60 w-full object-cover"
            src="../../public/cover.jpg"
            alt="Cover"
          />
        </div>

        {/* User info */}
        <div>
          <div className="flex flex-col flex-0 lg:flex-row items-center max-w-5xl w-full mx-auto px-8 lg:h-18">
            {/* Avatar */}
            <div className="-mt-20 lg:mt-[-63px] rounded-full">
              <img
                className="w-32 h-32 rounded-full border-4 border-white"
                src="../../public/male-04.jpg"
                alt="User avatar"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col items-center lg:items-start mt-4 lg:mt-0 lg:ml-8">
              <div className="text-lg font-bold leading-none">Brian Hughes</div>
              <div className="text-secondary">London, UK</div>
            </div>

            {/* Separator */}
            <div className="hidden lg:flex h-8 mx-8 border-l-2"></div>

            {/* Stats */}
            <div className="flex items-center mt-6 lg:mt-0 space-x-6">
              <div className="flex flex-col items-center">
                <span className="font-bold">200k</span>
                <span className="text-sm font-medium text-secondary">Rank</span>
              </div>
            </div>

            {/* Edit Profile Button */}
            <div className="flex items-center gap-4 mt-8 mb-4 lg:m-0 lg:ml-auto">
              <a
                href="/profile"
                className="px-4 py-2 bg-slate-400 text-white font-medium rounded-full"
              >
                View Profile
              </a>
              <a
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    openDialog();
                }}
                className="px-4 py-2 bg-slate-400 text-white font-medium rounded-full"
            >
                Create Event
            </a>
            </div>
          </div>

          {/* About Me */}
          <div className="flex flex-col flex-0 mb-4 lg:flex-row items-center max-w-5xl w-full mx-auto px-8 lg:h-18 mt-4">
            <div className="lg:ml-40">
              <div className="text-normal font-semibold leading-tight">
                About Me
              </div>
              <div className="text-secondary mt-2">
                I’m a friendly kitchen assistant who suffers from a severe
                phobia of buttons.
                <br />
                Brother of Elijah Jay Watkins, who has phobia of buttons and
                trust issues.
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>

      <div className="flex flex-col mx-auto  mt-4 mb-4 max-w-4xl w-full p-6 sm:p-8 pb-6 bg-white rounded-lg shadow">
        <div className="text-xl font-semibold">Create Post</div>
        <div className="flex flex-col sm:flex-row items-start mt-8">
          <div className="flex items-center mb-6 sm:mb-0">
            <img
              className="w-12 min-w-12 h-12 rounded-full mr-4"
              src="../../public/brian-hughes.jpg"
              alt="Card cover image"
            />
            <div className="sm:hidden">Brian Hughes</div>
          </div>
          <div className="w-full">
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="What's on your mind?"
            />
          </div>
        </div>
        <div className="flex justify-between items-center mt-6 sm:mt-8 -mx-3">
         <div className="flex items-center ">
         <button
            className="px-3 mr-1 flex items-center gap-2"
            onClick={handleButtonClick}
          >
            <box-icon name="images"> </box-icon> Photos
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileInputChange}
          />
          {/* <button className="px-3 mr-1 hidden sm:inline-flex">
            Tag Friends
          </button> */}
          <button className="px-3 mr-1 hidden flex items-center gap-2 sm:inline-flex">
            <box-icon name="smile">Emoji</box-icon>
          </button>
         </div>
          <button className="px-8 mr-1 py-2 bg-slate-200 rounded-full">
            
            Post
          </button>
        </div>
      </div>
      <div className="mb-2 mx-auto">
        <UserPost />
      </div>


      {isOpen && (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-8 w-full max-w-lg h-[90%] overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-4">Create Event</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">Title</label>
                    <input type="text" className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea className="w-full px-4 py-2 border rounded-md"></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Time</label>
                    <input type="time" className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Date</label>
                    <input type="date" className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">About Event</label>
                    <textarea className="w-full px-4 py-2 border rounded-md"></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Location</label>
                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="onsite"
                            name="location"
                            value="onsite"
                            checked={locationType === 'onsite'}
                            onChange={handleLocationTypeChange}
                            className="mr-2"
                        />
                        <label htmlFor="onsite" className="mr-4">Onsite</label>
                        <input
                            type="radio"
                            id="online"
                            name="location"
                            value="online"
                            checked={locationType === 'online'}
                            onChange={handleLocationTypeChange}
                            className="mr-2"
                        />
                        <label htmlFor="online">Online</label>
                    </div>
                    {locationType === 'onsite' && (
                        <div>
                            <label className="block text-gray-700">Address</label>
                            <input type="text" className="w-full px-4 py-2 border rounded-md" />
                        </div>
                    )}
                    {locationType === 'online' && (
                        <div>
                            <label className="block text-gray-700">Google Meet Link</label>
                            <input type="text" className="w-full px-4 py-2 border rounded-md" />
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Upload Image</label>
                    <input type="file" className="w-full px-4 py-2 border rounded-md" />
                </div>
             
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={closeDialog}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-full mr-2"
                    >
                        Cancel
                    </button>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-full">
                        Save
                    </button>
                </div>
            </form>
        </div>
    </div>
)}

    </div>
  );
}

export default Community;
