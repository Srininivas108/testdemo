//step1: create a XHR object 
var request=new XMLHttpRequest();
//step2: creating a connection
//HTTP method: GET
//API url
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
//step3: sending a connection
request.send();
//step4: data successfully load(onload) convert return string type to object(JSON)
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    for(i=0;i<data.length;i++){
        console.log(`country: ${data[i].name} flag: ${data[i].flag}`);
    }
}
//print details