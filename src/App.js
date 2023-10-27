import { Video } from "./components";
import { Banner, Experience, Explore, Header, Headsets, Testimonial } from "./sections";


const App = () => {
  return (
    <div className="overflow-hidden ">
      <Header />
      <Banner />
      <Experience />
      <Video />
      <Headsets />
      <Testimonial />
      <Explore />
      <div className="min-h-[1000px]"></div>
    </div>
  ) 
}

export default App;
