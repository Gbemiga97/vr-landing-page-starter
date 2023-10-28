import { images } from "../assets";



const Experience = () => {
  return (
    <section className="mb-12 mt-6 lg:mb-24">
      <div className="container mx-auto">
        <div className="flex flex-col min-h-[30rem] gap-8 items-center lg:items-stretch text-center lg:text-start lg:justify-center  lg:space-x-20 lg:flex-row">
          <div className="flex-1 flex space-x-6 order-1 lg:-order-1  lg:space-x-12">
            
            <div className="self-start" data-aos='fade-down'  >
              <img src={images.Exp1} alt="exp" />
            </div>
            <div className="self-end" data-aos='fade-up' >
              <img src={images.Exp2} alt="exp" />
            </div>
          </div>

          <div 
          data-aos='fade-left'
          className="flex flex-1 flex-col lg:items-start items-center  justify-end mt-6 lg:mt-0">
            <h2 className="text-3xl font-bold mb-6 leading-10">
              New Experience In <br /> Playing Games</h2>
            <p className='mb-6 max-w-[25rem]'>
            You can try playing the game with a
            new style and of course a more real
            feel, like you are the main character
            in your game and adventure in this
            new digital world.
            </p>
            <button className="btn">Get it now</button>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Experience;
