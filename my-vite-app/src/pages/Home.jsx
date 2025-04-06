import homeBg1 from '../assets/icons/homeBg.mp4';
import hero1 from '../assets/icons/hero1.png';
import Map from '../Components/Map.jsx'

const Home = () => {
  return (
    <>
      {/* Intro Section */}
      <section className="relative min-h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
          playsInline
        >
          <source src={homeBg1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content overlaying the video */}
        <div className="relative p-5 z-10 grid gap-6 lg:grid-cols-2 min-h-screen items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-white bg-blue-400 rounded-lg bg-opacity-30 text-5xl font-bold mb-4">
              Unlock the adventure of a lifetime <br /> Plan your trip today!
            </h1>
            <p className="text-xl text-white  bg-blue-300 rounded-xl bg-opacity-50 p-4">
              <span className="text-red-700 rounded-3xl bg-yellow-300 bg-opacity-60 text-2xl p-1">
                Welcome to CampJourney, your ultimate travel companion!
              </span> 
              Whether you’re dreaming of a serene escape into nature or a vibrant city adventure, we’re here to transform your travel dreams into reality. Our intuitive platform simplifies every step of your journey, from discovering breathtaking destinations to crafting the perfect itinerary. Explore curated travel guides, access insider tips, and plan every detail with ease. With CampJourney, embark on unforgettable journeys with confidence, knowing that your next adventure is just a click away. Let us help you turn your travel aspirations into memorable experiences!
            </p>
          </div>
          <div className="flex justify-center  lg:justify-end">
            <img src={hero1} alt="Travel adventure" className="opacity-70 rounded-lg max-w-full h-auto lg:w-3/4" />
          </div>
        </div>
      </section>

      {/* Find Location Section */}
      <section className="py-16 px-8 bg-gray-100 text-center">
        <h1 className="text-3xl font-bold text-black mb-6">Find the Location</h1>
        <Map />
      </section>
    </>
  );
};

export default Home;
