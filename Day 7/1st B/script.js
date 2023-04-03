// Get all the countries with a population of less than 2 lakhs using Filter function

const request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload=function(){ 
    if (request.status==200)
{
    let pop=JSON.parse(request.responseText)
    pop.filter((s)=>(s.population<200000)).map((e)=>{
    console.log(e.population, e.name.official); 
})
}
    else   
{ 
    request.onerror=function()
{
    console.log("site is error")
}}}