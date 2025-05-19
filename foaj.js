
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

    var foajabouth3 = document.querySelector(".foajaboutleftcontenttop h3");
    var foajaboutp = document.querySelector(".foajaboutleftcontentbottom p");

    var foajcountfirst = document.querySelectorAll(".foajcountcontent1bottom div");
    var foajcountsecond = document.querySelectorAll(".foajcountcontent2bottom div");
    var foajcountthird = document.querySelector(".foajcountcontent3bottom div");
    var foajcountfour = document.querySelector(".foajcountcontent4bottom div");

    let heading1 = document.querySelector(".foajdatasectiontoprow1content h1");
    let heading2 = document.querySelector(".foajdatasectiontoprow2content h1");
    let heading3 = document.querySelector(".foajdatasectiontoprow3content h1");
    let heading4 = document.querySelector(".foajdatasectiontoprow4content h1");
    let databottom = document.querySelector(".foajdatasectionbottomcontent p");


    
    var tooglebuttonfooter = document.querySelector('.footercpyrighttopright #toggleDirections');
    var footfoaj = document.querySelector("#footfoaj");
    var footproj = document.querySelector("#footproj");
    var footcomp = document.querySelector("#footcomp");
    var footcont = document.querySelector("#footcont");
    var currDir = document.body.getAttribute('dir');
    if(currDir=="rtl")
    {
        tooglebuttonfooter.textContent="EN"
            com.textContent="فوج";
            grp.textContent="المشاريع";
            prj.textContent="شركات";
            regi.textContent="اتصال";

            smallfoaj.textContent="فوج";
            smallpro.textContent="المشاريع";
            smallcomp.textContent="شركات";
            smallcont.textContent="اتصال";

            foajabouth3.textContent=`الاتحــاد التســـــويقي
            الأضــخم في المنطقة`;
            foajaboutp.textContent="أول وأكبر اتحاد لشركات الاتصال والتسويق الرائدة على مســـتوى المنطقة، في منظومة اتـصالّية متكاملة تجمع بين قوة التواصل والتخطيط والإبداع.";


            foajcountfirst.forEach((ele,index)=>{
                if(index===0)
                {
                    ele.textContent="السوق"
                }
                else if(index===1)
                {
                    ele.textContent="الشركات"
                }
                else if(index===2)
                {
                    ele.textContent="الرائدة"
                }
            });
            foajcountsecond.forEach((ele,index)=>{
                if(index===0)
                {
                    ele.textContent="الشراكات"
                }
                else if(index===1)
                {
                    ele.textContent="الاستراتيجية"
                }
            });
            foajcountthird.textContent="المهنيين";
            foajcountfour.textContent="المشاريع";


            heading1.innerHTML=`<span>01/</span> وجهة واحدة لإدارة محفظة المشروع`;
            heading2.innerHTML=`<span>02/</span> خبرة استشارية واستراتيجية في قيادة المشاريع الكبرى`;
            heading3.innerHTML=`<span>03/</span> سـجل غنـي بالنجاحات والإنجــازات`;
            heading4.innerHTML=`<span>04/</span> قيــادات وطنّية ذات خــبرة وكـفاءة`;
            databottom.textContent="إدارة المشاريع الكبرى وبناء استراتيجيات اتصالية متكاملة تتغلب على التحديات التي تواجهها، وتنفيذها عبر شــــركات اﻟﻤجموعة، لتحقيق الأهـــداف الاســتراتيجية وإحداث التأثير على الصعيدين المحلّي والدولي."

            footfoaj.textContent="فوج";
            footproj.textContent="المشاريع";
            footcomp.textContent="شركات";
            footcont.textContent="اتصال"; 
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
            
            foajabouth3.textContent="The Largest Communication Alliance in the Region";
            foajaboutp.textContent="The first and largest alliance of communication and marketing companies in the region creating an integrated ecosystem that merges communication, planning, and creativity.";

            foajcountfirst.forEach((ele,index)=>{
                if(index===0)
                {
                    ele.textContent="market"
                }
                else if(index===1)
                {
                    ele.textContent="Leading"
                }
                else if(index===2)
                {
                    ele.textContent="Companies"
                }
            });
            foajcountsecond.forEach((ele,index)=>{
                if(index===0)
                {
                    ele.textContent="Strategic"
                }
                else if(index===1)
                {
                    ele.textContent="Partnerships"
                }
            });
            foajcountthird.textContent="Professionals";
            foajcountfour.textContent="Projects";
            
            heading1.innerHTML=`<span>01/</span> One destination for managing project portfolios.`;
            heading2.innerHTML=`<span>02/</span> Consultation and strategy experience in leading major projects.`;
            heading3.innerHTML=`<span>03/</span> Established track record of successes.`;
            heading4.innerHTML=`<span>04/</span> Market leading local expertise and competencies.`;
            databottom.textContent="Managing mega projects and building integrated communication strategies that are executed by group companies and strategic partners to overcome challenges and achieve goals to create impact on local and international scales"




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

    var foajabouth3 = document.querySelector(".foajaboutleftcontenttop h3");
    var foajaboutp = document.querySelector(".foajaboutleftcontentbottom p");

    var foajcountfirst = document.querySelectorAll(".foajcountcontent1bottom div");
    var foajcountsecond = document.querySelectorAll(".foajcountcontent2bottom div");
    var foajcountthird = document.querySelector(".foajcountcontent3bottom div");
    var foajcountfour = document.querySelector(".foajcountcontent4bottom div");

    let heading1 = document.querySelector(".foajdatasectiontoprow1content h1");
    let heading2 = document.querySelector(".foajdatasectiontoprow2content h1");
    let heading3 = document.querySelector(".foajdatasectiontoprow3content h1");
    let heading4 = document.querySelector(".foajdatasectiontoprow4content h1");
    let databottom = document.querySelector(".foajdatasectionbottomcontent p");


    
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
            tooglebuttonfooter.textContent="EN"
            com.textContent="فوج";
            grp.textContent="المشاريع";
            prj.textContent="شركات";
            regi.textContent="اتصال";

            smallfoaj.textContent="فوج";
            smallpro.textContent="المشاريع";
            smallcomp.textContent="شركات";
            smallcont.textContent="اتصال";

            foajabouth3.textContent=`الاتحــاد التســـــويقي
            الأضــخم في المنطقة`;
            foajaboutp.textContent="أول وأكبر اتحاد لشركات الاتصال والتسويق الرائدة على مســـتوى المنطقة، في منظومة اتـصالّية متكاملة تجمع بين قوة التواصل والتخطيط والإبداع.";


            foajcountfirst.forEach((ele,index)=>{
                if(index===0)
                {
                    ele.textContent="السوق"
                }
                else if(index===1)
                {
                    ele.textContent="الشركات"
                }
                else if(index===2)
                {
                    ele.textContent="الرائدة"
                }
            });
            foajcountsecond.forEach((ele,index)=>{
                if(index===0)
                {
                    ele.textContent="الشراكات"
                }
                else if(index===1)
                {
                    ele.textContent="الاستراتيجية"
                }
            });
            foajcountthird.textContent="المهنيين";
            foajcountfour.textContent="المشاريع";


            heading1.innerHTML=`<span>01/</span> وجهة واحدة لإدارة محفظة المشروع`;
            heading2.innerHTML=`<span>02/</span> خبرة استشارية واستراتيجية في قيادة المشاريع الكبرى`;
            heading3.innerHTML=`<span>03/</span> سـجل غنـي بالنجاحات والإنجــازات`;
            heading4.innerHTML=`<span>04/</span> قيــادات وطنّية ذات خــبرة وكـفاءة`;
            databottom.textContent="إدارة المشاريع الكبرى وبناء استراتيجيات اتصالية متكاملة تتغلب على التحديات التي تواجهها، وتنفيذها عبر شــــركات اﻟﻤجموعة، لتحقيق الأهـــداف الاســتراتيجية وإحداث التأثير على الصعيدين المحلّي والدولي."

            footfoaj.textContent="فوج";
            footproj.textContent="المشاريع";
            footcomp.textContent="شركات";
            footcont.textContent="اتصال";
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
            
            foajabouth3.textContent="The Largest Communication Alliance in the Region";
            foajaboutp.textContent="The first and largest alliance of communication and marketing companies in the region creating an integrated ecosystem that merges communication, planning, and creativity.";

            foajcountfirst.forEach((ele,index)=>{
                if(index===0)
                {
                    ele.textContent="market"
                }
                else if(index===1)
                {
                    ele.textContent="Leading"
                }
                else if(index===2)
                {
                    ele.textContent="Companies"
                }
            });
            foajcountsecond.forEach((ele,index)=>{
                if(index===0)
                {
                    ele.textContent="Strategic"
                }
                else if(index===1)
                {
                    ele.textContent="Partnerships"
                }
            });
            foajcountthird.textContent="Professionals";
            foajcountfour.textContent="Projects";
            
            heading1.innerHTML=`<span>01/</span> One destination for managing project portfolios.`;
            heading2.innerHTML=`<span>02/</span> Consultation and strategy experience in leading major projects.`;
            heading3.innerHTML=`<span>03/</span> Established track record of successes.`;
            heading4.innerHTML=`<span>04/</span> Market leading local expertise and competencies.`;
            databottom.textContent="Managing mega projects and building integrated communication strategies that are executed by group companies and strategic partners to overcome challenges and achieve goals to create impact on local and international scales"




            footfoaj.textContent="Foaj";
            footproj.textContent="Projects";
            footcomp.textContent="Companies";
            footcont.textContent="Contact";
        }
        
    });


}
Direction();

function setdirontoggle()
{
    var tooglebuttonfooter = document.querySelector('.footercpyrighttopright #toggleDirections');
    tooglebuttonfooter.addEventListener('click',()=>{
        let currentDir = document.body.getAttribute('dir');
        console.log(currentDir);
        
        localStorage.setItem("direction", currentDir);
    });
}
setdirontoggle();


function OpenMenu() 
{
var menubars = document.querySelector(".hamburgers i");
menubars.addEventListener("click",function(){
    var smallmenu = document.querySelector(".smalldevicemenu");
    if (menubars.classList.contains("fa-bars") ) {
        menubars.classList.remove("fa-bars"); 
        menubars.classList.add("fa-xmark"); 
        smallmenu.style.opacity="1"
    } 
    else if(menubars.classList.contains("fa-xmark"))
    {
        menubars.classList.add("fa-bars"); 
        menubars.classList.remove("fa-xmark");
        smallmenu.style.opacity="0"
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

