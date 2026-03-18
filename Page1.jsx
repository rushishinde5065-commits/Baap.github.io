import "../Style/Page1.css";

import Video from '../assets/Company.mp4'
 
const Page1 = () => {
  return (
      <div className='main'>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="hero-bg-video"
        ><source src={Video} type="video/mp4" />
        </video>
 
      </div>
      )
}
      export default Page1