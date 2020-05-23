  function faqChangeIcon (el, viewClass, hideClass, viewTitle, hideTitle ) {
  
  	if ( el.className.search(viewClass) !== -1 )
  	{
  		el.className	= el.className.replace(viewClass, hideClass);
  		el.title			= hideTitle;
  	}
  	else
  	{
  		el.className	= el.className.replace(hideClass, viewClass)
  		el.title			= viewTitle;
  	}
  
  } 
  
  function setContentSize()  { 
                                                                                                                                                         
    var content = document.getElementById('content');
    var siteHeight = (document.getElementById('body_bg') ? document.getElementById('body_bg').offsetHeight : 0); 
    var headerHeight = (document.getElementById('header') ? document.getElementById('header').offsetHeight : 0);                                                                                               
    var footerHeight = (document.getElementById('footer') ? document.getElementById('footer').offsetHeight : 0);                                           
   
    var webPage = content.offsetHeight + headerHeight + footerHeight;
   
    var windowHeight = 0;

    if (window.innerHeight)
    {
       windowHeight = window.innerHeight;
    }
    else
    {
       windowHeight = document.documentElement.clientHeight;
    }
    
    if (webPage < windowHeight)
    {
       content.style.height = windowHeight - headerHeight - footerHeight + 'px';    
    }
  
  }
