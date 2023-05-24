import { useNavigate } from "react-router-dom";

function GoBack() {
	const navigate = useNavigate();

  return (
    <button className="txt-center clr-white inl flex-center go-back-bottom cntH" 
						onClick={() => navigate(-1)}>
			<b>Regresar</b>
		</button>
  );
}

export default GoBack;
