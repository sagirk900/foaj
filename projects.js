document.addEventListener("DOMContentLoaded", function () {
    let currentDir = localStorage.getItem("direction");
    document.body.setAttribute('dir', currentDir);

    var com = document.querySelector('#communication');
    var grp = document.querySelector('#group');
    var prj = document.querySelector('#project');
    var regi = document.querySelector('#regiment');

    var smallfoaj = document.querySelector('#smallfoaj');
    var smallpro = document.querySelector('#smallpro');
    var smallcomp = document.querySelector('#smallcomp');
    var smallcont = document.querySelector('#smallcont'); 


    var projecttoph1 = document.querySelector('.projectcontenttopleftheading h1');
    var projecttoph5 = document.querySelector('.projectcontenttoplefttitle h5');
    var projecttoppar = document.querySelector('.projectcontenttopleftcontent p');

    var projectbottomh1 = document.querySelector('.projectcontentbottomleftheading h1');
    var projectbottomh5 = document.querySelector('.projectcontentbottomlefttitle h5');
    var projectbottompar = document.querySelector('.projectcontentbottomleftcontent p');



    var tooglebuttonfooter = document.querySelector('.footercpyrighttopright #toggleDirections');
    var footfoaj = document.querySelector("#footfoaj");
    var footproj = document.querySelector("#footproj");
    var footcomp = document.querySelector("#footcomp");
    var footcont = document.querySelector("#footcont");
   
    var currDir = document.body.getAttribute('dir');
    if(currDir=="rtl")
    {
        tooglebuttonfooter.textContent="EN";
            com.textContent="فوج";
            grp.textContent="المشاريع";
            prj.textContent="الشركات";
            regi.textContent="التواصل";

            smallfoaj.textContent="فوج";
            smallpro.textContent="المشاريع";
            smallcomp.textContent="الشركات";
            smallcont.textContent="التواصل";

            projecttoph1.textContent="السعودية نحو الفضاء";
            projecttoph5.textContent="وكالة الفضاء السعودية";
            projecttoppar.textContent="بطموح يتخطّى حدود الأرض انطلقت اﻟﻤملكة نحو الفضاء، باستراتيجية شاملة وحملات اتصالية على اﻟﻤستويين اﻟﻤحلّي والدولي.";

            projectbottomh1.textContent="العطاء بإحســان";
            projectbottomh5.textContent="منصة إحسان للعمل الخيري";
            projectbottompar.textContent="في الحملة الوطنية للعمل الخيري من كل عام، تتعدّد أوجه الخير وتزخر فرص العطاء، لكن يبقى العطاء بإحسان هو الأصل الثابت الذي يسعى اﻟﻤحسنون لتحقيقه";

            footfoaj.textContent="فوج";
            footproj.textContent="المشاريع";
            footcomp.textContent="الشركات";
            footcont.textContent="التواصل";
    }
    else
    {
        tooglebuttonfooter.textContent="AR"
        com.textContent="Foaj";
        grp.textContent="Projects";
        prj.textContent="Companies";
        regi.textContent="Contact";

        smallfoaj.textContent="Foaj";
        smallpro.textContent="Projects";
        smallcomp.textContent="Companies";
        smallcont.textContent="Contact";
        
        projecttoph1.textContent="Saudi Towards Space";
        projecttoph5.textContent="Saudi Space Agency";
        projecttoppar.textContent="With ambitions beyond the Earth, the Kingdom launched a space mission with comprehensive strategic campaigns at local and international levels.";

        projectbottomh1.textContent="Giving with Ehsan";
        projectbottomh5.textContent="Ehsan Charity Platform";
        projectbottompar.textContent="In the annual National charity campaign, giving takes on many forms that all share a common goal of making lives better.";

        footfoaj.textContent="Foaj";
        footproj.textContent="Projects";
        footcomp.textContent="Companies";
        footcont.textContent="Contact";
    }
});

function Direction() {
    var com = document.querySelector('#communication');
    var grp = document.querySelector('#group');
    var prj = document.querySelector('#project');
    var regi = document.querySelector('#regiment');

    var smallfoaj = document.querySelector('#smallfoaj');
    var smallpro = document.querySelector('#smallpro');
    var smallcomp = document.querySelector('#smallcomp');
    var smallcont = document.querySelector('#smallcont'); 


    var projecttoph1 = document.querySelector('.projectcontenttopleftheading h1');
    var projecttoph5 = document.querySelector('.projectcontenttoplefttitle h5');
    var projecttoppar = document.querySelector('.projectcontenttopleftcontent p');

    var projectbottomh1 = document.querySelector('.projectcontentbottomleftheading h1');
    var projectbottomh5 = document.querySelector('.projectcontentbottomlefttitle h5');
    var projectbottompar = document.querySelector('.projectcontentbottomleftcontent p');



    var tooglebuttonfooter = document.querySelector('.footercpyrighttopright #toggleDirections');
    var footfoaj = document.querySelector("#footfoaj");
    var footproj = document.querySelector("#footproj");
    var footcomp = document.querySelector("#footcomp");
    var footcont = document.querySelector("#footcont");

    tooglebuttonfooter.addEventListener('click',function() {
        var currentDir = document.body.getAttribute('dir');
        if (currentDir === 'ltr') 
        {
            document.body.setAttribute('dir', 'rtl');
            tooglebuttonfooter.textContent="EN";
            com.textContent="فوج";
            grp.textContent="المشاريع";
            prj.textContent="الشركات";
            regi.textContent="التواصل";

            smallfoaj.textContent="فوج";
            smallpro.textContent="المشاريع";
            smallcomp.textContent="الشركات";
            smallcont.textContent="التواصل";

            projecttoph1.textContent="السعودية نحو الفضاء";
            projecttoph5.textContent="وكالة الفضاء السعودية";
            projecttoppar.textContent="بطموح يتخطّى حدود الأرض انطلقت اﻟﻤملكة نحو الفضاء، باستراتيجية شاملة وحملات اتصالية على اﻟﻤستويين اﻟﻤحلّي والدولي.";

            projectbottomh1.textContent="العطاء بإحســان";
            projectbottomh5.textContent="منصة إحسان للعمل الخيري";
            projectbottompar.textContent="في الحملة الوطنية للعمل الخيري من كل عام، تتعدّد أوجه الخير وتزخر فرص العطاء، لكن يبقى العطاء بإحسان هو الأصل الثابت الذي يسعى اﻟﻤحسنون لتحقيقه";

            footfoaj.textContent="فوج";
            footproj.textContent="المشاريع";
            footcomp.textContent="الشركات";
            footcont.textContent="التواصل";
        }
        else 
        {
            document.body.setAttribute('dir', 'ltr'); 
            tooglebuttonfooter.textContent="AR"
            com.textContent="Foaj";
            grp.textContent="Projects";
            prj.textContent="Companies";
            regi.textContent="Contact";

            smallfoaj.textContent="Foaj";
            smallpro.textContent="Projects";
            smallcomp.textContent="Companies";
            smallcont.textContent="Contact";
            
            projecttoph1.textContent="Saudi Towards Space";
            projecttoph5.textContent="Saudi Space Agency";
            projecttoppar.textContent="With ambitions beyond the Earth, the Kingdom launched a space mission with comprehensive strategic campaigns at local and international levels.";

            projectbottomh1.textContent="Giving with Ehsan";
            projectbottomh5.textContent="Ehsan Charity Platform";
            projectbottompar.textContent="In the annual National charity campaign, giving takes on many forms that all share a common goal of making lives better.";

            footfoaj.textContent="Foaj";
            footproj.textContent="Projects";
            footcomp.textContent="Companies";
            footcont.textContent="Contact";
        }
        
    });
}
Direction()

function setdirontoggle()
{
    var tooglebuttonfooter = document.querySelector('.footercpyrighttopright #toggleDirections');
    tooglebuttonfooter.addEventListener('click',()=>{
        let currentDir = document.body.getAttribute('dir');
        localStorage.setItem("direction", currentDir);
    });
}
setdirontoggle();

function OpenMenu() 
{
var menubars = document.querySelector(".hamburgers i");
menubars.addEventListener("click",function(){
    var smallmenu = document.querySelector(".smalldevicemenu");
    var menudata = document.querySelectorAll(".smalldevicemenu a")
    if (menubars.classList.contains("fa-bars") ) {
        menubars.classList.remove("fa-bars"); 
        menubars.classList.add("fa-xmark"); 
        smallmenu.style.opacity="1";
        smallmenu.style.width="100%";
        smallmenu.style.height="100%";
        menudata.forEach((ele)=>{
            ele.style.display="block";
        })
    } 
    else if(menubars.classList.contains("fa-xmark"))
    {
        menubars.classList.add("fa-bars"); 
        menubars.classList.remove("fa-xmark");
        smallmenu.style.opacity="0";
        smallmenu.style.width="0%";
        smallmenu.style.height="0%";
        menudata.forEach((ele)=>{
            ele.style.display="none";
        })
    }
})

}
OpenMenu();

function Indexpage()
{
    var selectelement = document.querySelectorAll(".menuleftcontent p");
    selectelement.forEach((ele)=>{
        ele.style.cursor = "pointer"; // Make cursor a pointer
            ele.addEventListener("click", () => {
                window.location.href = "index.html"; // Redirect on click
            });
    })
}
Indexpage();

function footerlogoredirect()
{
    var fooimg = document.querySelector(".footerlogo img");
    fooimg.style.cursor = "pointer";
    fooimg.addEventListener("click",()=>{
        window.location.href="index.html";
    })
}
footerlogoredirect();