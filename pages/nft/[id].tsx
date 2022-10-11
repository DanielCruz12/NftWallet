import React from "react";

function NftDrop() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-10 h-screen ">
      <div className="lg:col-span-4 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="flex flex-col justify-center items-center py-2 mt-2 lg:min-h-screen">
          <img
            className="skew-y-3 shadow w-44 h-25 lg:h-35 rounded object-cover"
            src="https://i.ibb.co/B4p5B2p/nft1.webp"
            alt="hi"
          />
          <div className="items-center flex-col mx-auto justify-center">
            <h2 className="text-white text-2xl lg:text-3xl text-center font-semibold skew-y-3">
              This is a wonderfull nft dapp
            </h2>
            <p className="text-white text-1xl lg:text-2xl text-center skew-y-3">Hello dan</p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col lg:col-span-6 p-2 space-y-6 text-center">
        <header className="flex items-center justify-between ">
          <p className="text-black text-2xl lg:text-3xl ">Mint <span className="text-purple-500">your nfts</span> here </p>
          <button className="text-white bg-purple-500 rounded-full m-3 p-1 w-20">
            Sign in
          </button>
        </header>
        <hr className="my-2 border" />
        <p className=" text-purple-400 text-center">You are logged in ... wallet</p>
        <div className="mt-10 flex flex-col items-center lg:justify-center ">
          <img className="object-cover w-36 lg:w-80 pb-5 lg:h-40" src="https://i.ibb.co/B4p5B2p/nft1.webp" />
          <h1 className="font-bold text-purple-700 text-center mt-5 ">The nft Marketplace around the world</h1>
          <p className="text-purple-700 font-light pb-10">13/21 Nft´s claimed</p>
          <button className="bg-purple-600 rounded-full w-11/12 p-1 text-white lg:mt-10 ">Mint Nft (0.01 ETH)</button>
        </div>
      </div>
    </div>
  );
}

export default NftDrop;
