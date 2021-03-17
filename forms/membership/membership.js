
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]


btnOutput.onclick=function(){
  let name = inptUsername.value
  let checkMember = members.includes(name)
  if (checkMember == true) 
  lblName.value = "This user is a member!"
  
else
    
  lblName.push = (name)
  lblName.value = "This user is not a member!"
}

 
