var imagearray=["father.jpg", "mother.jpg", "son.jpg"];
var namearray=["Suju", "Swarna", "Prithvi"];
var i=0;
function update()
{
document.getElementById("fam-img").src=imagearray[i];
document.getElementById("family").innerHTML=namearray[i];
i++;
}