import "./Filtros.css";
import video from "../../images/global/postal.mp4";

function Filtros() {
  return (
    <div id="filtros" className="full">
      <video
        autoPlay
        muted
        loop
        src={video}
        className="full"
        title="Deepar"
      />
    </div>
  );
}

export default Filtros;
