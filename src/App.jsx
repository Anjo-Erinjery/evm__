import { Routes, Route } from "react-router-dom";
import EvmScreen from "./screens/EvmScreen";
import VoteSuccess from "./screens/VoteSuccess";
import VotedCard from "./screens/VotedCard";
import NoCandidate from "./screens/NoCandidate";

export default function App() {
  return (
    <Routes>
      <Route path="/evm/:candidateId" element={<EvmScreen />} />
      <Route path="/evm/:candidateId/success" element={<VoteSuccess />} />
      <Route path="/evm/:candidateId/voted" element={<VotedCard />} />
      <Route path="*" element={<NoCandidate />} />
    </Routes>
  );
}
