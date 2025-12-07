export const candidates = [
  {
    id: "1765002530359",
    nameMl: "രാജേഷ് കെ",
    nameEn: "Rajesh K",
    photo: "/rajeshkmember.png",
    symbol: "../assets/electionsymbol.png",
    ward: "NELLAYA",
    wardNo: 13,
    row: 2
  },
  {
    id: "",
    nameMl: "",
    nameEn: "",
     symbol: "",
     photo: "",
    // symbol: "🌾",
    ward: "",
    wardNo:2 ,
    row: 2
  }
];

export function findCandidate(id) {
  return candidates.find((c) => c.id === id);
}
