


import React from "react";
import  ReactDOM  from "react-dom/client";

const heading = React.createElement(
    "h1",
    {
        id:"title",
        key: "h1"
    }, 
    "Namaste from React"
);

const heading2 = React.createElement(
    "h2",
    {
        id: "title",
        key: "h2"
    }, 
    "H2 tag"
)

const container = React.createElement("div",{id: "container"},[heading,heading2])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

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


