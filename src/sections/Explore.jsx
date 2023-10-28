

const Explore = () => {
  return (
    <section className="min-h-[400px] mb-16 lg:mb-4">
      <div className="container mx-auto h-full">
        <div className="h-full bg-explore bg-no-repeat bg-cover p-14
        flex flex-col items-start justify-center">
          <h3 
          data-aos='fade-right' data-aos-offset='1100'
          className="max-w-sm text-3xl text-center md:text-start font-semibold mb-8">
            Explore product in 
            new way</h3>
            <p 
            data-aos='fade-right' data-aos-offset='1300'
            className="text-center md:text-start max-w-xs mb-12">
              We specialize in creating visual identities for products and branda in your company.</p>

            <form  
            data-aos='fade-up' data-aos-offset='1100'
            className="flex flex-col w-full space-y-4 gap-x-4 lg:flex-row lg:space-y-0 ">
              <input type="text" placeholder="Your email" 
              className="bg-gradient-to-t from-[#341d38] to-[#271223] h-12
              px-4 outline-none rounded-md" />
              <button className="btn">Start</button>
            </form>
        </div>
      </div>
    </section>
  )
};

export default Explore;
