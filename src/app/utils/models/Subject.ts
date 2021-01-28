import { Entreprise } from "./Entreprise";
import { Professor } from "./Professor";
import { Student } from "./Student";
import { Supervisor } from "./Supervisor";

export class Subject {
  subjectNumber: string;
  title: string;
  type: string;
  description: string;
  duration: number;
  categories: string[];
  student: Student;
  entreprise: Entreprise;
  superviser: Supervisor;
  professor: Professor;
  report: string
}
