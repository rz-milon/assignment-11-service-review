import React from 'react';

const Blog = () => {
    return (
        <div className="bg-gradient-to-r from-pink-400 via-blue-600 to-yellow-400 pt-14">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
                <div className="grid gap-16 lg:grid-cols-1 sm:max-w-sm sm:mx-auto lg:max-w-3xl">
                    <div className="flex bg-white px-12 py-10 rounded shadow-xl">
                        <div>
                            <div className="mb-2">
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400 mb-5"
                                >
                                    What is difference between SQL and NoSQL
                                </a>
                            </div>
                            <p className=" pr-5 py-1">
                                <article className="mb-5 text-xl text-gray-700 text-left pl-5">
                                SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                                </article>
                            </p>
                        </div>
                    </div>
                    <div className="flex bg-white px-12 py-10 rounded shadow-xl">
                        <div>
                            <div className="mb-2">
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400 mb-5"
                                >
                                    What is JWT, how does it work?
                                </a>
                            </div>
                            <p className="  pr-5 py-1">
                                <article className="mb-5 text-xl text-gray-700 text-left pl-5">
                                JWT means JSON Web Token. It is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key or a public key pair by the Identity Provider.
                                </article>
                            </p>
                        </div>
                    </div>
                    <div className="flex bg-white px-12 py-10 rounded shadow-xl">
                        <div>
                            <div className="mb-2">
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400 mb-5"
                                >
                                    What is the difference between Javascript and NodeJS?
                                </a>
                            </div>
                            <p className=" pr-5 py-1">
                                <article className="mb-5 text-xl text-gray-700 text-left pl-5">
                                JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                                </article>
                            </p>
                        </div>
                    </div>
                    <div className="flex bg-white px-12 py-10 rounded shadow-xl">
                        <div>
                            <div className="mb-2">
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400 mb-5"
                                >
                                    How does NodeJS handle multiple requests at the same time?
                                </a>
                            </div>
                            <p className=" pr-5 py-1">
                                <article className="mb-5 text-xl text-gray-700 text-left pl-5">
                                How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                                </article>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;