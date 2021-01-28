import { SubjectStatus } from "../enums/subject-status";
import { SubjectType } from "../enums/subject-type";
import { Entreprise } from "./Entreprise";
import { Student } from "./Student";

export class PfeRequests {
    subjectNumber: string;
    title: string;
    type: SubjectType;
    description: string;
    duration: number;
    categories: string[];
    student: Student;
    entreprise: Entreprise;
    status: SubjectStatus;
  }
  