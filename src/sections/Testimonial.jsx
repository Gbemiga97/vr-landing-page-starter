import { TestimonialSlider } from "../components";


const Testimonial = () => {
  return (
    <section className="mb-64 lg:mb-48">
      <div className="container mx-auto">
        <div className="testimonial max-h-[400px] p-6 lg:p-12 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              What our clients say</h2>
            <p className="max-w-2xl mx-auto mb-12 lg:mb-24"> 
              See what our customer say about us. It really matter for us. How good or bad
              we will make ir for evaluation to make EhyalLive better.</p>
          </div>

          <div >
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Testimonial;
