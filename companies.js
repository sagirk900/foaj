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

    var comhead = document.querySelector('.compheaderleft h3');
    var comheadrightfirst = document.querySelectorAll('.comheaderrightfirstright div');
    var comheadrightsecond = document.querySelector('.comheaderrightsecondright div');

    
    var compcontentfirst = document.querySelector(".compcontentcenterrow1col2content p");
    var compcontentsecond = document.querySelector(".compcontentcenterrow2col2content p");
    var compcontentthird = document.querySelector(".compcontentcenterrow3col2content p");
    var compcontentfour = document.querySelector(".compcontentcenterrow4col2content p");
    var compcontentfive = document.querySelector(".compcontentcenterrow5col2content p");
    var compcontentsix = document.querySelector(".compcontentcenterrow6col2content p");
    var compcontentseven = document.querySelector(".compcontentcenterrow7col2content p");
    var compcontenteight = document.querySelector(".compcontentcenterrow8col2content p");
    var compcontentnine = document.querySelector(".compcontentcenterrow9col2content p");
    var compcontentten = document.querySelector(".compcontentcenterrow10col2content p");
    var compcontentelev = document.querySelector(".compcontentcenterrow11col2content p");
    var compcontenttwe = document.querySelector(".compcontentcenterrow12col2content p");
    var compcontentthirteen = document.querySelector(".compcontentcenterrow13col2content p");
    var compcontentfourteen = document.querySelector(".compcontentcenterrow14col2content p");



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
            prj.textContent="الشركات";
            regi.textContent="التواصل";

            smallfoaj.textContent="فوج";
            smallpro.textContent="المشاريع";
            smallcomp.textContent="الشركات";
            smallcont.textContent="التواصل";

            comhead.textContent="مجموعة اتصالية شاملة تتضمن";
            comheadrightfirst.forEach((ele,index)=>{
                if(index===0)
                {
                    ele.textContent="رائدة"
                }
                else if(index===1)
                {
                    ele.textContent="شركة"
                }
                
            });
            comheadrightsecond.textContent="مهني";



            compcontentfirst.textContent ="شركة دعاية وإعلان متكاملة، حاصلة على عدّة جوائز محلية وعالمية، تقدم حلول إعلانية من الفكرة والتنفيذ وحتى النشر والإطلاق وقياس الأثر."; 
            compcontentsecond.textContent="شركة دعاية وإعلان متخصصة في تطوير الحلول الإبداعية، تقدّم الاستراتيجيات واﻟﻤحتوى والأفكار والتصاميم الإبداعية التي تعتني بهويّة اﻟﻤشروع وتعبّر عن قيمه.";
            compcontentthird.textContent="وكالة دعاية وإعلان تملك الخبرة في الحملات التسويقية وتنفيذها وإدارتها، تقدم حزم دعائية متكاملة من محتوى وتصاميم إبداعية، عملت على العديد من الحملات لجهات كبرى في القطاعين الحكومي والخاص.";
            compcontentfour.textContent="وكالة تسويق وإعًلام تصنع الحملات الاتصالية من الاستراتيجية والتخطيط، وصولا للتنفيذ والإطلاق، عملت على تنفيذ العديد من اﻟﻤشاريع الحكومية لأكثر من جهة.";
            compcontentfive.textContent="شركة رائدة في التسويق الرقمي، نفذت أكثر من 350 حملة إعلامية وأدارت التواجد الرقمي لعدد كبير من اﻟﻤشاريع، ساهمت في نجاح العديد من اﻟﻤشاريع الحكومية الكبرى.";
            compcontentsix.textContent="شركة متخصصة في تقديم خدمات التواصل الرقمي للقطاع الخاص من خلال إدارة حسابات التواصل الاجتماﻋﻲ وصناعة اﻟﻤحتوى الإبداﻋﻲ، وإطلاق الحملات الترويجية الرقمية.";
           
            compcontentseven.textContent="شركة متخصصة في العلاقات العامة الإعلامية على اﻟﻤستوى اﻟﻤحلي والدولي، تهتم في تخطيط وتنفيذ الحملات الإعلامية، والتدريب على الظهور الإعلامي واللقاءات الإعلامية، والتقارير الإعلامية، والأخبار الصحفية.";
           
            compcontenteight.textContent=`وكالة UBRAND السعودية هي وكالة رائدة في تقديم الخدمات الإبداعية. 
تدار الوكالة من قبل فريق سعودي موهوب يلبي احتياجات العمليات الاتصالية والتسويقية بأعلى المعايير.
تدير UBRAND مواهب وطنية، وتعمل على خلق بيئة مثالية لجذب الكفاءات المحلية والعالمية في إطار
بيئة ثقافية إبداعية متناغمة.`

            compcontentnine.textContent=`شركة رائدة في تنظيم الفعاليات في المملكة العربية السعودية منذ عام 2011.
تركز على تحويل كل مشروع إلى ساحة نابضة بالحياة، سواء كان ذلك من خلال المؤتمرات والمعارض،
أو العروض المسرحية والترفيهية، أو فعاليات المشاركة المجتمعية، أو المهرجانات والاحتفالات المحلية والدولية.`

            compcontentten.textContent=`شركة متخصصة في تخطيط وتنفيذ الحملات الإعلانية المدفوعة من خلال مختلف المنصات الإعلانية. 
تعمل الشركة مع أحدث وسائل الإعلام والتكنولوجيا الناشئة، وتمتلك مخططين ممتازين، وفريق
 يفهم الصورة الكبرى ويدرك متى يجب التركيز على التفاصيل المهمة.
تفخر تريس بقيمها التي تعكس التواصل الواضح، والتسليم الفعّال، والتنفيذ الدقيق.`
            
            compcontentelev.textContent=`انطلقت شركة نَص في عام 2014 من مدينة الرياض في المملكة العربية السعودية، مع العزم
 على تقديم مستوى عالٍ من الجودة والتميز في صناعة المحتوى وتطوير المخرجات التواصلية 
والتسويقية، لتصبح الشريك المفضل للعملاء، بأدائها الاحترافي وجهودها المكرسة نحو نتائج استثنائية.`
            compcontenttwe.textContent="شركة تسويق رقمي تعتمد على التحليل العميق والبيانات في تطوير وتنفيذ استراتيجيات فعّالة تلبي تطلعات العملاء وتواكب احتياجاتهم، مع سجل حافل منذ تأسيسها في تحقيق نتائج ملموسة تنعكس على الواقع."

            compcontentthirteen.textContent=`أداء العقارية، شركة تسويق عقاري رائدة منذ عام 1999، تقدّم مقاربة
 جديدة تدمج بين التقنية والتسويق، مدعومة بخبرة واسعة في القطاع العقاري.
مما يؤهلها لتقديم حلولًا تسويقية عقارية بطابع فريد يواكب تطلعات عملائها.`;
            compcontentfourteen.textContent=`هودج،شركة إنتاج سعودية انطلقت من قلب الرياض، تجمع بين عمق الهوية المحلية واتساع الرؤية العالمية في رواية الرسائل بلغة بصرية مبتكرة تصل إلى الجمهور بجمالية ووضوح.
تقدّم هودج حلولاً متكاملة في إنتاج المحتوى المرئي، وتجمع بين الخبرة والابتكار عبر فريق محترف في مجالات الإنتاج وإدارته.`;



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
        

        comhead.textContent="A comprehensive communications group comprising:";
        comheadrightfirst.forEach((ele,index)=>{
            if(index===0)
            {
                ele.textContent="Leading"
            }
            else if(index===1)
            {
                ele.textContent="Companies"
            }
            
        });
        comheadrightsecond.textContent="Professionals";  


        compcontentfirst.textContent="An integrated creative house that earned several local and international awards. Habbar offers creative comprehensive advertising solutions from strategy and conceptualization to execution, publication, launch, and impact measurement.";
        compcontentsecond.textContent="A creative house specialized in developing creative solutions, providing strategies, content, ideas, and creative designs that reflect the identity and values of each unique project.";
        compcontentthird.textContent="An advertising agency with expertise in development of marketing campaigns, execution, and management. Pavo offers comprehensive advertising packages of creative concepts, content and design. It has worked on multiple campaigns for major entities in both the government and private sectors.";
        compcontentfour.textContent="An advertising and marketing company that crafts communication campaigns from strategy and planning to execution and launch. Akwan worked on many government projects for multiple entities.";
        compcontentfive.textContent="A leading digital marketing company that has executed over 350 media campaigns and managed the digital presence of numerous projects, contributing to the success of major government initiatives.";
        compcontentsix.textContent="A company specialized in providing creative digital communication services for the private and governmental sector. Biio manages social media accounts, creating creative content, and launching digital campaigns.";
        compcontentseven.textContent="March is specialized in public relations on both local and international levels, focusing on planning and executing media campaigns, media appearance training, interviews, media reports, and press releases.";
        compcontenteight.textContent="UBRAND is a leading Saudi agency specializing in creative services.Powered by a talented Saudi team, the agency delivers top-tier communication and marketing solutions with excellence.Committed to nurturing national talent,UBRAND creates an inspiring environment that attracts top local and global expertise within a dynamic and innovative cultural setting."
        compcontentnine.textContent=`A leading company in events management in the Kingdom of Saudi Arabia
                                    since 2011. It focuses on transforming every project into a vibrant arena,
                                    whether through conferences and exhibitions,theatrical and entertainment
                                    performances,community engagement events or local and international festivals and celebration.`;
        compcontentten.textContent=`A company specialized in planning and executing paid advertising
                                    campaigns through various advertising platforms.The company works
                                    with the latest emerging Media and Technology and has excellent planners,
                                    along with a team that understands the big picture and knows when to
                                    obsess over important details.Trase takes pride in its values,which reflect
                                    clear communication,effective deliverables and meticulous execution.`;
        compcontentelev.textContent=`In 2014, in Riyadh, Saudi Arabia, the enthralling story
                                    of Nuss unfolded as it developed into a hub of
                                    inspiration for content creation.Since then,Nuss has
                                    been pushing the boundaries of excellence with every product and project it delivers.Through
                                    exemplary content,Nuss began diversifying its services and extending its horizons.`;
        compcontenttwe.textContent=`A digital marketing company that relies on deep analysis
                                    and data to develop and implement effective strategies
                                    that align with clients goals and address their needs,with
                                    a proven track record of achieving tangible results since
                                    its establishment`;
         compcontentthirteen.textContent=`Adaa Real Estate, a leading real estate marketing company since 1999, offers a fresh perspective on the market by
                                            integrating advanced technology with strategic marketing. Supported by extensive industry experience, this approach 
                                            enables the delivery of distinctive and effective real estate solutions to clients.`;

        compcontentfourteen.textContent=`Howdaj is a Saudi production company born in the heart of Riyadh. It blends the richness of local identity with the breadth of a global vision, telling
                                            stories through an innovative visual language that connects with audiences in both clarity and beauty.
                                            The company offers integrated solutions in visual content production, combining expertise and creativity through 
                                            a professional team specialized in all aspects of production and management.`;                                                                                


                                            
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

    var comhead = document.querySelector('.compheaderleft h3');
    var comheadrightfirst = document.querySelectorAll('.comheaderrightfirstright div');
    var comheadrightsecond = document.querySelector('.comheaderrightsecondright div');

    
    var compcontentfirst = document.querySelector(".compcontentcenterrow1col2content p");
    var compcontentsecond = document.querySelector(".compcontentcenterrow2col2content p");
    var compcontentthird = document.querySelector(".compcontentcenterrow3col2content p");
    var compcontentfour = document.querySelector(".compcontentcenterrow4col2content p");
    var compcontentfive = document.querySelector(".compcontentcenterrow5col2content p");
    var compcontentsix = document.querySelector(".compcontentcenterrow6col2content p");
    var compcontentseven = document.querySelector(".compcontentcenterrow7col2content p");
    var compcontenteight = document.querySelector(".compcontentcenterrow8col2content p");
    var compcontentnine = document.querySelector(".compcontentcenterrow9col2content p");
    var compcontentten = document.querySelector(".compcontentcenterrow10col2content p");
    var compcontentelev = document.querySelector(".compcontentcenterrow11col2content p");
    var compcontenttwe = document.querySelector(".compcontentcenterrow12col2content p");
    var compcontentthirteen = document.querySelector(".compcontentcenterrow13col2content p");
    var compcontentfourteen = document.querySelector(".compcontentcenterrow14col2content p");

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
            prj.textContent="الشركات";
            regi.textContent="التواصل";

            smallfoaj.textContent="فوج";
            smallpro.textContent="المشاريع";
            smallcomp.textContent="الشركات";
            smallcont.textContent="التواصل";

            comhead.textContent="مجموعة اتصالية شاملة تتضمن";
            comheadrightfirst.forEach((ele,index)=>{
                if(index===0)
                    {
                        ele.textContent="رائدة"
                    }
                    else if(index===1)
                    {
                        ele.textContent="شركة"
                    }
                
            });
            comheadrightsecond.textContent="مهني";



            compcontentfirst.textContent ="شركة دعاية وإعلان متكاملة، حاصلة على عدّة جوائز محلية وعالمية، تقدم حلول إعلانية من الفكرة والتنفيذ وحتى النشر والإطلاق وقياس الأثر."; 
            compcontentsecond.textContent="شركة دعاية وإعلان متخصصة في تطوير الحلول الإبداعية، تقدّم الاستراتيجيات واﻟﻤحتوى والأفكار والتصاميم الإبداعية التي تعتني بهويّة اﻟﻤشروع وتعبّر عن قيمه.";
            compcontentthird.textContent="وكالة دعاية وإعلان تملك الخبرة في الحملات التسويقية وتنفيذها وإدارتها، تقدم حزم دعائية متكاملة من محتوى وتصاميم إبداعية، عملت على العديد من الحملات لجهات كبرى في القطاعين الحكومي والخاص.";
            compcontentfour.textContent="وكالة تسويق وإعًلام تصنع الحملات الاتصالية من الاستراتيجية والتخطيط، وصولا للتنفيذ والإطلاق، عملت على تنفيذ العديد من اﻟﻤشاريع الحكومية لأكثر من جهة.";
            compcontentfive.textContent="شركة رائدة في التسويق الرقمي، نفذت أكثر من 350 حملة إعلامية وأدارت التواجد الرقمي لعدد كبير من اﻟﻤشاريع، ساهمت في نجاح العديد من اﻟﻤشاريع الحكومية الكبرى.";
            compcontentsix.textContent="شركة متخصصة في تقديم خدمات التواصل الرقمي للقطاع الخاص من خلال إدارة حسابات التواصل الاجتماﻋﻲ وصناعة اﻟﻤحتوى الإبداﻋﻲ، وإطلاق الحملات الترويجية الرقمية.";
            
            // compcontentseven.textContent="شركة متخصصة في العلاقات العامة الإعلامية على اﻟﻤستوى اﻟﻤحلي والدولي، تهتم في تخطيط وتنفيذ الحملات الإعلامية، والتدريب على الظهور الإعلامي واللقاءات الإعلامية، والتقارير الإعلامية، والأخبار الصحفية.";
            // compcontenteight.textContent=`وكالة UBRAND السعودية هي وكالة رائدة في تقديم الخدمات الإبداعية.
            // تدار الوكالة من قبل فريق سعودي موهوب يلبي احتياجات العمليات الاتصالية والتسو`;
            // compcontentnine.textContent=`شركة رائدة في تنظيم الفعاليات في المملكة العربية السعودية منذ عام 2011.
            // تركز على تحويل كل مشروع إلى ساحة نابضة بالحياة، سواء كان ذلك من خلال الم`;
            // compcontentten.textContent=`شركة متخصصة في تخطيط وتنفيذ الحملات الإعلانية المدفوعة من خلال مختلف المنصات الإعلانية.
            // تعمل الشركة مع أحدث وسائل الإعلام والتكنولوجيا الناشئة،`;
            // compcontentelev.textContent=`انطلقت شركة نَص في عام 2014 من مدينة الرياض في المملكة العربية السعودية، مع العزم
            // على تقديم مستوى عالٍ من الجودة والتميز في صناعة المحتوى وتطو`;
            // compcontenttwe.textContent=`شركة تسويق رقمي تعتمد على التحليل العميق والبيانات في تطوير وتنفيذ استراتيجيات فعّالة تلبي
            // تطلعات العملاء وتواكب احتياجاتهم، مع سجل حافل منذ تأ`;

            compcontentseven.textContent="شركة متخصصة في العلاقات العامة الإعلامية على اﻟﻤستوى اﻟﻤحلي والدولي، تهتم في تخطيط وتنفيذ الحملات الإعلامية، والتدريب على الظهور الإعلامي واللقاءات الإعلامية، والتقارير الإعلامية، والأخبار الصحفية.";
           
            compcontenteight.textContent=`وكالة UBRAND السعودية هي وكالة رائدة في تقديم الخدمات الإبداعية. 
تدار الوكالة من قبل فريق سعودي موهوب يلبي احتياجات العمليات الاتصالية والتسويقية بأعلى المعايير.
تدير UBRAND مواهب وطنية، وتعمل على خلق بيئة مثالية لجذب الكفاءات المحلية والعالمية في إطار
بيئة ثقافية إبداعية متناغمة.`

            compcontentnine.textContent=`شركة رائدة في تنظيم الفعاليات في المملكة العربية السعودية منذ عام 2011.
تركز على تحويل كل مشروع إلى ساحة نابضة بالحياة، سواء كان ذلك من خلال المؤتمرات والمعارض،
أو العروض المسرحية والترفيهية، أو فعاليات المشاركة المجتمعية، أو المهرجانات والاحتفالات المحلية والدولية.`

            compcontentten.textContent=`شركة متخصصة في تخطيط وتنفيذ الحملات الإعلانية المدفوعة من خلال مختلف المنصات الإعلانية. 
تعمل الشركة مع أحدث وسائل الإعلام والتكنولوجيا الناشئة، وتمتلك مخططين ممتازين، وفريق
 يفهم الصورة الكبرى ويدرك متى يجب التركيز على التفاصيل المهمة.
تفخر تريس بقيمها التي تعكس التواصل الواضح، والتسليم الفعّال، والتنفيذ الدقيق.`
            
            compcontentelev.textContent=`انطلقت شركة نَص في عام 2014 من مدينة الرياض في المملكة العربية السعودية، مع العزم
 على تقديم مستوى عالٍ من الجودة والتميز في صناعة المحتوى وتطوير المخرجات التواصلية 
والتسويقية، لتصبح الشريك المفضل للعملاء، بأدائها الاحترافي وجهودها المكرسة نحو نتائج استثنائية.`
            compcontenttwe.textContent="شركة تسويق رقمي تعتمد على التحليل العميق والبيانات في تطوير وتنفيذ استراتيجيات فعّالة تلبي تطلعات العملاء وتواكب احتياجاتهم، مع سجل حافل منذ تأسيسها في تحقيق نتائج ملموسة تنعكس على الواقع.";
            compcontentthirteen.textContent=`أداء العقارية، شركة تسويق عقاري رائدة منذ عام 1999، تقدّم مقاربة
 جديدة تدمج بين التقنية والتسويق، مدعومة بخبرة واسعة في القطاع العقاري.
مما يؤهلها لتقديم حلولًا تسويقية عقارية بطابع فريد يواكب تطلعات عملائها.`;
            compcontentfourteen.textContent=`هودج،شركة إنتاج سعودية انطلقت من قلب الرياض، تجمع بين عمق الهوية المحلية واتساع الرؤية العالمية في رواية الرسائل بلغة بصرية مبتكرة تصل إلى الجمهور بجمالية ووضوح.
تقدّم هودج حلولاً متكاملة في إنتاج المحتوى المرئي، وتجمع بين الخبرة والابتكار عبر فريق محترف في مجالات الإنتاج وإدارته.`;

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
            

            comhead.textContent="A comprehensive communications group comprising:";
            comheadrightfirst.forEach((ele,index)=>{
                if(index===0)
                {
                    ele.textContent="Leading"
                }
                else if(index===1)
                {
                    ele.textContent="Companies"
                }
                
            });
            comheadrightsecond.textContent="Professionals";  


            compcontentfirst.textContent="An integrated creative house that earned several local and international awards. Habbar offers creative comprehensive advertising solutions from strategy and conceptualization to execution, publication, launch, and impact measurement.";
            compcontentsecond.textContent="A creative house specialized in developing creative solutions, providing strategies, content, ideas, and creative designs that reflect the identity and values of each unique project.";
            compcontentthird.textContent="An advertising agency with expertise in development of marketing campaigns, execution, and management. Pavo offers comprehensive advertising packages of creative concepts, content and design. It has worked on multiple campaigns for major entities in both the government and private sectors.";
            compcontentfour.textContent="An advertising and marketing company that crafts communication campaigns from strategy and planning to execution and launch. Akwan worked on many government projects for multiple entities.";
            compcontentfive.textContent="A leading digital marketing company that has executed over 350 media campaigns and managed the digital presence of numerous projects, contributing to the success of major government initiatives.";
            compcontentsix.textContent="A company specialized in providing creative digital communication services for the private and governmental sector. Biio manages social media accounts, creating creative content, and launching digital campaigns.";
            compcontentseven.textContent="March is specialized in public relations on both local and international levels, focusing on planning and executing media campaigns, media appearance training, interviews, media reports, and press releases.";
            compcontenteight.textContent="UBRAND is a leading Saudi agency specializing in creative services.Powered by a talented Saudi team, the agency delivers top-tier communication and marketing solutions with excellence.Committed to nurturing national talent,UBRAND creates an inspiring environment that attracts top local and global expertise within a dynamic and innovative cultural setting."
            compcontentnine.textContent=`A leading company in events management in the Kingdom of Saudi Arabia
                                        since 2011. It focuses on transforming every project into a vibrant arena,
                                        whether through conferences and exhibitions,theatrical and entertainment
                                        performances,community engagement events or local and international festivals and celebration.`;
            compcontentten.textContent=`A company specialized in planning and executing paid advertising
                                        campaigns through various advertising platforms.The company works
                                        with the latest emerging Media and Technology and has excellent planners,
                                        along with a team that understands the big picture and knows when to
                                        obsess over important details.Trase takes pride in its values,which reflect
                                        clear communication,effective deliverables and meticulous execution.`;
            compcontentelev.textContent=`In 2014, in Riyadh, Saudi Arabia, the enthralling story
                                        of Nuss unfolded as it developed into a hub of
                                        inspiration for content creation.Since then,Nuss has
                                        been pushing the boundaries of excellence with every product and project it delivers.Through
                                        exemplary content,Nuss began diversifying its services and extending its horizons.`;
            compcontenttwe.textContent=`A digital marketing company that relies on deep analysis
                                        and data to develop and implement effective strategies
                                        that align with clients goals and address their needs,with
                                        a proven track record of achieving tangible results since
                                        its establishment`;
            compcontentthirteen.textContent=`Adaa Real Estate, a leading real estate marketing company since 1999, offers a fresh perspective on the market by
                                            integrating advanced technology with strategic marketing. Supported by extensive industry experience, this approach 
                                            enables the delivery of distinctive and effective real estate solutions to clients.`;

           compcontentfourteen.textContent=`Howdaj is a Saudi production company born in the heart of Riyadh. It blends the richness of local identity with the breadth of a global vision, telling
                                            stories through an innovative visual language that connects with audiences in both clarity and beauty.
                                            The company offers integrated solutions in visual content production, combining expertise and creativity through 
                                            a professional team specialized in all aspects of production and management.`;                                                    
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