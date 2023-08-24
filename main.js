let a= document.getElementById('tgglbtn')

let b = document.getElementById('text')
b.textContent=''
a.addEventListener('click',()=>{
    b.classList.toggle('mytogle')
  
if(b.textContent===''){
    b.textContent='Hello World'
}else{
    b.textContent=''
}



})

let c=document.getElementsByClassName('this')
console.log(c)