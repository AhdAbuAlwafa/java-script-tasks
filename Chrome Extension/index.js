let myLeads=[]
const inputEL=document.getElementById("input-el")
let inputBtn =document.getElementById("input-btn")
const ulEL=document.getElementById("ul-el")
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))

const deleteBtn =document.getElementById("delete-btn")
const tabBtn =document.getElementById("tab-btn")

if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render( myLeads)
}


const tabs =[
    {url:"https://www.linkedin.com/in/%D8%B9%D9%87%D8%AF-%D8%A7%D8%A8%D9%88-%D8%A7%D9%84%D9%88%D9%81%D8%A7-b40b3b23b/"}]

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
        
    })
    
})

function render() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEL.innerHTML = listItems  
}







deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    render( myLeads)
})



inputBtn.addEventListener("click",function(){
    myLeads.push(inputEL.value)
    inputEL.value=""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render( myLeads)
    
})
