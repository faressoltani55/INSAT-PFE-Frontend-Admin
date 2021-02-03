
import { DepartmentEnum } from "../enums/Department";
import { MajorEnum } from "../enums/Major";
import { SubjectStatus } from "../enums/subject-status";
import { SubjectType } from "../enums/subject-type";
import { Entreprise } from "./Entreprise";
import { Professor } from "./Professor";
import { Student } from "./Student";
import { Supervisor } from "./Supervisor";

export class Subject {
  _id: string;
  subjectNumber: string;
  title: string;
  type: SubjectType;
  description: string;
  duration: number;
  categories: string[];
  student: Student;
  entreprise: Entreprise;
  supervisor: Supervisor;
  professor: Professor;
  report: string;
  status: SubjectStatus;
  administrationNotice: string;

}
