
secondHand=document.querySelector('.second-hand');
minsHand=document.querySelector('.min-hand');
hrsHand=document.querySelector('.hour-hand');

function setDate(){
    const now=new Date();

    const seconds=now.getSeconds();
    // console.log(seconds);
    const secondsDegree=((seconds/60)*360)+90;
    secondHand.style.transform=`rotate(${secondsDegree}deg)`;

    const minutes=now.getMinutes();
    const minutesDegree=((minutes/60)*360)+90;
    minsHand.style.transform=`rotate(${minutesDegree}deg)`;

    const hours=now.getHours();
    const hoursDegree=((hours/24)*360)+90;
    minsHand.style.transform=`rotate(${hoursDegree}deg)`;
    

}
setInterval(setDate,1000);