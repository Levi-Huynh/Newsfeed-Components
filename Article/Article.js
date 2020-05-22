// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    // this.expandButton.textContent="expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.panelBtnOpen = domElement.querySelectorAll('.panel-btn');
    console.log(this.panelBtnOpen);
  
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
    this.h2 = domElement.querySelector('h2');
    console.log(this.h2);
    // this.paragraph = this.domElement.querySelectorAll('p');
    // console.log(this.paragraph);
  }


  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    // this.panelBtnOpen.classList.toggle('hide-btn');
    // this.panelBtnClose.classList.toggle('hide-btn');
    // this.h2.style.transform="rotate(360deg)";
    // this.h2.style.transitionDuration='1s';
    // this.h2.style.opacity = "0.5";
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles
 variable to iterate over the articles NodeList and create a new instance of Article by 
 passing in each article as a parameter to the constructor.

*/

// let articles;
let articles = document.querySelectorAll('.article').forEach(currV =>{
      return new Article (currV);
});