var $body = jQuery('body');
var $showmore = jQuery('.menu-bottom ul li.btn-more');
var $show_services = jQuery('.menu-bottom ul li.menu-services');
var $show_process = jQuery('.menu-bottom ul li.menu-process');
var $show_whygroove = jQuery('.menu-bottom ul li.menu-careerwhy');

jQuery(window).load(function() {
  menu_active();
  appendText();
  showtextcopied();
  showCVName();
  menu_show_more($showmore);
  menu_show_more($show_services);
  menu_show_more($show_process);
  menu_show_more($show_whygroove);

  setTimeout(function(){ 
    createJobSharing();
  }, 500); 

  stickyTabs();
  tab_show_less();
  if((jQuery('.page-software-development-services').length) || (jQuery('.page-software-development-process-models').length) )  {
  activeTabMobile();
  activeTabOnPage();
  }
  menu_child_active();
  menu_child_active1();
  // activeTabOnPagecustom();
  remove_img_title();
  permalink_anchor1();
  permalink_anchor();
  if((jQuery('.page-software-development-services').length) || (jQuery('.page-software-development-process-models').length) )  {
  activeTabProcess();
  }
  carrer_anchor();
  movehastag();
});

function remove_img_title() {
  jQuery('img').removeAttr('title');
  jQuery('img.default_logo').attr("title","Groove Technology – We build amazing software for your business");
}

function menu_active() {
  var $menu_item = jQuery('.career_links_anchor li');
  $menu_item.first().addClass('is-active');
  $menu_item.on('click', function(e) {
    jQuery(this).siblings().removeClass('is-active');
    jQuery(this).addClass('is-active');
  });
}

function menu_show_more(item) {
  //var $item = jQuery('.menu-bottom ul li.btn-more');
  item.on('click', function(e) {
    jQuery(this).siblings().removeClass('is-active').find('.more-show').removeClass('show');
    jQuery(this).toggleClass('is-active');
    jQuery(this).find('.more-show').toggleClass('show');
  });
}

/* old version */
// function menu_child_active() {
//   var $menu_item = jQuery('.menu-bottom > ul > li .more-show > ul > li');
//   $menu_item.on('click', function(e) {
//     jQuery(this).siblings().removeClass('is-active');
//     jQuery(this).addClass('is-active');
//   });
// }
function menu_child_active() {
  var $menu_item = jQuery('.menu-bottom > ul > li .more-show > ul > li');
  $menu_item.on('click', function(e) {
    jQuery(this).siblings().removeClass('is-active');
    jQuery('.menu-bottom > ul > li .more-show > ul > div > div > div > li').removeClass('is-active');
    jQuery(this).addClass('is-active');
  });
}

function activeTabProcess() {
  if(jQuery('.page-software-development-services').length) {
    activeTabServicesPage('#anchor-services_tab', '.menu-services');
  }
  if(jQuery('.page-software-development-process-models').length) {
    activeTabProcessPage('#anchor-process_tab', '.menu-process');
  }
}
function activeTabServicesPage(anchorLink, selectorLinks) {
  const getCurrentTab = Number(window.location.href.split(anchorLink)[1]);
  if(isNaN(getCurrentTab))
  {
    if( selectorLinks == '.menu-services'){
      var services= (window.location.href.split('software-development-services/index.html#'));
      var number = 1;
      if (services[1] == 'professional_services'){
        number = 1;
      }
      if (services[1] == 'custom_software_development'){
        number = 2;
      }
      if (services[1] == 'industry_expertise'){
        number = 3;
      }
      let tabsAccordion = jQuery('.wgl-tabs');
      let moreShowLinks = jQuery(`${selectorLinks} .mega-sub-menu .textwidget .custom-mega-menu p.services-anchor`);
      let header = tabsAccordion.find('.wgl-tabs_header');
      setTimeout(() => {
        jQuery(header[number - 1]).trigger('click');
        jQuery('html, body').stop().animate({scrollTop:0}, 10);          
      }, 0);
      moreShowLinks.on('click', function(event) {
        event.preventDefault();
        let index = moreShowLinks.index(this);
        // console.log(moreShowLinks);
        
        setTimeout(() => {
          //moreShowLinks.siblings().removeClass('is-active');
          //jQuery(this).addClass('is-active');
          jQuery(header[index]).trigger('click');
          jQuery('html, body').stop().animate({scrollTop:0}, 10);          
        }, 0);
      })
    }
    else{
      var services= (window.location.href.split('software-development-process-models/index.html#'));
      var number = 1;
      if (services[1] == 'fully_outsourced'){
        number = 1;
      }
      if (services[1] == 'dedicated_teams'){
        number = 2;
      }
      if (services[1] == 'team_augmentation'){
        number = 3;
      }
      if (services[1] == 'fixed_scope_projects'){
        number = 4;
      }
      if (services[1] == 'time_material_t&m'){
        number = 5;
      }
      let tabsAccordion = jQuery('.wgl-tabs');
      let moreShowLinks = jQuery(`${selectorLinks} .mega-sub-menu .textwidget .custom-mega-menu p.services-anchor`);
      let header = tabsAccordion.find('.wgl-tabs_header');
      setTimeout(() => {
        jQuery(header[number - 1]).trigger('click');
        jQuery('html, body').stop().animate({scrollTop:0}, 10);          
      }, 0);
      moreShowLinks.on('click', function(event) {
        event.preventDefault();
        let index = moreShowLinks.index(this);
        // console.log(moreShowLinks);
        
        setTimeout(() => {
          //moreShowLinks.siblings().removeClass('is-active');
          //jQuery(this).addClass('is-active');
          jQuery(header[index]).trigger('click');
          jQuery('html, body').stop().animate({scrollTop:0}, 10);          
        }, 0);
      })
    }
  }
  else{
    let tabsAccordion = jQuery('.wgl-tabs');
    let moreShowLinks = jQuery(`${selectorLinks} .mega-sub-menu .textwidget .custom-mega-menu p.services-anchor`);
    let header = tabsAccordion.find('.wgl-tabs_header');
    setTimeout(() => {
      jQuery(header[getCurrentTab - 1]).trigger('click');
      jQuery('html, body').stop().animate({scrollTop:0}, 10);          
    }, 0);

    moreShowLinks.on('click', function(event) {
        event.preventDefault();
        let index = moreShowLinks.index(this);
        // console.log(moreShowLinks);
        
        setTimeout(() => {
          //moreShowLinks.siblings().removeClass('is-active');
          //jQuery(this).addClass('is-active');
          jQuery(header[index]).trigger('click');
          jQuery('html, body').stop().animate({scrollTop:0}, 10);          
        }, 0);
    })
  }
}
function activeTabProcessPage(anchorLink, selectorLinks) {
  const getCurrentTab = Number(window.location.href.split(anchorLink)[1]);
  if(isNaN(getCurrentTab))
  {
    var services= (window.location.href.split('software-development-process-models/index.html#'));
    var number = 1;
    if (services[1] == 'fully_outsourced'){
      number = 1;
    }
    if (services[1] == 'dedicated_teams'){
      number = 2;
    }
    if (services[1] == 'team_augmentation'){
      number = 3;
    }
    if (services[1] == 'fixed_scope_projects'){
      number = 4;
    }
    if (services[1] == 'time_material_t&m'){
      number = 5;
    }
    let tabsAccordion = jQuery('.wgl-tabs');
    let moreShowLinks = jQuery(`${selectorLinks} .mega-sub-menu .textwidget .custom-mega-menu p.proces-anchor`);
    let header = tabsAccordion.find('.wgl-tabs_header');
    setTimeout(() => {
      jQuery(header[number - 1]).trigger('click');
      jQuery('html, body').stop().animate({scrollTop:0}, 10);          
    }, 0);
    moreShowLinks.on('click', function(event) {
      event.preventDefault();
      let index = moreShowLinks.index(this);
      // console.log(moreShowLinks);
      
      setTimeout(() => {
        //moreShowLinks.siblings().removeClass('is-active');
        //jQuery(this).addClass('is-active');
        jQuery(header[index]).trigger('click');
        jQuery('html, body').stop().animate({scrollTop:0}, 10);          
      }, 0);
    })
  }
  else{
    let tabsAccordion = jQuery('.wgl-tabs');
    let moreShowLinks = jQuery(`${selectorLinks} .mega-sub-menu .textwidget .custom-mega-menu p.proces-anchor`);
    let header = tabsAccordion.find('.wgl-tabs_header');
    setTimeout(() => {
      jQuery(header[getCurrentTab - 1]).trigger('click');
      jQuery('html, body').stop().animate({scrollTop:0}, 10);          
    }, 0);

    moreShowLinks.on('click', function(event) {
        event.preventDefault();
        let index = moreShowLinks.index(this);
        // console.log(moreShowLinks);
        
        setTimeout(() => {
          //moreShowLinks.siblings().removeClass('is-active');
          //jQuery(this).addClass('is-active');
          jQuery(header[index]).trigger('click');
          jQuery('html, body').stop().animate({scrollTop:0}, 10);          
        }, 0);
    })
  }
}
// old version
/* function activeTabMobile() {
  // Check if the service page
  if(jQuery('.page-software-development-services').length) {
    activeTabOnPage('#anchor-services_tab', '.menu-services');
  }

  if(jQuery('.page-software-development-process-models').length) {
    activeTabOnPage('#anchor-process_tab', '.menu-process');
  }
}
*/
function activeTabMobile() {
  // Check if the service page
  $haschildren = jQuery('.menu-bottom > ul > li .more-show > ul > div > div > div > li');
  $nochildren = jQuery('.menu-bottom > ul > li .more-show > ul > li');

  if(jQuery('.page-software-development-services').length) { 
      activeTabOnPagecustom('#anchor-services_tab', '.menu-services');
      activeTabOnPage('#anchor-services_tab', '.menu-services');
  }
  if(jQuery('.page-software-development-process-models').length) {
      activeTabOnPagecustom('#anchor-process_tab', '.menu-process');
      activeTabOnPage('#anchor-process_tab', '.menu-process');
  }
  
}

function activeTabOnPagecustom(anchorLink, selectorLinks) {
  const getCurrentTab = Number(window.location.href.split(anchorLink)[1]);
  if(isNaN(getCurrentTab))
  {
    if( selectorLinks == '.menu-services'){
      var services= (window.location.href.split('software-development-services/index.html#'));
      var number = 1;
      if (services[1] == 'professional_services'){
        number = 1;
      }
      if (services[1] == 'custom_software_development'){
        number = 2;
      }
      if (services[1] == 'industry_expertise'){
        number = 3;
      }
      
      let tabsAccordion = jQuery('.wgl-tabs');
      let moreShowLinks = jQuery(`${selectorLinks} .mega-sub-menu .textwidget .custom-mega-menu p.services-anchor`);
      let header = tabsAccordion.find('.wgl-tabs_header');
      setTimeout(() => {
        jQuery(header[number - 1]).trigger('click');
        jQuery('html, body').stop().animate({scrollTop:0}, 10);          
      }, 0);
      moreShowLinks.on('click', function(event) {
        event.preventDefault();
        let index = moreShowLinks.index(this);
        // console.log(moreShowLinks);
        
        setTimeout(() => {
          //moreShowLinks.siblings().removeClass('is-active');
          //jQuery(this).addClass('is-active');
          jQuery(header[index]).trigger('click');
          jQuery('html, body').stop().animate({scrollTop:0}, 10);          
        }, 0);
      })
    }
    else{
      var services= (window.location.href.split('software-development-process-models/index.html#'));
      var number = 1;
      if (services[1] == 'fully_outsourced'){
        number = 1;
      }
      if (services[1] == 'dedicated_teams'){
        number = 2;
      }
      if (services[1] == 'team_augmentation'){
        number = 3;
      }
      if (services[1] == 'fixed_scope_projects'){
        number = 4;
      }
      if (services[1] == 'time_material_t&m'){
        number = 5;
      }
      let tabsAccordion = jQuery('.wgl-tabs');
      let moreShowLinks = jQuery(`${selectorLinks} .mega-sub-menu .textwidget .custom-mega-menu p.proces-anchor`);
      let header = tabsAccordion.find('.wgl-tabs_header');
      setTimeout(() => {
        jQuery(header[number - 1]).trigger('click');
        jQuery('html, body').stop().animate({scrollTop:0}, 10);          
      }, 0);
      moreShowLinks.on('click', function(event) {
        event.preventDefault();
        let index = moreShowLinks.index(this);
        // console.log(moreShowLinks);
        
        setTimeout(() => {
          //moreShowLinks.siblings().removeClass('is-active');
          //jQuery(this).addClass('is-active');
          jQuery(header[index]).trigger('click');
          jQuery('html, body').stop().animate({scrollTop:0}, 10);          
        }, 0);
      })
    }
  }
  else{

    let tabsAccordion = jQuery('.wgl-tabs');

    let moreShowLinks = jQuery(`${selectorLinks} .more-show ul li.childmenu`);
    let header = tabsAccordion.find('.wgl-tabs_header');

    jQuery(`.more-show ${selectorLinks}-tab${getCurrentTab}`).addClass('is-active');

    setTimeout(() => {
      jQuery(header[getCurrentTab - 1]).trigger('click');
      jQuery('html, body').stop().animate({scrollTop:0}, 10);          
    }, 0);

    moreShowLinks.on('click', function(event) {
        event.preventDefault();
        let index = moreShowLinks.index(this);
        // console.log(moreShowLinks);
        
        setTimeout(() => {
          //moreShowLinks.siblings().removeClass('is-active');
          //jQuery(this).addClass('is-active');
          jQuery(header[index]).trigger('click');
          jQuery('html, body').stop().animate({scrollTop:0}, 10);          
        }, 0);
    })
  }
}

function activeTabOnPage(anchorLink, selectorLinks) {
  const getCurrentTab = Number(window.location.href.split(anchorLink)[1]);
  let tabsAccordion = jQuery('.wgl-tabs');

  let moreShowLinks = jQuery(`${selectorLinks} .more-show ul li`);
  let header = tabsAccordion.find('.wgl-tabs_header');

  jQuery(`.more-show ${selectorLinks}-tab${getCurrentTab}`).addClass('is-active');

  setTimeout(() => {
    jQuery(header[getCurrentTab - 1]).trigger('click');
    jQuery('html, body').stop().animate({scrollTop:0}, 10);          
  }, 0);

  moreShowLinks.on('click', function(event) {
      event.preventDefault();
      let index = moreShowLinks.index(this);
      // console.log(moreShowLinks);
      
      setTimeout(() => {
        //moreShowLinks.siblings().removeClass('is-active');
        //jQuery(this).addClass('is-active');
        jQuery(header[index]).trigger('click');
        jQuery('html, body').stop().animate({scrollTop:0}, 10);          
      }, 0);
  })
}


function appendText() {
  jQuery('.page-blog .page-header_content').append("<h5>Groove Technology Blog/News shares insights into latest technology & software solutions for a variety of sectors, including edutech, business intelligence, e-commerce, productivity, etc. <i></i></h5>");
  jQuery('.page-job .page-header_content').append("<h5>We value innovation and the high-quality work that evolves our business and your software development career path. Build inspiring technology and be recognized with Groove! <i></i></h5>");
  jQuery('.page-software-development-services .page-header_content').append("<h5>Our combination of technical and insightful industry experience (education, retail, logistics services…) will help you to develop B2B, B2C, cloud, mobile and desktop applications.<i></i></h5>");
  jQuery('.page-about-us .page-header_content').append("<h5>Groove Technology believe that transparency and honesty are key to strong relationships as they build trust with our customers, vendors, corporate associates, and colleagues.<i></i></h5>");
  jQuery('.page-software-development-process-models .page-header_content').append("<h5>We focus on flexibility and adaptability to fit different customer needs. Hence, we offer various of software development process models.<i></i></h5>");
  jQuery('.page-react-native .page-header_content').append("<h5>Create rich mobile experiences faster and more easily by working with Groove Technology to harness React Native’s component-based UI model. <i></i></h5>");
  jQuery('.page-contact-us .page-header_content').append("<h5>Our team is happy to answer all your questions if you have a concern about custom software development, software consulting, job opportunities or something else.<i></i></h5>");
  jQuery('.page-case-studies .page-header_content').append("<h5>We've developed a variety of customized amazing applications that have succeeded our clients' businesses. Here are the case studies we've completed recently.<i></i></h5>");
  jQuery('.page-employee-core-values .page-header_content').append("<h5>People-first is and will always be the underlying principle for whatever we do at Groove. <i></i></h5>");
  jQuery('.page-company-benefits .page-header_content').append("<h5>We are constantly transforming to offer a better workplace where our Groovers can be creative, grow and turn their inspiration into innovative software solutions.<i></i></h5>");
  jQuery('.page-available-jobs .page-header_content').append("<h5>We value innovation and the high-quality work that evolves our business and your software development career path. Build inspiring technology and be recognized with Groove! <i></i></h5>");
  jQuery('.page-life-at-groove .page-header_content').append("<h5>Life at Groove provides a closer look at the latest news, working environment, and people of Groove Technology. <i></i></h5>");
}

function showtextcopied() {
  var copybutton = jQuery('.blog-post .copy-the-code-outside .copy-the-code-button');
  var tooltip = jQuery('.blog-post .copy-the-code-outside .copy-the-code-button::after');
  copybutton.on('click', function(e) {
    tooltip.css('visibility', 'visible');
  });
}

function showCVName() {
  jQuery('.custom-file-upload input').on('change', function(event){
    // the change event gives us the input it occurred in 
    var srcCV = event.target;
    
    // the input has an array of files in the `files` property, each one has a name that you can use. We're just using the name here.
    var cvName = srcCV.files[0].name;
    // use fileName however fits your app best, i.e. add it into a div
    jQuery('#file-upload-filename').text('File name: ' + cvName);
  })
}


function createJobSharing() {
  if (!jQuery('meta[property="og:image"]').length) {
    const logoURL = jQuery('.default_logo').attr('src');
    // Append the logo to the meta tag og:image to share the job with company logo
    jQuery('.job_listings').append(`<meta property="og:image" content="${logoURL}" />`);
  } 

  
  if(jQuery('ul.job_listings .no_job_listings_found').length || !jQuery('ul.job_listings').length) {
    return;
  }

  jQuery('ul.job_listings > li').each(function() {

    const jobItem = jQuery(this);
    const jobUrl = jobItem.find('a').attr('href');
    const jobTitle = jobItem.find('h3').text();

    if(jobItem.find('.job-sharing').length) {
      return;
    }
    
    jobItem.append(`
      <div style="z-index: 0;" class="job-sharing">
        <div class="share_social-wpapper">
          <a class="share_link share_facebook" href="javascript:void(0);" 
            target="popup" 
            onclick="window.open('https://www.facebook.com/share.php?u=${jobUrl}','popup','width=600,height=600,scrollbars=no,resizable=no'); return false;"><span class="fab fa-facebook-f"></span></a>

          <a class="share_link share_linkedin" href="javascript:void(0);" 
            target="popup" 
            onclick="window.open('http://www.linkedin.com/shareArticle?mini=true&amp;url=${jobUrl}&amp;title=${jobTitle}','popup','width=600,height=600,scrollbars=no,resizable=no'); return false;"><span class="fab fa-linkedin-in fa-linkedin"></span></a>
          
          <a class="share_link share_twitter" href="javascript:void(0);" 
            target="popup" 
            onclick="window.open('https://twitter.com/intent/tweet?text=${jobTitle}&amp;url=${jobUrl}','popup','width=600,height=600,scrollbars=no,resizable=no'); return false;"><span class="fab fa-twitter"></span></a>

          <a class="share_link copy_job_link" href="#" target="_blank" ><div class="div-jobcopy"><img class="job-copylink" src="wp-content/uploads/2022/01/jobcoppylink.svg"><img class="job-copylinkhover" src="wp-content/uploads/2022/01/jobcoppylink-hover.svg"></div><span class="copy-text">Copied</span></a>
          <input class="input-job-url" style="opacity: 0; position: absolute; z-index: 0;" type="text" value="${jobUrl}">

        </div>
      </div>
    `);

    // <a class="share_link copy_job_link" href="#" target="_blank" ><span class="fas fa-link"></span><span class="copy-text">Copied</span></a>

    jQuery('.copy_job_link').off('click').bind('click', function(e) {
      e.preventDefault();
      var copyLink = jQuery(this).next('.input-job-url')[0];
  
      /* Select the text field */
      copyLink.select();
      copyLink.setSelectionRange(0, 99999); /*For mobile devices*/
  
      /* Copy the text inside the text field */
      document.execCommand("copy");

      jQuery('.copy-text').hide();
      jQuery(this).find('.copy-text').show().delay(3000).fadeOut();
    });
  });
}

const grooveMutationObserver = new MutationObserver(mutations => {
    try {
        mutations.forEach(mo => {
            const nodes = mo.addedNodes;
            nodes.forEach(item => {
                if (item.classList !== undefined) {
                    if (item.classList.contains('job_listing')) {
                        createJobSharing();
                    }
                }
            });
        });
    } catch (err) {
        throw err;
    }
});

grooveMutationObserver.observe(document.documentElement, {
    childList: true,
    subtree: true,
});

// Sticky Tabs Navigation 
function stickyTabs() {
  if(!(jQuery('body').hasClass('page-software-development-services') || jQuery('body').hasClass('page-software-development-process-models'))) {
    return;
  }

  let pageHeader = jQuery('.page-header');
  let stickTabHeading = jQuery('.wgl-tabs_headings');

  let heightHeader = jQuery('.wgl-theme-header').outerHeight();
  let heightAdminBar = jQuery('#wpadminbar').outerHeight() || 0;

  let stuck = false;
  let stickPoint = getDistance();

  function getDistance() {
    return pageHeader.offset().top;;
  }

  window.onscroll = function(e) {
    let distance = getDistance() - window.pageYOffset;
    let offset = window.pageYOffset;

    if ( (distance <= 0) && !stuck) {
      jQuery('.wgl-tabs_headings').addClass('has-sticky');

      stickTabHeading.css({
        'position': 'fixed',
        'top': `${heightHeader + heightAdminBar + 5}px`
      });

      stuck = true;

      jQuery('.wgl-tabs_header').bind('click', function(){ 
          // jQuery('html,body').animate({ scrollTop: 0 }, 0);
          window.scrollTo(0, 0);
      });
    } else if (stuck && (offset <= stickPoint)){
      jQuery('.wgl-tabs_headings').removeClass('has-sticky');
      stickTabHeading.css({
        'position': 'static'
      });
      stuck = false;
    }
  }
}

function tab_show_less() {
  var $button = jQuery('.tab-show-less');
  $button.on('click', function(e) {
    jQuery(this).parent().find('.wgl-accordion_content').css("display", "none");
  });
}


function permalink_anchor() {
  jQuery('.fancy-tabs .wgl-tabs_header_wrap').each(function() {
    jQuery(this).on('click', function(){
      let tabConent = jQuery(this).attr('data-tab-id');
      var $id_anchor = jQuery(`.wgl-tabs_content[data-tab-id="${tabConent}"] .elementor-menu-anchor`).attr('id');
      if(history.pushState) {
          history.pushState(null, null, `#${$id_anchor}`);
      }
      else {
          location.hash = $id_anchor;
      }
    });
  });
}


function menu_child_active1() {
  var $menu_item = jQuery('.menu-bottom > ul > li .more-show > ul > div > div > div > li');
  $menu_item.on('click', function(e) {
    // jQuery(this).siblings().removeClass('is-active');
    jQuery('.menu-bottom > ul > li .more-show > ul > div > div > div > li').removeClass('is-active');
    jQuery('.menu-bottom > ul > li .more-show > ul > li').removeClass('is-active');
    jQuery(this).addClass('is-active');
  });
}
function permalink_anchor1() {
  var $menu_item = jQuery('.menu-bottom > ul > li .more-show > ul > div > div > .wgl-accordion_header');
  $menu_item.on('click', function(e) {
    jQuery('.menu-bottom > ul > li.menu-services').toggleClass('is-active');
    jQuery('.menu-bottom > ul > li.menu-services .more-show').toggleClass('show');
  });
}

function carrer_anchor() {
  jQuery('.career_links_anchor li').each(function() {
      jQuery(this).on('click', function(e) {
      var $id_anchor = jQuery(this)[0].lastChild.className;
      if(history.pushState) {
          history.pushState(null, null, `#${$id_anchor}`);
      }
      else {
          location.hash = $id_anchor;
      }
      });
  });
}
function movehastag(){
  var host = window.location.origin +  window.location.pathname + '#'; 
  var hastag= (window.location.href.split(host));
  if (typeof hastag[1] === "undefined") { 

   }
  else{
    var activeclass = '.' + hastag[1];
    var idhastag = '#' + hastag[1];
    setTimeout(() => {
      let header = jQuery('.career_links_anchor').find(activeclass);
      jQuery(header).trigger('click');
      jQuery('html, body').stop().animate({ scrollTop: jQuery(idhastag).offset().top - 150 }, 800);       
      }, 0);
      // jQuery('html,body').animate({
      // scrollTop: jQuery(idhastag).offset().top - 150 }, 800);
  }
}