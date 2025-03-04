function Direction() {
    var com = document.querySelector('#communication');
    var grp = document.querySelector('#group');
    var prj = document.querySelector('#project');
    var regi = document.querySelector('#regiment');

    var smallfoaj = document.querySelector('#smallfoaj');
    var smallpro = document.querySelector('#smallpro');
    var smallcomp = document.querySelector('#smallcomp');
    var smallcont = document.querySelector('#smallcont'); 


    var formheader = document.querySelector(".formheader h1");
    var labels = document.querySelectorAll(".myform label");
    var submit = document.querySelector(".submit");
    var emailp = document.querySelector(".addcontentemailleft p");
    var addressp = document.querySelector(".addresscontentaddressleft p");
    var socialp = document.querySelector(".addresscontentsocialleft p");
    
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
            tooglebuttonfooter.textContent="english"
            com.textContent="فواج";
            grp.textContent="المشاريع";
            prj.textContent="شركات";
            regi.textContent="اتصال";

            smallfoaj.textContent="فواج";
            smallpro.textContent="المشاريع";
            smallcomp.textContent="شركات";
            smallcont.textContent="اتصال";

            formheader.textContent="تواصل معنا";
            labels.forEach((ele,index)=>{
                if(index === 0)
                {
                    ele.textContent="الاسم";
                }
                else if(index === 1)
                {
                    ele.textContent="الإيميل";
                }
                else if(index === 2)
                {
                    ele.textContent="العنوان";
                }
                else if(index === 3)
                {
                    ele.textContent="الشركة";
                }
                else if(index === 4)
                {
                    ele.textContent="الرسالة";
                }
            });
            submit.textContent="أرسل";
            emailp.textContent="الإيميل"
            addressp.textContent="العنوان"
            socialp.textContent="مواقع التواصل الاجتماعي"

            footfoaj.textContent="فواج";
            footproj.textContent="المشاريع";
            footcomp.textContent="شركات";
            footcont.textContent="اتصال";
        }
        else 
        {
            document.body.setAttribute('dir', 'ltr'); 
            tooglebuttonfooter.textContent="arabic"
            com.textContent="Foaj";
            grp.textContent="Projects";
            prj.textContent="Companies";
            regi.textContent="Contact";

            smallfoaj.textContent="Foaj";
            smallpro.textContent="Projects";
            smallcomp.textContent="Companies";
            smallcont.textContent="Contact";
            
            formheader.textContent="Contact Us";
            labels.forEach((ele,index)=>{
                if(index === 0)
                {
                    ele.textContent="Name";
                }
                else if(index === 1)
                {
                    ele.textContent="Email";
                }
                else if(index === 2)
                {
                    ele.textContent="Address";
                }
                else if(index === 3)
                {
                    ele.textContent="Company";
                }
                else if(index === 4)
                {
                    ele.textContent="Message";
                }
            });
            submit.textContent="Send";
            emailp.textContent="Email";
            addressp.textContent="Address";
            socialp.textContent="Social Networks";

            
            footfoaj.textContent="Foaj";
            footproj.textContent="Projects";
            footcomp.textContent="Companies";
            footcont.textContent="Contact";
        }
        
    });
}
Direction()


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