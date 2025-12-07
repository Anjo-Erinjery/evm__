import { useParams } from "react-router-dom";
import { findCandidate } from "../data/candidates";
import NoCandidate from "./NoCandidate";
import symbolImg from "../assets/electionsymbol.png";


export default function VotedCard() {
  const { candidateId } = useParams();
  const candidate = findCandidate(candidateId);

  if (!candidate) return <NoCandidate />;

  return (
   <div className="voted-screen">
      <div className="voted-wrapper">
        <div className="voted-headline">
          <span className="blue">വോട്ടിംഗ് മെഷീനിൽ രണ്ടാമത്,</span>
          <br />
          <span className="green">ജനഹൃദയങ്ങളിൽ ഒന്നാമത്</span>
        </div>

        <div className="voted-card">
          <div className="voted-tag">
            <span>Voted</span>
            <span className="voted-tag-check">✔</span>
          </div>

          <div className="candidate-row">
            <div className="candidate-photo"><img src={candidate.photo} style={{ "width": "100%" }}></img></div>
            <div>
              <div className="candidate-info-primary">{candidate.nameMl}</div>
              <div className="candidate-info-secondary">
                <span>{candidate.ward}</span>
                <span>WARD: {candidate.wardNo}</span>
              </div>
            </div>
          </div>

          <div className="candidate-symbol"><img src={symbolImg} style={{ "width": "100%" }}></img>
          {/* ☭ */}
          </div>
          <div className="gold-ribbon" />
        </div>

        {/* <div className="voted-cta-wrap">
          <button className="voted-cta" onClick={handleVoteAgain}>
            Vote Again
          </button>
        </div> */}
      </div>
    </div>
  );
}
