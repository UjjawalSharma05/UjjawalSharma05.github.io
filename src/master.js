function menuToggle() //menuToggle function to be called when menu button is clicked
{
    if(document.getElementById("link-menu").classList.contains('enable')) //if links menu is open
    {
        document.getElementById("link-menu").classList.remove('enable'); //close links menu
        document.getElementById("btn").classList.remove('enable'); //remove the highlight from the button
        document.getElementById("icon").innerHTML ="menu"; //change the close icon to menu icon
    }
    else
    {
        document.getElementById("link-menu").classList.add('enable'); //open links menu
        document.getElementById("btn").classList.add('enable'); //add highlight to the button
        document.getElementById("icon").innerHTML ="close"; //change the menu icon to close icon
    }
}