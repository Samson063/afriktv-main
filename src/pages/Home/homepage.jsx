import React from "react";
import './style.css';

function Homepage() {
  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="javascript:void(0)" className="flex items-center logo">
            <img
              src="/src/assets/afriklogo.png"
              className=""
              height="40px"
              width=""
              alt="Flowbite Logo"
            />
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Get started
            </button>
          </div>
        </div>
      </nav> 

      {/* <div className="">
        <div className="">
          <h2 className="big-text">
            AfrikTV is a movie streaming platform for African Movies
            <div className="wrapper">
              <div>
                <a className="btn" href="#">
                  <img
                    src="src/assets/google-play-badge.png"
                    className="google-play"
                    width="200px"
                  />
                </a>
              </div>

              <div>
                <a className="btn right-btn" href="#">
                  <img
                    src="src/assets/appstore-badge.png"
                    className="google-play"
                    width="200px"
                  />
                </a>
              </div>
            </div>
          </h2>
        </div>

        <div className="">
          <img src="src/assets/first-img.png" />
        </div>
      </div> */}

    

      <div className="grid-cols-2 items-center justify-around flex w-full">
        <div className="w-[500px] bg-[red]">
          <h2 className="big-text">
              AfrikTV is a movie streaming platform for African Movies
          </h2>

          <div>
            <button>
              <img
                      src="src/assets/google-play-badge.png"
                      className="google-play"
                      width="200px"
                    />
            </button>
            <button>
              <img
                      src="src/assets/appstore-badge.png"
                      className="google-play"
                      width="200px"
                    />
            </button>
          </div>
        </div>

        <div className="bg-[green]">
         <img src="src/assets/first-img.png" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;