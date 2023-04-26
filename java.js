let container = document.getElementById('btns')
let btn = document.querySelectorAll('.btn')
let list = ["2","3","4","5"]
let index = 0
btn.forEach((button)=>{
    
    button.addEventListener('click',()=>{
       // console.log('clicked')
       if(button.classList.contains('btn_left')){
        //console.log('left_click')
        index--;
        if(index<0){
            index=list.length - 1
        }

        container.style.background=`url('./${list[index]}.jpg')`
        container.style.backgroundRepeat='no-repeat'
        container.style.backgroundPosition='center'
        container.style.backgroundSize='cover'
        console.log(index)
       }else{
        
        index++;
        if (index >list.length - 1){
            index=index - list.length 
        }

        container.style.background=`url('./${list[index]}.jpg')`
        container.style.backgroundRepeat='no-repeat'
        container.style.backgroundPosition='center'
        container.style.backgroundSize='cover'
        console.log(index)
       }
    }

    )
}
)
