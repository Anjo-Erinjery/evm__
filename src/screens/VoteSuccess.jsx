import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import successGif from "../assets/success.gif";

export default function VoteSuccess() {
  const { candidateId } = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    const t=setTimeout(()=>navigate(`/evm/${candidateId}/voted`),2500);
    return ()=>clearTimeout(t);
  },[]);

  return (
    <div className="success-screen">
      <div>
        <img src={successGif} style={{"width":"20%"}}></img>
        <div className="success-text-main">Vote Successfully Completed</div>
        <div className="success-text-sub">
          നിങ്ങളുടെ വോട്ട് വിജയകരമായി പൂർത്തീകരിച്ചു
        </div>
      </div>
    </div>
  );
}
