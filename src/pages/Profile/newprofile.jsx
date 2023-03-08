import React, { useState } from "react";
import { Link } from "react-router-dom";
import vector from "../../assets/vector.png";

function Newprofile() {
  const [hover, setHover] = useState(false);

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="w-[521px]">
          <div className="mb-16 text-3xl font-black">Edit Profiles</div>
          <div className="flex justify-between items-center mb-11">
            <Link to={"/"}>
              <div
                className="w-28 h-28 bg-[#F39C11] flex justify-center items-center hover:bg-[#6a4407]"
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
              >
                🤡
                {hover && (
                  <img className="absolute" src={vector} alt="Vector Image" />
                )}
              </div>
            </Link>
            <input
              className="w-80 h-16 rounded-lg bg-[##FAFAFA] outline-none py-5 px-4 border border-[#E3E0E0]"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="mb-11">
            <input className="mr-3" type="checkbox" name="" id="" />
            <span>This is a child's profile</span>
          </div>
          <div className="border w-full border-[#E9E9E9] mb-14"></div>
          <div className="flex justify-between w-72">
            <button className="bg-[#060825] text-white flex justify-center items-center py-2 px-3 text-lg font-bold rounded-xl">
              Add Profile
            </button>
            <button className="bg-inherit text-[#060825] border-[#060825] border-2 py-2 px-3 text-lg font-bold rounded-xl flex justify-center items-center">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newprofile;
