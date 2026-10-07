// All content for the site lives here, taken from the infographic and its notes.

export const challenges = [
  { id: 1, anchor: "demand", title: "Demand is surging", text: "Electricity demand is expected to grow 70% in the next decade, reaching 32% of total energy demand.", src: ["c"] },
  { id: 2, anchor: "supply", title: "Supply can't keep up", text: "Fuel production meets only 68.58% of annual demand; the 31.42% shortfall is covered by imports.", src: ["a"] },
  { id: 3, anchor: "fossil", title: "Fossil fuels fill the gap", text: "86% of electricity came from fossil fuels in 2018; coal is over 60% of the energy mix; electricity contributes about 50% of national CO₂ emissions.", src: ["c", "d"] },
  { id: 4, anchor: "renewables", title: "Renewables are untapped", text: "Only about 2% of Indonesia's 441.7 GW renewable potential is in use.", src: ["b"] },
  { id: 5, anchor: "barriers", title: "Barriers block the transition", text: "Infrastructure gaps, regulatory challenges and socio-economic vulnerabilities slow renewable integration.", src: ["d", "e"] },
];

export const demand = { today: 100, future: 170, max: 200 };
export const supply = { domestic: 68.58, imports: 31.42 };
export const renewables = { usedGW: 8.8, untappedGW: 432.9, totalGW: 441.7, usedPct: 2, untappedPct: 98 };
export const mix = { fossil: 86, other: 14, coal: ">60%", co2: "~50%" };

export const barriers = [
  { name: "Infrastructure gaps", tone: "red", text: "Grids and networks that hinder the development and integration of renewable energy." },
  { name: "Regulatory and policy changes", tone: "orange", text: "Policy challenges that slow the shift away from coal." },
  { name: "Socio-economic vulnerabilities", tone: "green", text: "Communities and livelihoods exposed to the costs of transition." },
];

export const responses = [
  { problem: "Supply gap", approach: "Grand Energy Strategy: diversify energy sources and limit fossil consumption", target: "7.1" },
  { problem: "Fossil dependence, untapped renewables", approach: "Policies promoting new and renewable energy: more solar and geothermal capacity", target: "7.2" },
  { problem: "Barriers (domestic)", approach: "Local renewable regulations (West Nusa Tenggara): modernised, decentralised infrastructure; stronger governance", target: "7.b" },
  { problem: "Barriers (international)", approach: "JETP partnership and foreign investment to fill financing and technology gaps", target: "7.a" },
  { problem: "Surging demand", approach: "No efficiency measure found yet", target: "7.3", gap: true },
];

export const targets = [
  { code: "7.1", name: "Affordable and reliable energy", text: "Strengthen reliable, affordable domestic supply and energy security." },
  { code: "7.2", name: "Increase renewable energy", text: "Reduce coal reliance and scale up renewable capacity." },
  { code: "7.3", name: "Improve energy efficiency", text: "Improve energy efficiency and manage demand growth.", gap: true },
  { code: "7.a / 7.b", name: "Finance, technology and infrastructure", text: "Integrated policy, grid and infrastructure upgrades, and financial mechanisms." },
];

export const references = [
  { key: "a", text: "Prasetyo, CP, Effendi, AJ & Chaerul, M 2025, ‘Is our energy system sustainable? Gap analysis of fuel supply and demand in Indonesia’, IOP Conference Series: Earth and Environmental Science, vol. 1448, no. 1, article 012019.", doi: "10.1088/1755-1315/1448/1/012019" },
  { key: "b", text: "Erdiwansyah, E, Mahidin, M, Husin, H, Nasaruddin, N, Khairil, K, Zaki, M & Jalaluddin, J 2021, ‘Investigation of availability, demand, targets, and development of renewable energy in 2017–2050: a case study in Indonesia’, International Journal of Coal Science & Technology, vol. 8, no. 4, pp. 483–499.", doi: "10.1007/s40789-020-00391-4" },
  { key: "c", text: "Zahari, TN & McLellan, BC 2023, ‘Review of Policies for Indonesia’s Electricity Sector Transition and Qualitative Evaluation of Impacts and Influences Using a Conceptual Dynamic Model’, Energies, vol. 16, article 3406.", doi: "10.3390/en16083406" },
  { key: "d", text: "Hartanto, H 2021, ‘The Political Economy of Energy Alteration in Indonesia: The Role of Coal and Mineral in New and Renewable Energy Alteration’, Journal of International Studies on Energy Affairs, vol. 2, no. 2, pp. 148–164.", doi: "10.51413/jisea.Vol2.Iss2.2021.148-164" },
  { key: "e", text: "Porsisa, D, Tohirin, A, Hidayansya, T, Manuhutu, AA, Mahakena, SJM, Prastowo, R, Sibetai, H, Kabalmay, BC, Kermite, JT, Noviyanti, A & Latupeirissa, POM 2026, ‘Sustainable Energy Transition in Indonesia: A Systematic Review of Challenges and Opportunities’, F1000Research, vol. 15, article 1119.", doi: "10.12688/f1000research.185763.1" },
];
