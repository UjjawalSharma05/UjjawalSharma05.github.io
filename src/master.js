function menuToggle()
{
    if(document.getElementById("link-menu").classList.contains('enable'))
    {
        document.getElementById("link-menu").classList.remove('enable');
        document.getElementById("btn").classList.remove('enable');
        document.getElementById("icon").innerHTML ="menu";
    }
    else
    {
        document.getElementById("link-menu").classList.add('enable');
        document.getElementById("btn").classList.add('enable');
        document.getElementById("icon").innerHTML ="close";
    }
}