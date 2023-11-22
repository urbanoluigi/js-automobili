//Crea un array composto da 10 automobili.

let automobili = [
    {marca:"toyota", modello:"prius", alimentazione:"elettrica" },
    {marca:"ford", modello:"mustang", alimentazione:"gpl" },
    {marca:"honda", modello:"accord", alimentazione:"diesel" },
    {marca:"volkswagen", modello:"golf", alimentazione:"ibrida" },
    {marca:"chevrolet", modello:"malibu", alimentazione:"benzina" },
    {marca:"nissan", modello:"rogue", alimentazione:"gpl" },
    {marca:"bmw", modello:"3 series", alimentazione:"ibrida" },
    {marca:"mercedes-benz", modello:"c-class", alimentazione:"diesel" },
    {marca:"audi", modello:"a4", alimentazione:"benzina" },
    {marca:"tesla", modello:"model3", alimentazione:"elettrica" },

];

//Dividi le automobili in 3 array separati in base al tipo di alimentazione:
/*
.nel primo array solo le auto a benzina,
.nel secondo solo le auto a diesel,
.nel terzo il resto delle auto.*/


let autobenzina = [];
let autodiesel = [];
let altreauto = [];

