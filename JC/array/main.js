
//  calculation array minimum  

let m = [7, 66, 55, 4, 88, 1, 8, 99, 3];
let min = m[0];  //Минимум
let min_ind = 0;  //Индекс Min

document.write('Maccив: <br>');

for (i=1; i<m.length; i++) {
    if (m[i] < min) {
    min = m[i];
    min_ind = i;
    } // if
document.write(m[i] +" ");
//for
document.write('<br>Mинимyм: ' + min);
document.write('<br>Индeкc: ' + min_ind); 
}