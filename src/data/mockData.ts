export interface Beneficiary {
  id: string;
  name: string;
  age: number;
  gender: "Male" | "Female" | "Other";
  location: string;
  program: string;
  enrollmentDate: string;
  impactScore: number;
  status: "Active" | "Completed" | "On Hold";
  avatar: string;
  beforeMetrics: {
    income: number;
    healthScore: number;
    educationLevel: number;
    wellbeing: number;
  };
  afterMetrics: {
    income: number;
    healthScore: number;
    educationLevel: number;
    wellbeing: number;
  };
  serviceHistory: {
    date: string;
    service: string;
    provider: string;
    notes: string;
  }[];
  financialAid: number;
  attendance: number;
}

const names = [
  "Amara Osei", "Kwame Mensah", "Fatima Ibrahim", "Ravi Patel", "Mei Lin Chen",
  "Sofia Martinez", "David Kamau", "Priya Sharma", "Yusuf Ahmed", "Grace Mwangi",
  "Carlos Reyes", "Aisha Bello", "Tenzin Dorji", "Luz Hernandez", "Samuel Kojo",
];

const programs = [
  "Education Empowerment", "Health & Nutrition", "Livelihood Support",
  "Women's Empowerment", "Youth Skills Training", "Clean Water Initiative",
];

const locations = [
  "Accra, Ghana", "Nairobi, Kenya", "Mumbai, India", "Lima, Peru",
  "Dhaka, Bangladesh", "Manila, Philippines",
];

const services = [
  "Counseling Session", "Skills Workshop", "Health Checkup", "Financial Literacy Training",
  "Nutrition Program", "Mentoring Session", "Vocational Training", "Community Meeting",
];

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateBeneficiary(index: number): Beneficiary {
  const beforeIncome = randomBetween(80, 300);
  const beforeHealth = randomBetween(30, 60);
  const beforeEducation = randomBetween(20, 50);
  const beforeWellbeing = randomBetween(25, 55);

  const afterIncome = beforeIncome + randomBetween(50, 250);
  const afterHealth = Math.min(100, beforeHealth + randomBetween(10, 35));
  const afterEducation = Math.min(100, beforeEducation + randomBetween(15, 40));
  const afterWellbeing = Math.min(100, beforeWellbeing + randomBetween(10, 35));

  const impactScore = Math.round(
    ((afterIncome - beforeIncome) / beforeIncome * 25) +
    ((afterHealth - beforeHealth) / 100 * 25) +
    ((afterEducation - beforeEducation) / 100 * 25) +
    ((afterWellbeing - beforeWellbeing) / 100 * 25)
  );

  const statuses: Beneficiary["status"][] = ["Active", "Completed", "On Hold"];
  const history = Array.from({ length: randomBetween(3, 8) }, (_, i) => ({
    date: `2024-${String(randomBetween(1, 12)).padStart(2, "0")}-${String(randomBetween(1, 28)).padStart(2, "0")}`,
    service: services[randomBetween(0, services.length - 1)],
    provider: `Dr. ${names[randomBetween(0, names.length - 1)].split(" ")[1]}`,
    notes: "Progress noted. Follow-up scheduled.",
  }));

  return {
    id: `BEN-${String(index + 1).padStart(4, "0")}`,
    name: names[index % names.length],
    age: randomBetween(12, 65),
    gender: (["Male", "Female", "Other"] as const)[randomBetween(0, 2)],
    location: locations[randomBetween(0, locations.length - 1)],
    program: programs[randomBetween(0, programs.length - 1)],
    enrollmentDate: `2023-${String(randomBetween(1, 12)).padStart(2, "0")}-${String(randomBetween(1, 28)).padStart(2, "0")}`,
    impactScore: Math.min(100, Math.max(10, impactScore)),
    status: statuses[randomBetween(0, 2)],
    avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${names[index % names.length]}&backgroundColor=2a9d8f&textColor=ffffff`,
    beforeMetrics: { income: beforeIncome, healthScore: beforeHealth, educationLevel: beforeEducation, wellbeing: beforeWellbeing },
    afterMetrics: { income: afterIncome, healthScore: afterHealth, educationLevel: afterEducation, wellbeing: afterWellbeing },
    serviceHistory: history.sort((a, b) => b.date.localeCompare(a.date)),
    financialAid: randomBetween(200, 2500),
    attendance: randomBetween(60, 100),
  };
}

export const beneficiaries: Beneficiary[] = Array.from({ length: 15 }, (_, i) => generateBeneficiary(i));

export const dashboardStats = {
  totalBeneficiaries: beneficiaries.length,
  activePrograms: new Set(beneficiaries.map(b => b.program)).size,
  avgImpactScore: Math.round(beneficiaries.reduce((sum, b) => sum + b.impactScore, 0) / beneficiaries.length),
  totalAidDistributed: beneficiaries.reduce((sum, b) => sum + b.financialAid, 0),
  completedBeneficiaries: beneficiaries.filter(b => b.status === "Completed").length,
  activeBeneficiaries: beneficiaries.filter(b => b.status === "Active").length,
};

export const programDistribution = programs.map(p => ({
  name: p,
  count: beneficiaries.filter(b => b.program === p).length,
})).filter(p => p.count > 0);

export const monthlyImpact = [
  { month: "Jan", score: 42 }, { month: "Feb", score: 48 }, { month: "Mar", score: 51 },
  { month: "Apr", score: 55 }, { month: "May", score: 59 }, { month: "Jun", score: 63 },
  { month: "Jul", score: 61 }, { month: "Aug", score: 66 }, { month: "Sep", score: 70 },
  { month: "Oct", score: 72 }, { month: "Nov", score: 75 }, { month: "Dec", score: 78 },
];
