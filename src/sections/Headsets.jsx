import { headsetData } from "../data";


const Headsets = () => {
  return (
    <section className="py-12 lg:py-24 ">
      <div className="container mx-auto">
        <h2 
        data-aos='fade-down'
        className="text-3xl font-bold mb-6">
          Mixed Reality Headsets</h2>

        <div className="grid md:grid-cols-2 place-items-center gap-12">
          {
            headsetData.map(({img, title, description, delay}, i) => (
              <article 
              data-aos='zoom-in'
              data-aos-delay={delay}
              data-aos-offset='300'
              className="relative">
                <img src={img} alt={title}  />
                <div className="absolute bottom-0 bg-white/20 backdrop-blur-md  max-w-[300px]
                min-h-[150px] p-6">
                  <h4 className="font-semibold text-xl underline   mb-2">
                    {title}</h4>
                  <p>
                    {description}
                  </p>
                </div>
              </article>
            ))
          }
        </div>
      </div>
    </section>
  )
};

export default Headsets;
