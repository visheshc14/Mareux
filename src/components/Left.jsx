import React from 'react';

function Left({ toggleProjects, toggleAbout }) {
   return (
      <div className="left">
         <div className="left__content">
            <h1>f̶̛̞͇͇̲͚̙̝͎͗̾ḭ̸̯͖͔̜͉̮̋̇͋͊͂l̸̼͖͇̙̙̟̳̭̋̈́̔̀́́́̈́͜e̷͙̽͑̀̊̕</h1>

            <div className="left__files" onClick={toggleProjects}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="50px" width="50px" fill="currentColor">
                  <path d="M0 0h512v512H0z" fill="transparent" fillOpacity="1"></path>
                  <path
                     d="M41 73v304.563L88.697 151H423v-30H185.514l-16-48H41zm62.303 96L43.092 455h381.605l60.211-286H103.303z"
                     fillOpacity="1"></path>
               </svg>
               <span>Projects</span>
            </div>

            <div className="left__files" onClick={toggleAbout}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="50px" width="50px" fill="currentColor">
                  <path d="M0 0h512v512H0z" fill="transparent" fillOpacity="1"></path>
                  <path
                     d="M41 73v304.563L88.697 151H423v-30H185.514l-16-48H41zm62.303 96L43.092 455h381.605l60.211-286H103.303z"
                     fillOpacity="1"></path>
               </svg>
               <span>About</span>
            </div>

            <div className="left__files">
               <a style={{ textDecoration: 'none', color: 'inherit' }} href="mailto:visheshc14@gmail.com">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="50px" width="50px" fill="currentColor">
                     <path d="M0 0h512v512H0z" fill="transparent" fillOpacity="1"></path>
                     <path
                        d="M41 73v304.563L88.697 151H423v-30H185.514l-16-48H41zm62.303 96L43.092 455h381.605l60.211-286H103.303z"
                        fillOpacity="1"></path>
                  </svg>
                  <span>Contact</span>
               </a>
            </div>
         </div>
      </div>
   );
}

export default Left;
