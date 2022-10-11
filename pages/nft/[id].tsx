import React from "react";

function NftDrop() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 bg-zinc-800 h-screen ">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="flex flex-col justify-center items-center py-2  lg:min-h-screen">
          <img
            className="w-44 h-25 lg:h-35 rounded object-cover"
            src="https://i.ibb.co/B4p5B2p/nft1.webp"
            alt="hi"
          />
          <div className="items-center flex-col mx-auto justify-center">
            <h2 className="text-white text-3xl text-center font-semibold">
              This is a wonderfull nft dapp
            </h2>
            <p className="text-white text-lg text-center">Hello dan</p>
          </div>
        </div>
      </div>

      <div className="p-12">
        <header className="">
          <h1 className="text-white 4xl">Hello this is daniel</h1>
          <button className="text-white bg-purple-500 rounded-full m-2 p-2">
            Sign in
          </button>

          <div></div>
          <div></div>
        </header>
      </div>
    </div>
  );
}

export default NftDrop;
