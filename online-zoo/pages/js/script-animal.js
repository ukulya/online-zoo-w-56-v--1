const dots = document.querySelector('.owl-dots');
const btnFavorite = document.querySelector('.btn-favorite');

btnFavorite.addEventListener('click',function (){
    this.classList.toggle('active');
})

dots.addEventListener('click',function (e){
    let target = e.target;
    let dot = target.parentElement;
    console.log(target);
    console.log(dot);
    console.log(dot.classList);
    if (dot.classList.contains('camera-1')){
        document.querySelectorAll('iframe').forEach(item => {
            item.classList.remove('active')
        });
        document.getElementById('camera-1').classList.add('active');
    } else if (dot.classList.contains('camera-2')){
        document.querySelectorAll('iframe').forEach(item => {
            item.classList.remove('active')
        });
        document.getElementById('camera-2').classList.add('active');
    } else if (dot.classList.contains('camera-3')){
        document.querySelectorAll('iframe').forEach(item => {
            item.classList.remove('active')
        });
        document.getElementById('camera-3').classList.add('active');
    }
})