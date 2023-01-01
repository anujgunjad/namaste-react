


import React from "react";
import  ReactDOM  from "react-dom/client";

//JSX - html like syntax in javascript
const Title = () => (
    <h2 id="title" key="h2">
        Namaste React
    </h2>
);

const HeaderComponent = () => {
    return (
        <div>
            <Title /> {/*Component Compositions*/}
            <h2 id="title" key="h2">
                 Namaste React
            </h2>
        </div>
    );
} 
// React.createElement => Object => HTML => DOM

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);

/** 
* We should put percel-cache in gitignore
* Ever thing which are genrate automatic can we put on gitignore 
* Parcel uses - HMR - HOT Module Reload
* File watcher algorith - C++
* .percel-cache  use some space to execute
* dist use as a bundle (minify files)
*/

/**
 * Parcel Doing in backend
 * -----------
 * HMR
 * File watcher algo
 * Bundling
 * minify
 * cleaning our code
 * Dev and Production Build
 * Super fast build algorithm
 * Image Optimization
 * Caching while development
 * Compressing
 * Compatable with older version browser
 * HTTPS on dev
 * manage port number
 * consistent hashig algorithm
 */


