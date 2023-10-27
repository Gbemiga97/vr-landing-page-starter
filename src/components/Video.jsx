import { useState } from "react";
import ModalVideo from "react-modal-video";
import { BsPlayCircleFill } from "react-icons/bs";
import '../modalVideo.scss'



const Video = () => {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <div>
      
        <div className="bg-[#534686] border-fuchsia-400 gap-6 lg:gap-0 text-center    border    
         py-6 lg:pl-[4rem]  md:mr-[14rem] rounded-tr-[4rem] flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:text-start">
          <h3 className="text-2xl font-semibold mb-8 lg:mb-0">
          Awesome experiences with <br />
          virtual reality world
          </h3>

          <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="NOK_M1Ib5F0"
          onClose={() => setIsOpen(false)}
          
          />

          <div className="bg-videoBg bg-no-repeat bg-cover -order-1 lg:order-1
          w-[270px] h-[180px] flex items-center justify-center lg:mr-6">
            <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer" >
              <BsPlayCircleFill className="text-4xl text-white/80 hover:text-white
              hover:scale-110 transition" />
            </button>
          </div>
        </div>
    </div>
  )
};

export default Video;
