import { images } from "../assets"
import { valuesData } from "../data"


const Values = () => {
  return (
   <section className="lg:my-10 lg:py-10 mb-24">
    <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:text-start
          text-center items-center gap-8 ">

            <div
            data-aos='fade-up' data-aos-offset='300' data-aos-delay='1600'
            className="max-w-md flex flex-col gap-y-8">
                <h2 className="text-4xl lg:relative">
                Our company values
                culture
                <img src={images.love} alt="love" className="lg:absolute left-[10rem] bottom-2" />
                </h2>
                <p>
                We specialize in creating visual identities for products and branda in your company.
                </p>
            </div>

            <div 
            data-aos='fade-up' data-aos-offset='300' data-aos-delay='1600'
            className="grid grid-cols-2 place-items-center gap-4">
                {
                    valuesData.map(({value, text}, i) => (
                        <div key={i} className="flex flex-col h-[5rem] space-y-2 justify-end items-center">
                            <img src={value} alt={text}  />
                            <p>{text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
   </section>
  )
}

export default Values