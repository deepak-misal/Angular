import { Component } from "@angular/core";
import { IStudent } from "./IStudent";

@Component({
    selector:'sw-student',
    templateUrl:'./student.component.html'
})
export class StudentComponent{
    student:IStudent;
    students:IStudent[];
    imgMaxWidth:number;
    imgMaxHeight:number;

    constructor(){
        this.imgMaxWidth=100
        this.imgMaxHeight=100
        this.student={
            rollNo:101,
            name:"Deepak",
            cgpa:9,
            picture:'../../assets/images/general_student.jpg',
        }
        this.students=[];
        
    }
    load(){
        this.students.push({rollNo:102,name:"ABC",cgpa:8,picture:'../../assets/images/general_student.jpg'})
        this.students.push({rollNo:103,name:"PQR",cgpa:7,picture:'../../assets/images/general_student.jpg'})
        this.students.push({rollNo:104,name:"XYZ",cgpa:6,picture:'../../assets/images/general_student.jpg'})
        this.students.push({rollNo:105,name:"LMNO",cgpa:5,picture:'../../assets/images/general_student.jpg'})
        return this.students;
    }

}