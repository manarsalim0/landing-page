/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const allSectionsInThePage=document.querySelectorAll('section');
const fragment=document.createDocumentFragment();
const navBar = document.getElementById('navbar__list');



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


//style of navBar
const navBarStyle=function(navBarItem){
    
    navBarItem.style.marginInlineEnd="5em";
    navBarItem.style.margin = "15px";
    navBarItem.style.color="black";
};

// style of selected item in navBar
const navBarActivListItemStyle=function(element){
    element.style.backgroundColor="#ccf2ff";
    element.style.textDecoration = "underline";

}

// style of unselected item in navBar
const navBarUnActivListItemsStyle=function(element){
    element.style.backgroundColor="white";
    element.style.textDecoration = "";

}

// Scroll to section on link click
const ScrollToSectionOnLinkClick= function(navBarItem,section){
    navBarItem.addEventListener('click',function(){
        section.scrollIntoView({behavior: "smooth", block: "center"});
    });
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const createNavBar=function(allSections){
    allSections.forEach((section)=>{
        const dataNav = section.getAttribute('data-nav');
        const navBarItem = document.createElement("li");
        navBarItem.innerText=dataNav;
        fragment.appendChild(navBarItem);
        //call navBarStyle method style of navBar
        navBarStyle(navBarItem);
        //call ScrollToSectionOnLinkClick method Scroll to section on link click 
        ScrollToSectionOnLinkClick(navBarItem,section);
    })
    navBar.appendChild(fragment);
    
};


// Add class 'active' to section when near top of viewport
const activeSection=function(){
    //event listener when you scroll it will detect active section
    window.addEventListener("scroll",function(){
        allSectionsInThePage.forEach((element)=>{
            rect=element.getBoundingClientRect();
            if(rect.top>=-50 && rect.top<=250){
                // Set sections as active
                element.classList.add("your-active-class");
                const choosenItem = element;
                //call activeItemInNaveBar method to Set Item In NavBar as active
                activeItemInNaveBar(choosenItem);
            }
            else{
                // Set else sections as active
                element.classList.remove("your-active-class");
            }

             
        })
    });
};


// Set Item In NavBar as active

const activeItemInNaveBar = function(choosenItem){
    let activeItem=choosenItem.getAttribute('data-nav');
    const listItems = document.querySelectorAll("li");
    listItems.forEach((element)=>{
        // Set listItem as active
        if (element.innerText===activeItem){
        //style active listItem in the navBar
            navBarActivListItemStyle(element);
        }
        else{
            //style unactive listItem in the navBar
            navBarUnActivListItemsStyle(element);
            
        }
    })
};











/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
createNavBar(allSectionsInThePage);




// Set sections as active & Set list item as active
activeSection();
