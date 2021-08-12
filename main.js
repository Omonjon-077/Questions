alert(`1-o'yin: Hayolingizni o'qiyman`);
let son = +prompt(`Hohlagan 0 dan 99 gacha bo'lgan sonni o'ylang ?`);
alert(`O'ylangan sonni 2 ga ko'paytiring`);
alert(`Chiqgan songa 12 ni qo'shing`);
alert(`Yig'indini 2 ga bo'ling`);
alert(`chiqgan sondan o'ylangan sonni ayiring`);
alert(`Men javopni bilaman: 6 chiqdi 😉`);
let s1 = (son * 2);
let s2 = (s1 + 12);
let s3 = (s2  / 2);
let s4 = (s3 - son);
console.log(s1,s2,s3,s4);
   
alert(`2-o'yin: Telefon raqamingizni topaman`);
let tel = +prompt(`Telefon Raqamingizni birinchi 3ta sonini 80ga ko'paytiring`);
alert(`Chiqgan javopga 1 ni qo'shing`);
alert(`Hosil bol'gan songa 250 ni ko'paytiring`);
let tel1 = +prompt(`Hosil bo'lgan songa ohirgi 4ta raqamni qo'shing`);
alert(`Huddi shu ishni yana qaytaring`); 
alert(`Chiqgan sondan 250 ni ayiring`);
alert(`Hosil bo'lgan sonnni 2 ga bo'ling`);
alert(`Telefon Raqamingiz: ${tel} ${tel1} (Agar sizda bunday chiqmagan bo'lsa qayerdadir noto'g'ri ish qilgansiz😉)`)

//Kiritgan nomerlani qoyiq qoygan dib o`ylamela rostan kalkulatorda ishlasela chiqadi prosta man qisqartirdim

function myRandom(arg1) {
    return Math.round(Math.random() * arg1)
}
let amout = +prompt(`3-o'yin: Qancha misol yechasiz ?`)

for (let i = 0; i < amout; i++) {
    let rand1 = myRandom(30)
    let rand2 = myRandom(30)
    let sym = myRandom(3)
    let com;
    if (sym == 0) {
        sym = '+'
        com = rand1 + rand2
    } else if (sym == 1) {
        sym = '-'
        com = rand1 - rand2
    } else if(sym == 2){
           sym = '*'
    com = rand1 * rand2
    } else if (sym == 3) {
        sym = '/'
        com = rand1 / rand2
    } 
    let ans = +prompt(`${rand1} ${sym} ${rand2} = ?`)
    alert (ans == com ? `Javopingiz to'gri ${com}` : `Noto'g'ri javop kiritingiz ${ans}. To'g'ri javop ${com}`) 
}


alert(`4-o'yin: Hozir kampyuter 1 ta son o'ylaydi siz esa uni topasiz 6ta imkoniyatingiz bor.`)
function myWork(arg1) {
    return Math.round(Math.random() * arg1)
}
let com = myWork(100)

for (let i = 6; i > 0; i--) {
    let user = +prompt(`1 dan 100 gacha sonni toping. Sizda ${i} ta imkoniyat bor`)
    console.log(i);
    while (user < 0 || user > 100 || isNaN(user)) {
        user = +prompt(`1 dan 100 gacha sonni toping. Sizda ${i} ta imkoniyat bor`)
    }
    if (user == com ) {

        alert('Yutdingiz!!! 🎉✨🎊🎉🎊🎉')

        break;

    }else if(i == 1){

        alert("Bopladiz 😂")

    }else if(user - com <= 3 && user - com >= -3){

        alert("juda yaqinsiz yaqinsiz)")

    }else if(user - com <= 10 && user - com >= -10){

        alert("yaqinsiz)")

    }else if(user - com <= 30 && user - com >= -30){

        alert("ko'proq yaqinsiz)")

    }else if(user - com <= 50 && user - com >= -50){

        alert("yaqinroqsiz azgina)")

    }else{

        alert("Yana urinib ko'ring ☹" )

    }
}