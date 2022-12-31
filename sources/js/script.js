
var FirstNumber = null;
var SecondNumber = null;
var newNumber = false;
var Sign = null;

function ClearAll()
{
    FirstNumber = null;
    SecondNumber = null;
    newNumber = false;
    Sign = null;
    document.getElementsByTagName("p")['0'].textContent = "0";
}

function AddNumber(Number)
{
    if(99999999 <= parseInt(document.getElementsByTagName("p")['0'].textContent + Number.textContent))
    {
        return;
    }
    if(newNumber == true)
    {
        newNumber = false;
        document.getElementsByTagName("p")['0'].textContent = Number.textContent;
        return;
    }
    var calcScreen = document.getElementsByTagName("p")['0'].textContent;
    if(calcScreen === "0" && Number.textContent != "0")
    {
        document.getElementsByTagName("p")['0'].textContent = Number.textContent;
    }
    else if(calcScreen != "0")
    {
        calcScreen += Number.textContent;
        document.getElementsByTagName("p")['0'].textContent = calcScreen;
    }
}

function Signs(CurSign) 
{
    Sign = CurSign.textContent;
    if(FirstNumber == null)
    {
        FirstNumber = parseInt(document.getElementsByTagName("p")['0'].textContent);
        document.getElementsByTagName("p")['0'].textContent = '0';
        newNumber = true;
    }
    else if(FirstNumber != null && SecondNumber == null)
    {
        SecondNumber = parseInt(document.getElementsByTagName("p")['0'].textContent);
    }
    else if(FirstNumber != null && SecondNumber != null)
    {
        Meaning();
        FirstNumber = parseInt(document.getElementsByTagName("p")['0'].textContent);
        SecondNumber = null;
    }
}

function Meaning()
{
   
    SecondNumber = parseInt(document.getElementsByTagName("p")['0'].textContent);

    if(FirstNumber == null && SecondNumber == null && Sign == null)
    {
        FirstNumber = parseInt(document.getElementsByTagName("p")['0'].textContent)
    }
    
    switch (Sign)
    {
        case "+": 
        var resultp 
        resultp = FirstNumber + SecondNumber;
        resultp = String(resultp);
        console.log(resultp);
        document.getElementsByTagName("p")['0'].textContent = resultp;
        FirstNumber = parseInt(resultp);
        resultp = 0;
        break;

        case "-": 
        var resultm;
        resultm = FirstNumber - SecondNumber;
        resultm = String(resultm);
        console.log(resultm);
        document.getElementsByTagName("p")['0'].textContent = resultm;
        FirstNumber = parseInt(resultm);
        resultm = 0;
        break;

        case "x":
        var resultx
        resultx = FirstNumber * SecondNumber;
        resultx = String(resultx);
        console.log(resultx);
        document.getElementsByTagName("p")['0'].textContent = resultx;
        FirstNumber = parseInt(resultx);
        resultx = 0;
        break;

        case "/":
        var resultd;
        resultd = FirstNumber / SecondNumber;
        resultd = Math.round(resultd);
        resultd = String(resultd);
        console.log(resultd);
        document.getElementsByTagName("p")['0'].textContent = resultd;
        FirstNumber = parseInt(resultd);
        resultd = 0;
        break;

        default:
        break;
    }
    SecondNumber = null;
    Sign = null;
    newNumber = true;
}

function MinusPlus() 
{
    if(parseInt(document.getElementsByTagName("p")['0'].textContent) > 0)
    {
        document.getElementsByTagName("p")['0'].textContent = "-" + document.getElementsByTagName("p")['0'].textContent;
    }
    else if(parseInt(document.getElementsByTagName("p")['0'].textContent) < 0)
    {
        console.log("k");
        document.getElementsByTagName("p")['0'].textContent = document.getElementsByTagName("p")['0'].textContent.replace(['-'], "");
    }
}

function procent() 
{
    var result = parseInt(document.getElementsByTagName("p")['0'].textContent) / 100;  
    document.getElementsByTagName("p")['0'].textContent = String(result);
}