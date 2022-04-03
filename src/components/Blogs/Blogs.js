import React from "react";

const Blogs = () => {
    return (
        <div className="my-16 w-4/5 mx-auto flex gap-8">
            <div>
                <h1 className="my-4 text-3xl tracking-wider font-bold">
                    What is context api?
                </h1>
                <p className="tracking-wider text-lg">
                    Context api is a react feature. Basically it helps us to
                    transfer data from first component to any component without
                    prop drilling. It saves lots of time by it's amazing
                    feature.
                </p>
            </div>
            <div>
                <h1 className="my-4 text-3xl tracking-wider font-bold">
                    What is semantic tag in HTML?
                </h1>
                <p className="tracking-wider text-lg">
                    We use div before semantic tags. Semantic tags are nothing
                    but human readable tag. Such as header, footer, nav, article
                    etc. html5 intruduce this amazing feature for us to use.
                </p>
            </div>
        </div>
    );
};

export default Blogs;
