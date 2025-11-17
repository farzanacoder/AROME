'use client'
import Image from "next/image";
import React, { useState } from "react";
import videoThumbnail from '../../public/video.jpg'
import { MdOutlineSlowMotionVideo } from "react-icons/md";

export default function Video() {
    const [video , setVideo] = useState(false);




  return (
    <>
      <div className="relative w-[80%] mt-10 rounded-lg overflow-hidden ml-[250px]">

        <Image src={videoThumbnail} alt="video" className="w-full "/>

        <button onClick={() => setVideo(true)} className="absolute top-20 right-10 text-white text-7xl rounded-full p-4 shadow-lg">
            <MdOutlineSlowMotionVideo />
         <iframe
        className="hidden"
          width="700"
          height="350"
          src="https://www.youtube.com/embed/_9VUPq3SxOc?si=PlfkUi0hH4fQjUcA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        </button>
        
      </div>
    </>
  );
}
