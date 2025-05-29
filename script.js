
    document.addEventListener("DOMContentLoaded", function () {
        var currentDir = localStorage.getItem("direction");
        console.log(currentDir);
        document.body.setAttribute('dir', currentDir);  
        
        var toggleButton = document.querySelector('#toggleDirection');
        var banfootp = document.querySelector('.banfooterpara');
    var com = document.querySelector('#communication');
    var grp = document.querySelector('#group');
    var prj = document.querySelector('#project');
    var regi = document.querySelector('#regiment');

    var smallfoaj = document.querySelector('#smallfoaj');
    var smallpro = document.querySelector('#smallpro');
    var smallcomp = document.querySelector('#smallcomp');
    var smallcont = document.querySelector('#smallcont');

    var centerleft = document.querySelector('.centersectioncontentleft h1');
    var centercontent = document.querySelector('.centersectioncontentcenter  p');
    var arrowicon = document.querySelector('.centersectioncontentright a i');
    var brandbottomleftcontent = document.querySelector('.brandlogobottomcontentleft p');
    var brandarrowicon = document.querySelector(".brandlogobottomcontentright a i");
    var mores = document.querySelector('.brandlogobottomcontentright a span');

    var tooglebuttonfooter = document.querySelector('.footercpyrighttopright #toggleDirections');
    var footfoaj = document.querySelector("#footfoaj");
    var footproj = document.querySelector("#footproj");
    var footcomp = document.querySelector("#footcomp");
    var footcont = document.querySelector("#footcont");

    
            if (currentDir === 'rtl') 
            {
                toggleButton.textContent="EN"
                banfootp.textContent="( إطلاق تجريبي )";
                com.textContent="فوج";
                grp.textContent="المشاريع";
                prj.textContent="الشركات";
                regi.textContent="التواصل";
    
                smallfoaj.textContent="فوج";
                smallpro.textContent="المشاريع";
                smallcomp.textContent="الشركات";
                smallcont.textContent="التواصل";
                
                centerleft.textContent="قوة تواصـل الإنسـان";
                centercontent.textContent=`ننطلق من هدف واضح الهوّية يؤمن بقوة خلق الروابط
                بين الإنســـان، وقدرته على إحــداث التغيير وخلق التأثير.`;
                arrowicon.classList.add('fa-arrow-left')
                arrowicon.classList.remove('fa-arrow-right')
                brandarrowicon.classList.add('fa-arrow-left')
                brandarrowicon.classList.remove('fa-arrow-right')
                brandbottomleftcontent.textContent="بقوة الخبرة ومنهجية التخطيط تُصنع التجارب الالتواصلية المختلفة، منظومة متكاملة من 10 شركات في مختلف المجالات، بقيادات وطنّية ذات خبرة و +500 كفاءة.";
                mores.textContent="تعرّف أكثر";
                tooglebuttonfooter.textContent="EN";
                footfoaj.textContent="فوج";
                footproj.textContent="المشاريع";
                footcomp.textContent="الشركات";
                footcont.textContent="التواصل";
            }
            else 
            {
                toggleButton.textContent="AR"
                banfootp.textContent="( Experimental Launch )"
                com.textContent="Foaj";
                grp.textContent="Projects";
                prj.textContent="Companies";
                regi.textContent="Contact";
    
                smallfoaj.textContent="Foaj";
                smallpro.textContent="Projects";
                smallcomp.textContent="Companies";
                smallcont.textContent="Contact";
    
                centerleft.textContent="The Power of Human Connection";
                centercontent.textContent="We believe in the power of creating connections that transform into meaningful impact."
                arrowicon.classList.add('fa-arrow-right');
                arrowicon.classList.remove('fa-arrow-left')
                brandarrowicon.classList.add('fa-arrow-right');
                brandarrowicon.classList.remove('fa-arrow-left');
                brandbottomleftcontent.textContent="Unique communication experiences are crafted with expertise and solid planning. An integrated system of 10 companies in various fields, led by experienced national leaders and +500 competent professionals.";
                mores.textContent="More";
                tooglebuttonfooter.textContent="AR";
                footfoaj.textContent="Foaj";
                footproj.textContent="Projects";
                footcomp.textContent="Companies";
                footcont.textContent="Contact";
            }
    });


function Direction() {
    var toggleButton = document.querySelector('#toggleDirection');
    var banfootp = document.querySelector('.banfooterpara');
    var com = document.querySelector('#communication');
    var grp = document.querySelector('#group');
    var prj = document.querySelector('#project');
    var regi = document.querySelector('#regiment');

    var smallfoaj = document.querySelector('#smallfoaj');
    var smallpro = document.querySelector('#smallpro');
    var smallcomp = document.querySelector('#smallcomp');
    var smallcont = document.querySelector('#smallcont');

    var centerleft = document.querySelector('.centersectioncontentleft h1');
    var centercontent = document.querySelector('.centersectioncontentcenter  p');
    var arrowicon = document.querySelector('.centersectioncontentright a i');
    var brandbottomleftcontent = document.querySelector('.brandlogobottomcontentleft p');
    var brandarrowicon = document.querySelector(".brandlogobottomcontentright a i");
    var mores = document.querySelector('.brandlogobottomcontentright a span');

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
             toggleButton.textContent="EN"
            banfootp.textContent="( إطلاق تجريبي )";
            com.textContent="فوج";
            grp.textContent="المشاريع";
            prj.textContent="الشركات";
            regi.textContent="التواصل";

            smallfoaj.textContent="فوج";
            smallpro.textContent="المشاريع";
            smallcomp.textContent="الشركات";
            smallcont.textContent="التواصل";

            centerleft.textContent="قوة تواصـل الإنسـان";
            centercontent.textContent=`ننطلق من هدف واضح الهوّية يؤمن بقوة خلق الروابط
بين الإنســـان، وقدرته على إحــداث التغيير وخلق التأثير.`;
            arrowicon.classList.add('fa-arrow-left')
            arrowicon.classList.remove('fa-arrow-right')
            brandarrowicon.classList.add('fa-arrow-left')
            brandarrowicon.classList.remove('fa-arrow-right')
            brandbottomleftcontent.textContent="بقوة الخبرة ومنهجية التخطيط تُصنع التجارب الاتصالية المختلفة، منظومة متكاملة من 10 شركات في مختلف المجالات، بقيادات وطنّية ذات خبرة و +500 كفاءة.";
            mores.textContent="تعرّف أكثر";
            footfoaj.textContent="فوج";
            footproj.textContent="المشاريع";
            footcomp.textContent="الشركات";
            footcont.textContent="التواصل";
        }
        else 
        {
            document.body.setAttribute('dir', 'ltr'); 
            tooglebuttonfooter.textContent="AR"
            toggleButton.textContent="AR"
            banfootp.textContent="( Experimental Launch )"
            com.textContent="Foaj";
            grp.textContent="Projects";
            prj.textContent="Companies";
            regi.textContent="Contact";

            smallfoaj.textContent="Foaj";
            smallpro.textContent="Projects";
            smallcomp.textContent="Companies";
            smallcont.textContent="Contact";

            centerleft.textContent="The Power of Human Connection";
            centercontent.textContent="We believe in the power of creating connections that transform into meaningful impact."
            arrowicon.classList.add('fa-arrow-right');
            arrowicon.classList.remove('fa-arrow-left')
            brandarrowicon.classList.add('fa-arrow-right');
            brandarrowicon.classList.remove('fa-arrow-left');
            brandbottomleftcontent.textContent="Unique communication experiences are crafted with expertise and solid planning. An integrated system of 10 companies in various fields, led by experienced national leaders and +500 competent professionals.";
            mores.textContent="More";
            
            footfoaj.textContent="Foaj";
            footproj.textContent="Projects";
            footcomp.textContent="Companies";
            footcont.textContent="Contact";
        }
        
    });
    
    toggleButton.addEventListener('click', function () {
        var currentDir = document.body.getAttribute('dir');
        if (currentDir === 'ltr') 
        {
            document.body.setAttribute('dir', 'rtl');
            toggleButton.textContent="EN"
            banfootp.textContent="( إطلاق تجريبي )";
            com.textContent="فوج";
            grp.textContent="المشاريع";
            prj.textContent="الشركات";
            regi.textContent="التواصل";

            smallfoaj.textContent="فوج";
            smallpro.textContent="المشاريع";
            smallcomp.textContent="الشركات";
            smallcont.textContent="التواصل";
            
            centerleft.textContent="قوة تواصـل الإنسـان";
            centercontent.textContent=`ننطلق من هدف واضح الهوّية يؤمن بقوة خلق الروابط
            بين الإنســـان، وقدرته على إحــداث التغيير وخلق التأثير.`;
            arrowicon.classList.add('fa-arrow-left')
            arrowicon.classList.remove('fa-arrow-right')
            brandarrowicon.classList.add('fa-arrow-left')
            brandarrowicon.classList.remove('fa-arrow-right')
            brandbottomleftcontent.textContent="بقوة الخبرة ومنهجية التخطيط تُصنع التجارب الاتصالية المختلفة، منظومة متكاملة من 10 شركات في مختلف المجالات، بقيادات وطنّية ذات خبرة و +500 كفاءة.";
            mores.textContent="تعرّف أكثر";
            tooglebuttonfooter.textContent="EN";
            footfoaj.textContent="فوج";
            footproj.textContent="المشاريع";
            footcomp.textContent="الشركات";
            footcont.textContent="التواصل";
        }
        else 
        {
            document.body.setAttribute('dir', 'ltr'); 
            toggleButton.textContent="AR"
            banfootp.textContent="( Experimental Launch )"
            com.textContent="Foaj";
            grp.textContent="Projects";
            prj.textContent="Companies";
            regi.textContent="Contact";

            smallfoaj.textContent="Foaj";
            smallpro.textContent="Projects";
            smallcomp.textContent="Companies";
            smallcont.textContent="Contact";

            centerleft.textContent="The Power of Human Connection";
            centercontent.textContent="We believe in the power of creating connections that transform into meaningful impact."
            arrowicon.classList.add('fa-arrow-right');
            arrowicon.classList.remove('fa-arrow-left')
            brandarrowicon.classList.add('fa-arrow-right');
            brandarrowicon.classList.remove('fa-arrow-left');
            brandbottomleftcontent.textContent="Unique communication experiences are crafted with expertise and solid planning. An integrated system of 10 companies in various fields, led by experienced national leaders and +500 competent professionals.";
            mores.textContent="More";
            tooglebuttonfooter.textContent="AR";
            footfoaj.textContent="Foaj";
            footproj.textContent="Projects";
            footcomp.textContent="Companies";
            footcont.textContent="Contact";
        }
        
    })
}
Direction();

function setdirontoggle()
{
    var toggleButton = document.querySelector('#toggleDirection');
    var tooglebuttonfooter = document.querySelector('.footercpyrighttopright #toggleDirections');
    toggleButton.addEventListener('click',()=>{
        var currentDir = document.body.getAttribute('dir');
        localStorage.setItem("direction", currentDir);
    });
    tooglebuttonfooter.addEventListener('click',()=>{
        var currentDir = document.body.getAttribute('dir');
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
        console.log(ele);
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



