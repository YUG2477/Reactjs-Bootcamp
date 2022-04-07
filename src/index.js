import React, { Component, createElement } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// Challenge 2 : start 

// Create a navbar in JSX:
//     - Use the semantic `nav` element as the parent wrapper
//     - Have an h1 element with the brand name of your "website"
//     - Insert an unordered list for the other nav elements
//         - Inside the `ul`, have three `li`s for "Pricing",
//         "About", and "Contact"
//     - Don't worry about styling yet - it'll just be plain-looking HTML for now

// const navbar = (
//   <nav>
//       <h1>Bob's Bistro</h1>
//       <ul>
//           <li>Menu</li>
//           <li>About</li>
//           <li>Contact</li>
//       </ul>
//   </nav>
// )

// ReactDOM.render(navbar, document.getElementById("root"))

//  challlenge 2 end

/**
Challenge 3 start : find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */
// const page = (
//   <div>
//       <h1>My awesome website in React</h1>
//       <h3>Reasons I love React</h3>
//       <ol>
//           <li>It's composable</li>
//           <li>It's declarative</li>
//           <li>It's a hireable skill</li>
//           <li>It's actively maintained by skilled people</li>
//       </ol>
//   </div>
// )

// document.getElementById("root").append(JSON.stringify(page))

//  in output we will get [output output ] and plain javascript objects 
//  challenge end 


/**
Challenge 4 start : fix our code!

Don't forget, you're not using CDNs anymore, so there's no
global "ReactDOM" variable to use anymore.
 */

// const page = (
//   <div>
//       <h1>My awesome website in React</h1>
//       <h3>Reasons I love React</h3>
//       <ol>
//           <li>It's composable</li>
//           <li>It's declarative</li>
//           <li>It's a hireable skill</li>
//           <li>It's actively maintained by skilled people</li>
//       </ol>
//   </div>
// )

// ReactDOM.render(page, document.getElementById("root"))


//  challenge end 



// custom Component start 





/**
Challenge 5 start : 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */



// function Page() {
//     return (
//         <ol>
//             <li>It's a popular library, so I'll be 
//             able to fit in with the cool kids!</li>
//             <li>I'm more likely to get a job as a developer
//             if I know React</li>
//         </ol>
//     )
// }

// ReactDOM.render(<Page />, document.getElementById("root"))




/**
Challenge 5 part 2: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */


// function Page() {
//     return (
//         <div>
//             <header>
//                 <nav>
//                     <img src="./react-logo.png" width="40px" />
//                 </nav>
//             </header>
//             <h1>Reasons I'm excited to learn React</h1>
//             <ol>
//                 <li>It's a popular library, so I'll be 
//                 able to fit in with the cool kids!</li>
//                 <li>I'm more likely to get a job as a developer
//                 if I know React</li>
//             </ol>
//             <footer>
//                 <small>© 2021 Ziroll development. All rights reserved.</small>
//             </footer>
//         </div>
//     )
// }

// ReactDOM.render(<Page />, document.getElementById("root"))



/**
Mini Challenge 6 :
Move the `header` element from Page into 
its own component called "Header"
*/

// function Header() {
//   return (
//       <header>
//           <nav>
//               <img src="./react-logo.png" width="40px" />
//           </nav>
//       </header>
//   )
// }

// function Page() {
//   return (
//       <div>
//           <Header />
//           <h1>Reasons I'm excited to learn React</h1>
//           <ol>
//               <li>It's a popular library, so I'll be 
//               able to fit in with the cool kids!</li>
//               <li>I'm more likely to get a job as a developer
//               if I know React</li>
//           </ol>
//           <footer>
//               <small>© 2021 Ziroll development. All rights reserved.</small>
//           </footer>
//       </div>
//   )
// }

// ReactDOM.render(<Page />, document.getElementById("root"))



/**
Challenge  7: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

// function Header() {
//   return (
//       <header>
//           <nav>
//               <img src="./react-logo.png" width="40px" />
//           </nav>
//       </header>
//   )
// }

// function Footer() {
//   return (
//       <footer>
//           <small>© 2021 Ziroll development. All rights reserved.</small>
//       </footer>
//   )
// }

// function MainContent() {
//   return (
//       <div>
//           <h1>Reasons I'm excited to learn React</h1>
//           <ol>
//               <li>It's a popular library, so I'll be 
//               able to fit in with the cool kids!</li>
//               <li>I'm more likely to get a job as a developer
//               if I know React</li>
//           </ol>
//       </div>
//   )
// }

// function Page() {
//   return (
//       <div>
//           <Header />
//           <MainContent />
//           <Footer />
//       </div>
//   )
// }

// ReactDOM.render(<Page />, document.getElementById("root"))

// custom component end now from here we will work on styling on component 





// styling in custom component


//  function Header() {
//     return (
//         <header>
//             <nav className="nav">
//                 <img src="./react-logo.png" className="nav-logo" />
//                 <ul className="nav-items">
//                     <li>Pricing</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }

// function Footer() {
//     return (
//         <footer>
//             <small>© 2021 Ziroll development. All rights reserved.</small>
//         </footer>
//     )
// }

// function MainContent() {
//     return (
//         <div>
//             <h1>Reasons I'm excited to learn React</h1>
//             <ol>
//                 <li>It's a popular library, so I'll be 
//                 able to fit in with the cool kids!</li>
//                 <li>I'm more likely to get a job as a developer
//                 if I know React</li>
//             </ol>
//         </div>
//     )
// }

// function Page() {
//     return (
//         <div>
//             <Header />
//             <MainContent />
//             <Footer />
//         </div>
//     )
// }

// ReactDOM.render(<Page />, document.getElementById("root"))   


// Style.css  files

// .nav {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }

// .nav-logo {
//   width: 60px;
// }

// .nav-items {
//   list-style: none;
//   display: flex;
// }

// .nav-items > li {
//   padding: 10px;
// }



//  organise Component


//  Header.js file 
// import React from "react"

// export default function Header() {
//   return (
//     <header>
//       <nav className="nav">
//         <img src="./react-logo.png" className="nav-logo" />
//         <ul className="nav-items">
//           <li>Pricing</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     </header>
//   )
// }

// MainContent.js file 
// import React from "react"

// export default function MainContent() {
//   return (
//       <div>
//           <h1>Reasons I'm excited to learn React</h1>
//           <ol>
//               <li>It's a popular library, so I'll be 
//               able to fit in with the cool kids!</li>
//               <li>I'm more likely to get a job as a developer
//               if I know React</li>
//           </ol>
//       </div>
//   )
// }

// Footer.js file
// import React from "react"

// export default function Footer() {
//     return (
//         <footer>
//             <small>© 2021 Ziroll development. All rights reserved.</small>
//         </footer>
//     )
// }



// code 
// import each above file 

import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
