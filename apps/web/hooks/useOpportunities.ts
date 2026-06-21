import { useQuery } from "@tanstack/react-query";

export interface Opportunity {
  id: string;
  title: string;
  company: string;
  type: string;
  score: number;
  deadline: string;
  source: string;
}

const mockOpportunities: Opportunity[] = [
  {
    id: "opp-1",
    title: "AI Applied Research Engineer",
    company: "FutureLabs AI",
    type: "fellowship",
    score: 96,
    deadline: "2026-07-15",
    source: "Handshake",
  },
  {
    id: "opp-2",
    title: "Software Engineer Intern - Distributed Systems",
    company: "ScaleTech Solutions",
    type: "internship",
    score: 89,
    deadline: "2026-08-01",
    source: "LinkedIn",
  },
  {
    id: "opp-3",
    title: "Quantum Generalist Scholar",
    company: "Apex Research",
    type: "research",
    score: 92,
    deadline: "2026-07-28",
    source: "Direct Portal",
  },
  {
    id: "opp-4",
    title: "Full-Stack Web Innovation Challenge",
    company: "DevQuest Global",
    type: "contest",
    score: 81,
    deadline: "2026-06-30",
    source: "Hackathons-Hub",
  },
];

export function useOpportunities() {
  return useQuery<Opportunity[]>({
    queryKey: ["opportunities"],
    queryFn: async () => {
      // Simulate API latency safely
      await new Promise((resolve) => setTimeout(resolve, 600));
      return mockOpportunities;
    },
  });
}
