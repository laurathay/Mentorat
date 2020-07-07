// function handleScroll() {
//   let scrollFromTop = window.pageYOffset || document.documentElement.scrollTop;
//   if (scrollFromTop > scrollPosition) {
//     window.removeEventListener("scroll", handleScroll)
//     window.scrollTo({
//       top:1006,
//       behavior: 'smooth',
//     });
//   }
//
//     console.log("scroolll", scrollFromTop);
// }
// window.addEventListener('scroll', handleScroll);
//
//
//
//
//
// let scrollPosition = 0 ;


console.log('hello')


var body = document.body,
html = document.documentElement;

const height = body.scrollHeight;
console.log(height);

let etape = 1

let lastScrollTop = 0;
function handleScroll() {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    console.log(st);
    if (st > lastScrollTop && etape == 1){
      etape = 2
    /*  window.removeEventListener("scroll", handleScroll)*/
       window.scrollTo({
        top: height/3,
        left: 0,
        behavior: 'smooth'
      })
    }else if (st < lastScrollTop && etape == 2){
      etape = 1
        window.scrollTo({
         top: 0,
         left: 0,
         behavior: 'smooth'
       })
    }else if (st < lastScrollTop && etape == 3){ //j'ai rajouté cette partie mais pas sûre
      etape = 3
      window.scrollTo({
        top: 1100,
        left: 0,
        behavior:'smooth'
      })
    } else {
        console.log('up');
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

}

window.addEventListener('scroll', handleScroll);


//rajouter une 3eme etape
