setInterval(() => {
    let date= new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    hr = 30*h + m/2;
    mr = 6*m; 
    sr = 6*s;
    hour.style.transform = `rotate(${hr}deg)`
    minute.style.transform = `rotate(${mr}deg)`
    second.style.transform = `rotate(${sr}deg)`
}, 5);