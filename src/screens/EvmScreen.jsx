import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findCandidate } from "../data/candidates";
import beepSound from "../assets/beep.mp3";
import NoCandidate from "./NoCandidate";
import symbolImg from "../assets/electionsymbol.png";

const ROWS = 10;

export default function EvmScreen() {
  const { candidateId } = useParams();
  const [selectedRow, setSelectedRow] = useState(null);
  const [candidate, setCandidate] = useState(null);
  const [readyOn, setReadyOn] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setCandidate(findCandidate(candidateId));
    setSelectedRow(null);
  }, [candidateId]);

  if (!candidate) return <NoCandidate />;

 

  const handleVote = (rowIndex) => {
    if (selectedRow !== null) return; // one vote only
    if (rowIndex + 1 !== candidate.row) return;
    setSelectedRow(rowIndex);
    setReadyOn(false);

    try {
      const audio = new Audio(beepSound);
      audio.play();
    } catch (e) {
      // ignore if autoplay blocked
    }

    setTimeout(() => {
      navigate(`/evm/${candidate.id}/success`);
    }, 4000);
  };


  return (

    <div className="app-root">
      <div className="phone-frame">

        <div className="evm-shell">
          <div className="evm-inner">
            <div className="evm-header">
              <div className="evm-ready">
                <span>Ready</span>
                <span className={readyOn ? "status-dot" : "status-dot off"} />
              </div>
              <div className="evm-header-right">
                <span>Ballot Unit</span>
                <strong>1</strong>
              </div>
            </div>

            <div>
              {Array.from({ length: ROWS }).map((_, i) => (
                <div className="evm-row" key={i}>
                  <div className="cell-index">{i + 1}</div>
                  <div className="cell-name">
                    {i+1 === candidate.row ? candidate.nameMl : ""}
                  </div>
                  <div className="cell-symbol">{i+1 === candidate.row  ? <img src={symbolImg} style={{ "width": "30%" }}></img> : ""}</div>
                  <div className="cell-led">
                    <div
                      className={
                        selectedRow === i ? "led-dot on" : "led-dot"
                      }
                    />
                  </div>
                  <div className="cell-btn">
                    <div
                      className={
                        selectedRow !== null
                          ? "vote-switch disabled"
                          : "vote-switch"
                      }
                      onClick={() => handleVote(i)}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="evm-footer-space" />
          </div>
        </div>
      </div>
    </div>







    // <div style={{padding:20}}>
    //   <h2>EVM - {candidate.nameMl}</h2>
    //   <div style={{background:'white',padding:10,borderRadius:10}}>
    //     {[...Array(ROWS)].map((_,i)=>(
    //       <div key={i} style={{
    //         display:'flex',
    //         padding:'8px 0',
    //         borderBottom:'1px solid #ddd',
    //         alignItems:'center'
    //       }}>
    //         <div style={{width:30,textAlign:'center'}}>{i+1}</div>
    //         <div style={{flex:1}}>
    //           {i+1===candidate.row ? candidate.nameMl : ""}
    //         </div>
    //         <div style={{width:40,textAlign:'center'}}>
    //           {i+1===candidate.row ? candidate.symbol : ""}
    //         </div>
    //         <div style={{
    //           width:20,
    //           height:20,
    //           borderRadius:'50%',
    //           background: selectedRow===i ? 'red' : '#700'
    //         }} />
    //         <div 
    //           style={{
    //             width:60,
    //             height:30,
    //             background:'#004c80',
    //             marginLeft:10,
    //             borderRadius:20,
    //             cursor:'pointer',
    //             opacity:selectedRow!==null?'0.5':1
    //           }}
    //           onClick={()=>handleVote(i)}
    //         />
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}
