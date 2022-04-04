import React from 'react';

const Blogs = () => {

    return (
        <div>
            <div className="p-10 m-5">
                <h2 className="text-xl font-medium">Context API</h2>
                <p className="text-xl">Context API is React structure that helps to share data between components. Context API provides a central space to store data and exchange data between components without passing as props. React.createContext takes a default value and creates a context object. Then using its Provider component parent component will send the a value prop to its descendants. any descendants needed that data can use context Consumer component to receive data</p>
            </div>
            <div className="p-10 m-5">
                <h2 className="text-xl font-medium">Semantic tag</h2>
                <p className="text-xl">Semantic tags are those HTML elements that clearly describe their purpose. semantic tags makes HTML understandable bt defining the different layouts and sections of the web pages. it helps the browser and search engine to better understand the web content.</p>
            </div>
            <div className="p-10 m-5">
                <h2 className="text-xl font-medium">Inline, Block & Inline-Block</h2>
                <p className="text-xl">on inline element height and width properties are nonfunctional. inline element will place itself side-by-side as long as there is space available. block element stack on top of each other. they start on a new line and take up the whole width, even if there is space available. inline-block element has ability to set height and width. and they will be placed side-by-side if there is available space.</p>
            </div>
        </div>
    );
};

export default Blogs;