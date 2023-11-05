const cl = console.log;

const header = [...document.querySelectorAll('.card-header')];

const onClickhead = eve => {
    let getclass = eve.target.className;
    cl(getclass);
    header.forEach(ele => {
        ele.classList.remove('active')
        ele.children[0].classList.remove('fa-caret-up')
        ele.children[0].classList.add('fa-caret-down');
    })
     if(getclass.indexOf('active') > -1){
        eve.target.classList.remove('active');
        eve.target.children[0].classList.remove('fa-caret-up');
        eve.target.children[0].classList.add('fa-caret-down');
     }else{
        eve.target.classList.add('active');
        eve.target.children[0].classList.remove('fa-caret-down');
        eve.target.children[0].classList.add('fa-caret-up');
    }
}


header.forEach(eve => eve.addEventListener('click', onClickhead));
// header.forEach(eve => eve.addEventListener('mouseover', onClickhead)) doesn't target child elements
// header.forEach(eve => eve.addEventListener('mouseout', onClickhead))
// header.forEach(eve => eve.addEventListener('mouseenter', onClickhead)) target child elements
// header.forEach(eve => eve.addEventListener('mouseleave', onClickhead))


