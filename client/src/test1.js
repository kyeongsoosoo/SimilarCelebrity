const tst = document.querySelector('.test');

tst.src = "https://search.pstatic.net/sunny/?src=https://i.pinimg.com/originals/82/fb/e6/82fbe654abf8dd231cbcbf3e02e581f8.jpg&type=b150"

async function test(){
    let promise = await fetch("http://localhost:8000/",{
    headers: {
        'Access-Control-Allow-Origin': true,
    }

    
});
    // const data = await promise.json();
    // console.log(data);
    console.log(promise)
}

test();