import React,{useState} from "react";

function SavedPost() {
    const [expanded, setExpanded] = useState(false);

    return (
      <div className="mx-auto ">
      {/* Post2 */}
      <div className="flex flex-col max-w-4xl w-full mt-8 bg-white shadow-lg rounded-lg">
          <div className="flex items-center mx-6 sm:mx-8 mt-6 mb-4">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="../../public/female-01.jpg"
              alt="Card cover image"
            />
            <div className="flex flex-col">
              <span className="font-semibold leading-none">Caroline Lundu</span>
              <span className="text-sm text-secondary leading-none mt-1">
                29 minutes ago
              </span>
            </div>
            <button className="ml-auto -mr-4">
            <box-icon type="solid" name="bookmark"></box-icon>{" "}
            </button>
          </div>
          <div className="mx-6 sm:mx-8 mt-2 mb-6">
            Look at that sky! I so want to be there.. Can we arrange a trip? Is
            that a possibility? Please!!!
          </div>
          <div className="m-6 sm:mx-8">
                      <p>
                          We'll put a happy little sky in here. We touch the canvas, the canvas takes what it wants. A
                          little happy sunlight shining through there.
                          Let's build some happy little clouds up here. I was blessed with a very steady hand; and it
                          comes in very handy when you're doing these little delicate
                          things. This is the fun part.
                      </p>
                      <p className="mt-4">
                          Isn't it great to do something you can't fail at? Little trees and bushes grow however makes
                          them happy.
                          Trees get lonely too, so we'll give him a little friend. There are no mistakes. You can fix
                          anything that happens.
                      </p>
                  </div>
          <div className="flex items-center mx-3 sm:mx-5">
            <button className="px-3 mr-1">
              <box-icon name="heart"></box-icon>
            </button>
            <button className="px-3 mr-1" onClick={() => setExpanded(!expanded)}>
              <box-icon name="comment"></box-icon>
            </button>
            <button className="px-3 mr-1">
              <box-icon name="trash"></box-icon>
            </button>
          </div>
          <hr className="border-b mx-6 sm:mx-8 mt-4 mb-6" />
          <div className="flex flex-col sm:flex-row sm:items-center mx-6 sm:mx-8 mb-4 sm:mb-6">
            <div className="flex items-center">
              <div className="text-md tracking-tight ml-3">
                You and 24 more liked this
              </div>
            </div>
            <div className="hidden sm:flex flex-auto"></div>
            <div className="flex items-center mt-4 sm:mt-0">
              <button
                className="px-3 sm:-mr-4 flex items-center"
                onClick={() => setExpanded(!expanded)}
              >
                <span className="mr-1">5 Comments</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transition-transform ease-in-out duration-150 ${
                    expanded ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
          {expanded && (
            <div className="flex flex-col mx-4 sm:mx-8 mt-6 mb-3">
              <hr className="border-b m-0" />
              <div className="flex items-start mt-6">
                <img
                  className="w-12 h-12 rounded-full mr-5"
                  src="../../public/brian-hughes.jpg"
                  alt="Card cover image"
                />
                <textarea
                  className="fuse-mat-textarea fuse-mat-no-subscript w-full border-2 p-2 rounded-lg"
                  placeholder="Write a comment..."
                  rows="3"
                ></textarea>
              </div>
              <div className="flex items-center mt-3 ml-auto -mr-3">
                <button className="px-3 py-1 bg-gray-200 rounded-full">
                  Post
                </button>
              </div>
              <hr className="border-b mx-4 sm:mx-8 my-0" />
              <div className="max-h-120 overflow-y-auto">
                {/* Comments section */}
                <div className="relative flex flex-col mx-4 sm:mx-8 my-6">
                  <div className="flex items-start">
                    <img
                      className="w-8 h-8 rounded-full mr-4"
                      src="../../public/male-05.jpg"
                      alt="Card cover image"
                    />
                    <div className="flex flex-col mt-0.5">
                      <span>
                        <b>Rutherford Brannan</b> Oh, I’m in.. Let’s arrange a
                        trip for the next weekend if you want!
                      </span>
                    </div>
                    <button className="ml-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Other comments */}
                {/* Repeat the above block for additional comments */}
              </div>
            </div>
          )}
        </div>
  
      </div>
    );

}

export default SavedPost;