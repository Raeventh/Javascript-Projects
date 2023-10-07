let Number1= Math.floor(1+(Math.random() * 6));
let Number2=Math.floor(1+(Math.random() * 6));
let image1="./dice"+Number1+".png";
let image2="./dice"+Number2+".png";
document.querySelectorAll("img")[0].setAttribute("src",image1);
document.querySelectorAll("img")[1].setAttribute("src",image2);

if(Number1 > Number2)
{
    document.querySelector("h1").textContent="Player 1 Won🚩";
}
else if(Number1 < Number2)
{
    document.querySelector("h1").textContent="Player 2 Won🚩";
}
else{
    document.querySelector("h1").textContent="Draw ☺️";
}