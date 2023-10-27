

const Explore = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div>
          <h3>Explore product in 
            new way</h3>
            <p>We specialize in creating visual identities for products and branda in your company.</p>

            <form  className="flex flex-col w-full space-y-4 gap-x-4 lg:flex-row lg:space-y-0 ">
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
