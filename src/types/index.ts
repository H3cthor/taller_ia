export interface Project {
  id: string;
  title: string;
  area: string;
  problem: string;
  solution: string;
  impact: string;
  skills: string[];
  tech: string[];
  hasSimulator?: boolean;
}
