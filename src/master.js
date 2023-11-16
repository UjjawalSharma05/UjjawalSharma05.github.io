function menuToggle()
{
    if(document.getElementById("link-menu").classList.contains('enable'))
    {
        document.getElementById("link-menu").classList.remove('enable');
    }
    else
    {
        document.getElementById("link-menu").classList.add('enable');
    }
}