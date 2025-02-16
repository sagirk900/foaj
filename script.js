function Direction() {
    var toggleButton = document.querySelector('#toggleDirection');
    var banfootp = document.querySelector('.banfooterpara');
    var com = document.querySelector('#communication');
    var grp = document.querySelector('#group');
    var prj = document.querySelector('#project');
    var regi = document.querySelector('#regiment');
    var centerleft = document.querySelector('.centersectioncontentleft h1');
    var centercontent = document.querySelector('.centersectioncontentcenter  p');
    var arrowicon = document.querySelector('.centersectioncontentright a i');
    var brandbottomleftcontent = document.querySelector('.brandlogobottomcontentleft p');
    var brandarrowicon = document.querySelector(".brandlogobottomcontentright a i");
    var mores = document.querySelector('.brandlogobottomcontentright a span');
    console.log(arrowicon.classList);
    
    
    toggleButton.addEventListener('click', function () {
        const currentDir = document.body.getAttribute('dir');
        if (currentDir === 'ltr') 
        {
            document.body.setAttribute('dir', 'rtl');
            toggleButton.textContent="english"
            banfootp.textContent="( Test Launch )";
            com.textContent="تواصل";
            grp.textContent="المجموعة";
            prj.textContent="المشاريع";
            regi.textContent="فوج";
            centerleft.textContent="قوة تواصـل الإنسـان";
            centercontent.textContent=`ننطلق من هدف واضح الهوّية يؤمن بقوة خلق الروابط
بين الإنســـان، وقدرته على إحــداث التغيير وخلق التأثير.`;
            arrowicon.classList.add('fa-arrow-left')
            arrowicon.classList.remove('fa-arrow-right')
            brandarrowicon.classList.add('fa-arrow-left')
            brandarrowicon.classList.remove('fa-arrow-right')
            brandbottomleftcontent.textContent="بقوة الخبرة ومنهجية التخطيط تُصنع التجارب الاتصالية المختلفة، منظومة متكاملة من 10 شركات في مختلف المجالات، بقيادات وطنّية ذات خبرة و +500 كفاءة.";
            mores.textContent="تعرّف أكثر";
        }
        else 
        {
            document.body.setAttribute('dir', 'ltr'); 
            toggleButton.textContent="arabic"
            banfootp.textContent="( Experimental Launch )"
            com.textContent="communication";
            grp.textContent="The Group";
            prj.textContent="Projects";
            regi.textContent="regiment";
            centerleft.textContent="The Power of Human Connection";
            centercontent.textContent="We believe in the power of creating connections that transform into meaningful impact."
            arrowicon.classList.add('fa-arrow-right');
            arrowicon.classList.remove('fa-arrow-left')
            brandarrowicon.classList.add('fa-arrow-right');
            brandarrowicon.classList.remove('fa-arrow-left');
            brandbottomleftcontent.textContent="Unique communication experiences are crafted with expertise and solid planning. An integrated system of 10 companies in various fields, led by experienced national leaders and +500 competent professionals.";
            mores.textContent="More"
        }
        
    })
}
Direction()


