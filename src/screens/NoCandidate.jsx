import { useParams } from 'react-router-dom';

export default function NoCandidate() {
  const { candidateId } = useParams();
  return (
    <div style={{
      minHeight:'100vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      textAlign:'center',
      fontSize:'20px',
      color:'#b91c1c'
    }}>
      <div>
        <div style={{fontSize:'40px'}}>❌</div>
        <div>സ്ഥാനാർത്ഥിയെ കണ്ടെത്താനായില്ല</div>
        {candidateId && <div>Candidate ID: {candidateId} അസാധുവാണ്</div>}
      </div>
    </div>
  );
}
