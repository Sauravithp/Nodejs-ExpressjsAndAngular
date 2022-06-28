import { student } from "./student.js";
import { Token } from "./MyDecorator.js";

@Token({course: "CS544",canProgram:false})
export class DE_Student extends student{

}