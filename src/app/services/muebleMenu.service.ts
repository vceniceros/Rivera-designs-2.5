import { Injectable } from '@angular/core';
import { mueblesMenu } from '../../app/models/muebleMenu';
import { Router } from '@angular/router';


@Injectable()
    export class MuebleMenuService{
        public menuMuebles : mueblesMenu[] ;
        
        constructor(public router: Router) {
            this.menuMuebles = [
              /*Menu de Sillones de 0 a 16*/
              new mueblesMenu(1,"Sillón Modena", "Colección Modena", "https://i.ibb.co/mXB2v80/2-1-3.jpg", "https://i.ibb.co/y4nPwWc/2-1-4.jpg"),
              new mueblesMenu(2,"Sillón Modena / 1 cuerpo", "Colección Modena", "https://i.ibb.co/KGf0mVL/2-2-2.jpg", "https://i.ibb.co/72MFPgg/2-2-3.jpg"),
              new mueblesMenu(3,"Sillón Modena / Comedor ", "Colección Modena", "https://i.ibb.co/BLhpFhL/2-16-1.jpg", "https://i.ibb.co/hdcZx7d/2-16-3.jpg"),
              new mueblesMenu(4,"Sillón Formentera / Recto", "Colección Formentera", "https://i.ibb.co/YPCthDf/1-1-1.jpg", "https://i.ibb.co/D9zsQWs/1-1-3.jpg"),
              new mueblesMenu(5,"Sillón Formentera / Curvo", "Colección Formentera", "https://i.ibb.co/Z133Jt9/1-2-1.jpg", "https://i.ibb.co/JmKXWH0/1-2-3.jpg"),
              new mueblesMenu(6,"Sillón Max", "Colección Formentera", "https://i.ibb.co/Pj29tYm/1-3-2.jpg", "https://i.ibb.co/SfRwnLD/1-3-1.jpg"),
              new mueblesMenu(7,"Sillón Tirreno Plus", "Colección Tirreno", "https://i.ibb.co/hCPWGyN/3-6-1.jpg", "https://i.ibb.co/9TfqnpJ/3-6-3.jpg"),
              new mueblesMenu(8,"Sillón Tirreno Plus / 2 cuerpos", "Colección Tirreno", "https://i.ibb.co/cwLrckr/3-7-1.jpg", "https://i.ibb.co/z6nptBY/3-7-4.jpg"),
              new mueblesMenu(9,"Sillón Tirreno / 1 cuerpo", "Colección Tirreno", "https://i.ibb.co/wYLhY6Q/3-1-1.jpg", "https://i.ibb.co/rdPfrQb/3-1-3.jpg"),
              new mueblesMenu(10,"Sillón Tirreno / 2 cuerpos", "Colección Tirreno", "https://i.ibb.co/xJVKgfV/3-2-1.jpg", "https://i.ibb.co/7t84fbW/3-2-2.jpg"),
              new mueblesMenu(11,"Sillón Dot", "Colección Dot", "https://i.ibb.co/W0ywD6c/5-2-2.jpg", "https://i.ibb.co/j3mDjS0/5-2-3.jpg"),
              new mueblesMenu(12,"Sillón Dot / 2 cuerpos", "Colección Dot", "https://i.ibb.co/7JpYWbG/5-1-1.jpg", "https://i.ibb.co/bvTqph5/5-1-2.jpg"),
              new mueblesMenu(13,"Sillón Belt", "Colección Belt", "https://i.ibb.co/NLsxQmC/7-1-1.jpg", "https://i.ibb.co/n6bysrF/7-1-2.jpg"),
              new mueblesMenu(14,"Sillón Belt / 2 cuerpos", "Colección Belt", "https://i.ibb.co/zZHM1vL/7-2-2.jpg", "https://i.ibb.co/1JrWpGx/7-2-1.jpg"),
              new mueblesMenu(15,"Sillón Belt / 3 cuerpos", "Colección Belt", "https://i.ibb.co/qkV4bzq/7-3-1.jpg", "https://i.ibb.co/rGWZYzL/7-3-2.jpg"),
              new mueblesMenu(16,"Sillón Relax", "Colección Especial", "https://i.ibb.co/nPT7wqz/9-2-1.jpg", "https://i.ibb.co/vPdL5HF/9-2-2.jpg"),
              /*Menu de mesas de 16 a 29*/ 
              new mueblesMenu(17,"Mesa Modena / Comedor", "Colección Modena", "https://i.ibb.co/Twyg7nH/2-7-1.jpg", "https://i.ibb.co/nMMBxW5/2-7-2.jpg"),
              new mueblesMenu(18,"Mesa Formentera / Comedor", "Colección Formentera", "https://i.ibb.co/7JV8hmC/1-7-1.jpg", "https://i.ibb.co/NKzRJDB/1-7-2.jpg"),
              new mueblesMenu(19,"Mesa Modena / Reposera", "Colección Modena", "https://i.ibb.co/b2NPSBz/2-5-1.jpg", "https://i.ibb.co/vdVWc1y/2-5-2.jpg"),
              new mueblesMenu(20,"Mesa Formentera / Reposera", "Colección Formentera", "https://i.ibb.co/VwZF2ns/1-6-1.jpg", "https://i.ibb.co/pXVQTQD/1-6-3.jpg"),
              new mueblesMenu(21,"Mesa Modena / Ratona", "Colección Modena", "https://i.ibb.co/g4m4yDP/2-6-3.jpg", "https://i.ibb.co/rGhz7j0/2-6-1.jpg"),
              new mueblesMenu(22,"Mesa Modena / Auxiliar", "Colección Modena", "https://i.ibb.co/BqYD2h8/2-8-6.jpg", "https://i.ibb.co/GkWC8d7/2-8-7.jpg"),
              new mueblesMenu(23,"Mesa Tirreno Plus / Ratona", "Colección Tirreno", "https://i.ibb.co/J2K7Jgf/3-8-3.jpg", "https://i.ibb.co/X7sWjD7/3-8-4.jpg" ),
              new mueblesMenu(24,"Mesa Alumad / Comedor", "Colección Alumad", "https://i.ibb.co/0Z3q5DR/6-1-3.jpg", "https://i.ibb.co/WFczpBZ/6-1-1.jpg"),
              new mueblesMenu(25,"Mesa Alumad / Reposera", "Colección Alumad", "https://i.ibb.co/hgkMyTF/6-2-2.jpg", "https://i.ibb.co/B6hkpMs/6-2-1.jpg"),
              new mueblesMenu(26,"Mesa Comedor Deck", "Colección Deck", "https://i.ibb.co/Q63QjpJ/8-3-1.jpg", "https://i.ibb.co/52MtLZ1/8-3-2.jpg"),
              new mueblesMenu(27,"Mesa Ratona Belt", "Colección Belt", "https://i.ibb.co/4j7LzG1/7-5-1.jpg", "https://i.ibb.co/f0mTPMW/7-5-3.jpg"),
              new mueblesMenu(28,"Mesa Glass Party", "Colección Especial", "https://i.ibb.co/R6vGGCH/9-3-1.jpg", "https://i.ibb.co/MD9V6Vc/9-3-2.jpg"),
              new mueblesMenu(29,"Mesa Elevable", "Colección Especial", "https://i.ibb.co/jWCnsFh/9-4-1.jpg", "https://i.ibb.co/f1JPRCp/9-4-2.jpg"),
              //menu de puffs de 29 a 34
              new mueblesMenu(30,"Puff Formentera / Curvo", "Colección Formentera", "https://i.ibb.co/17bLzQt/1-4-1.jpg", "https://i.ibb.co/LtHvCmg/1-4-2.jpg"),
              new mueblesMenu(31,"Puff Formentera / Relax", "Colección Formentera", "https://i.ibb.co/q1bbDBc/1-5-1.jpg", "https://i.ibb.co/0GZ9Hwk/1-5-3.jpg"),
              new mueblesMenu(32,"Puff Modena", "Colección Modena", "https://i.ibb.co/VHm0zbT/2-4-4.jpg", "https://i.ibb.co/wBZNQPk/2-4-1.jpg"),
              new mueblesMenu(33,"Puff Modena / Sunken", "Colección Modena", "https://i.ibb.co/jMNR8c7/2-3-1.jpg", "https://i.ibb.co/jMNR8c7/2-3-1.jpg"),
              new mueblesMenu(34,"Puff Belt", "Colección Belt", "https://i.ibb.co/vsRcD6Y/7-6-1.jpg", "https://i.ibb.co/FmKCSF9/7-6-2.jpg"),
              //menu de reposeras de 34 a 39
              new mueblesMenu(35,"Reposera Formentera / Phifertex®", "Colección Formentera", "https://i.ibb.co/Fh42rCb/1-8-1.jpg", "https://i.ibb.co/fM6YVbJ/1-8-2.jpg"),
              new mueblesMenu(36,"Reposera Modena / Phifertex®", "Colección Modena", "https://i.ibb.co/zn5nT3q/2-10-1.jpg", "https://i.ibb.co/wgj6NTc/2-10-2.jpg"),
              new mueblesMenu(37,"Reposera Modena / Solarium", "Colección Modena", "https://i.ibb.co/JFz6t1Y/2-9-1.jpg", "https://i.ibb.co/tJS3fmZ/2-9-3.jpg"),
              new mueblesMenu(38,"Reposera Alumad", "Colección Alumad", "https://i.ibb.co/wzccwxk/6-3-1.jpg", "https://i.ibb.co/HCkXwmp/6-3-2.jpg"),
              new mueblesMenu(39,"Reposera Belt", "Colección Belt", "https://i.ibb.co/tX9D6Zv/7-4-1.jpg", "https://i.ibb.co/d7zsqpH/7-4-2.jpg"),
              //Menu de camastros de 39 a 42
              new mueblesMenu(40,"Camastro doble Solarium III", "Colección Modena", "https://i.ibb.co/hD7wmW5/2-13-1.jpg", "https://i.ibb.co/ZdQ0htv/2-13-2.jpg"),
              new mueblesMenu(41,"Camastro Modena", "Colección Modena", "https://i.ibb.co/xm8zqGX/2-14-1.jpg", "https://i.ibb.co/svMDZbV/2-14-2.jpg"),
              new mueblesMenu(42,"Camastro Cubo", "Colección Especial", "https://i.ibb.co/dM632v1/9-1-1.jpg", "https://i.ibb.co/dftBN3L/9-1-2.jpg"),
              //Menu de Barras 42 a 44
              new mueblesMenu(43,"Barra Formentera", "Colección Formentera", "https://i.ibb.co/tHdN149/1-11-2.jpg", "https://i.ibb.co/B6rd6G7/1-11-4.jpg"),
              new mueblesMenu(44,"Barra Modena", "Colección Modena", "https://i.ibb.co/mD9mXvf/1-10-1.jpg", "https://i.ibb.co/2sywQvQ/1-10-2.jpg"),
              //Menu Banquetas 44 a 49
              new mueblesMenu(45,"Banqueta Formentera / Curva", "Colección Formentera", "https://i.ibb.co/7Qh17Cw/1-15-1.jpg", "https://i.ibb.co/W3BDgL8/1-15-3.jpg"),
              new mueblesMenu(46,"Banqueta Formentera / Recta", "Colección Formentera", "https://i.ibb.co/JyLHXgr/1-14-1.jpg", "https://i.ibb.co/gdhQYx7/1-14-2.jpg"),
              new mueblesMenu(47,"Banqueta Modena", "Colección Modena", "https://i.ibb.co/R4ZwRwY/2-16-1.jpg", "https://i.ibb.co/JHgy7pg/2-16-2.jpg"),
              new mueblesMenu(48,"Banqueta Modena con Respaldo", "Colección Modena", "https://i.ibb.co/RTZVXZf/2-15-1.jpg", "https://i.ibb.co/8dVq23r/2-15-2.jpg"),
              new mueblesMenu(49,"Banqueta Tirreno", "Colección Tirreno", "https://i.ibb.co/m61HMTR/3-5-1.jpg", "https://i.ibb.co/3MtHPCV/3-5-2.jpg"),
              //Menu Bancos 49 a 54
              new mueblesMenu(50,"Banco Formentera / Curvo", "Colección Formentera", "https://i.ibb.co/S0b1jMF/1-12-1.jpg", "https://i.ibb.co/sJL13qs/1-12-2.jpg"),
              new mueblesMenu(51,"Banco Formentera / Recto", "Colección Formentera", "https://i.ibb.co/8cVcN7c/1-13-1.jpg", "https://i.ibb.co/Js8wqkX/1-13-2.jpg"),
              new mueblesMenu(52,"Banquito Deck", "Colección Deck", "https://i.ibb.co/w4BQs3x/8-4-1.jpg", "https://i.ibb.co/w4BQs3x/8-4-1.jpg"),
              new mueblesMenu(53,"Banco Alumad", "Colección Alumad", "https://i.ibb.co/6Dfyrvj/6-5-4.jpg", "https://i.ibb.co/HKMDRyp/6-5-3.jpg"),
              new mueblesMenu(54,"Banco Alumad con Respaldo", "Colección Alumad", "https://i.ibb.co/6Dfyrvj/6-5-4.jpg", "https://i.ibb.co/bdwV7cm/6-6-1.jpg"),
              //Menu Sillas 54 a 56
              new mueblesMenu(55,"Silla Alumad", "Colección Alumad", "https://i.ibb.co/J51kKp3/6-4-1.jpg", "https://i.ibb.co/gVykg6h/6-4-2.jpg"),
              new mueblesMenu(56,"Silla Deck", "Colección Deck", "https://i.ibb.co/6BsQb7g/8-1-1.jpg", "https://i.ibb.co/wBshgHQ/8-1-2.jpg"),
              //Menu de hamacas 56 a 59
              new mueblesMenu(57,"Columpio", "Colección Especial", "https://i.ibb.co/FgcX7nT/9-7-1.jpg", "https://i.ibb.co/t4DGtvT/9-7-2.jpg "),
              new mueblesMenu(58,"Hamaca Cubo", "Colección Especial", "https://i.ibb.co/LQJVy9V/9-5-1.jpg", "https://i.ibb.co/LQJVy9V/9-5-1.jpg"),
              //Menu de Pergola 59 a 61
              new mueblesMenu(59,"Pérgolas Bio", "Colección Especial", "https://i.ibb.co/zVf6VGt/9-8-1.jpg", "https://i.ibb.co/gV4pTYG/9-8-4.jpg"),
              new mueblesMenu(60,"Pérgola", "Colección Especial", "https://i.ibb.co/FXTF5cP/9-9-1.jpg", "https://i.ibb.co/hBnCLqw/9-9-2.jpg"),
            ]
           
           }
        getMuebleMenu(){
            return this.menuMuebles;
        }
    }
