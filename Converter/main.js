document.getElementById("kgsInput").addEventListener("input",e=>
{
    let kgs=e.target.value;
    document.getElementById("lbsOutput").innerText=kgs*2.205;
})

document.getElementById("feetInput").addEventListener("input",e=>
{
    let feet=e.target.value;
    document.getElementById("cmsOutput").innerText=feet*30.48;
})

document.getElementById("cmsInput").addEventListener("input",e=>
{
    let cms=e.target.value;
    document.getElementById("msOutput").innerText=cms*0.01;
})

document.getElementById("inchInput").addEventListener("input",e=>
{
    let inch=e.target.value;
    document.getElementById("cmOutput").innerText=inch*2.54;
})