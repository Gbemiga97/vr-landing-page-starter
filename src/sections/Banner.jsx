import images from "../assets/images";
import { Users } from "../components";


const Banner = () => {
  return (
    <section className="min-h-[600px] pt-24 text-center relative lg:pt-48 lg:pb-0
    lg:text-left -z-20
     before:w-full before:h-[40rem]
     before:bg-circle before:absolute before:bg-no-repeat before:left-0 
     before:top-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start">
          <div>
            <h1 className="text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug">
              Let's Explore <br /> Three-Dimensional <br /> Visual
            </h1>
            <p className="font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0">
            With virtual technology you can see the digital world feel more real and you can play the game with a new style.
            </p>

            <div className="flex items-center justify-around space-x-4
            max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start">
              <button className="btn">Get It Now</button>
              <a 
              className="border-b-2 border-transparent hover:border-white transition ease-in-out"
              href="#">Explore Device</a>
              </div>
              <div>
              <Users />
              </div>
              </div>
             
              <div>
                <img src={images.Banner} alt="hero" />
              </div>
        </div>
      </div>
    </section>
  )
};

export default Banner;
