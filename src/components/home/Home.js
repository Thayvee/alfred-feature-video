import "./Home.css";
import video from "../../images/global/partners.mp4";
// import banner from '../../images/banner.png';

function Home() {
  return (
    <div id="home">
      <div id="video" className="deep">
        <video autoPlay muted loop src={video} className="deep" title="Video" />
      </div>
    </div>
  );
}
export default Home;
