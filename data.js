// FAKE demo data only (mockups are public). Netanya centre.
const MOCK = window.MOCK = {
  caller: "תומר",
  stands: [
    { id: 1, name: "הרצל 30, נתניה", lat: 32.3286, lng: 34.8569, imp: 1, need: 3, have: 1 },
    { id: 2, name: "סמילנסקי 8, נתניה", lat: 32.3236, lng: 34.8608, imp: 2, need: 2, have: 0 },
    { id: 3, name: "כיכר העצמאות, נתניה", lat: 32.3311, lng: 34.8531, imp: 1, need: 2, have: 2 },
  ],
  people: [
    { id: 11, name: "דני לוי", lat: 32.3294, lng: 34.8577, st: "new", reg: "דוכנים", tag: "נקלט" },
    { id: 12, name: "רונית כהן", lat: 32.3275, lng: 34.8551, st: "calling", by: "שי", reg: "", tag: "תומך בלבד" },
    { id: 13, name: "אבי מזרחי", lat: 32.3301, lng: 34.8596, st: "noans", tries: 2, reg: "", tag: "תומך בלבד" },
    { id: 14, name: "מיכל פרץ", lat: 32.3263, lng: 34.8585, st: "back", when: "18:30", reg: "משקיפים", tag: "נקלט" },
    { id: 15, name: "יוסי ביטון", lat: 32.3249, lng: 34.8622, st: "new", reg: "", tag: "חדש" },
    { id: 16, name: "שרה אברהם", lat: 32.3222, lng: 34.8590, st: "new", reg: "דוכנים", tag: "נקלט" },
    { id: 17, name: "משה דהן", lat: 32.3318, lng: 34.8548, st: "placed", reg: "דוכנים", tag: "נקלט" },
    { id: 18, name: "נועה שלום", lat: 32.3270, lng: 34.8615, st: "new", reg: "", tag: "תומך בלבד" },
    { id: 19, name: "איתי גבאי", lat: 32.3335, lng: 34.8580, st: "new", reg: "", tag: "חדש" },
  ],
};
MOCK.dist = (a, b) => { const R = 6371000, r = Math.PI / 180, dLa = (b.lat - a.lat) * r, dLo = (b.lng - a.lng) * r;
  const h = Math.sin(dLa / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLo / 2) ** 2; return Math.round(2 * R * Math.asin(Math.sqrt(h)) / 10) * 10; };
MOCK.near = (s) => MOCK.people.map(p => ({ ...p, m: MOCK.dist(s, p) })).sort((a, b) => a.m - b.m);
MOCK.stLabel = { new: "עוד לא התקשרו", calling: "מתקשר עכשיו", noans: "לא ענה", back: "לחזור אליו", placed: "שובץ" };
MOCK.view = new URLSearchParams(location.search).get("view") || "map";
