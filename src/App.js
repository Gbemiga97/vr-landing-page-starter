import { useEffect } from "react";
import { Video } from "./components";
import { Banner, Experience, Explore, Header, Headsets, Testimonial, Values } from "./sections";
import Aos from "aos";
import 'aos/dist/aos.css'


const App = () => {

  useEffect(() => {
    Aos.init({ 
      duration: 1000,
      delay: 400,
    });
  })


  return (
    <div className="overflow-hidden ">
      <Header />
      <Banner />
      <Experience />
      <Video />
      <Headsets />
      <Testimonial />
      <Values />
      <Explore />
    </div>
  ) 
}

export default App;
