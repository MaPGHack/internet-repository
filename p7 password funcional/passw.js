function generatechars(){
    let id1=document.getElementById("id1").value;
    console.log(id1);
    let id2=document.getElementById("id2").checked;
    console.log(id2);
    let id3=document.getElementById("id3").checked;
    console.log(id3);
    let id4=document.getElementById("id4").checked;
    console.log(id4);
    let id5=document.getElementById("id5").checked;
    console.log(id5);
    //lists and vars
    let listn = ["0","1","2","3","4","5","6","7","8","9"];
    let listm = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let listy = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let listce = ["@","#","¬","!","·","%","&","=","?","¡"];
    let rc;
    let i;
    //code
    console.time();
    //id1 check
    if(id1<10000&&id1>0)
    {
        for(i=0; i<id1; i++){
            let var_ao = (getRandomArbitrary(-1,4));
            console.log("conditional generator"+var_ao);
            for(let j=0; j<50; j++){
                if(id2==false&&var_ao==2)
                {
                    var_ao = (getRandomArbitrary(-1,4));
                }
                else if(id3==false&&var_ao==1)
                {
                    var_ao = (getRandomArbitrary(-1,4));
                }
                else if(id4==false&&var_ao==0)
                {
                    var_ao = (getRandomArbitrary(-1,4));
                }
                else if(id5==false&&var_ao==3)
                {
                    var_ao = (getRandomArbitrary(-1,4));
                }
                else
                {
                    continue
                }
            }
            //Random lists
            let var_lo1 = (getRandomArbitrary(-1,10));
            console.log("list1"+var_lo1);
            let var_lo2 = (getRandomArbitrary(-1,25));
            console.log("list2"+var_lo2);
            //checkers of randoms
            if(var_ao == 0){
                //Numbers
                rc = listn[var_lo1];
                console.log("c1");
            }
            else if(var_ao == 1){
                //Lowercase
                rc = listm[var_lo2];
                console.log("c2");
            }
            else if(var_ao == 2){
                //Capital letters
                rc = listy[var_lo2];
                console.log("c3");
            }
            else if(var_ao == 3){
                //especial characters
                rc = listce[var_lo1];
                console.log("c4");
            }
            else{
                console.log("Conditional not processed");
            }
            //print
            var res = document.getElementById("result");
            var h1 = document.createElement("h1");
            h1.innerHTML = rc;
            res.appendChild(h1);
            h1.setAttribute('id','eliminate');
        }
    }
    else
    {
        //error print
        var res1 = document.getElementById("result");
        var h2 = document.createElement("h2");
        h2.innerHTML = "Error";
        res1.appendChild(h2);
        h2.setAttribute('id','eliminate');
    }
    //hr creator
    var hr = document.createElement("hr");
    hr.setAttribute('id','eliminate');
    result.appendChild(hr); 
    console.timeEnd();
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - (min+1)));
  }

function remove(id) 
{
var element = document.getElementById(id);
return element.parentNode.removeChild(element);
}
  
function link()
{
    let n=document.getElementById("id1").value;
    for (let i=0;i<n;n++) {
        remove("eliminate");
    }
}