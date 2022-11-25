import React from 'react';
import blog from '../../Resources/Images/images/Blog_image.jpg'

const Blogs = () => {
    return (
        <div>
            <div className="hero" style={{ backgroundImage: `url(${blog})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-center text-white pt-8">
                    <div className="max-w-5xl lg:max-w-2xl">
                        <h1 className="mb-5 text-5xl font-bold">Blogs Topics</h1>
                        <p className="mb-5 text-3xl font-semibold">State management in a React application</p>
                        <p className="mb-5 text-3xl font-semibold">prototypical inheritance</p>
                        <p className="mb-5 text-3xl font-semibold">About Unit test</p>
                        <p className="mb-5 text-3xl font-semibold">React vs. Angular vs. Vue</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className="min-h-screen bg-base-200 py-5">
                    <div className="">
                        <div className="">
                            <h1 className="text-3xl font-bold text-center">What are the different ways to manage a state in a React application?</h1>
                            <p className="px-10 text-2xl pt-5 text-justify">React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself.There are a lot of different kinds of state in react app and dozens of ways of managing each kind.There are four main types of state you need to properly manage in the React apps:</p>
                            <ul className='list-disc pl-14 text-2xl mt-5'>
                                <li>Local State</li>
                                <li>Global State</li>
                                <li>Server State</li>
                                <li>URL State</li>
                            </ul>
                            <p className="px-10 text-2xl pt-5 text-justify mb-5"><strong>Local (UI) state </strong>– Local state is data we manage in one or another component.For example, local state would be needed to show or hide a modal component or to track values for a form component.</p>
                            <h4 className='text-2xl px-10 font-semibold'>How to Manage Local State in React</h4>
                            <p className="px-10 text-2xl pt-5 text-justify"><strong>useState</strong> is the first tool we should reach for to manage state in our components.</p>
                            <p className="px-10 text-2xl pt-5 text-justify"><strong>useReducer</strong> is another option that can be used for either local or global state. It is similar in many ways to useState under the hood, although instead of just an initial state it accepts a reducer.</p>
                            <p className="px-10 text-2xl pt-5 text-justify mb-5"><strong>Global (UI) state</strong>– Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least</p>
                            <h4 className='text-2xl px-10 font-semibold'>How to Manage global State in React</h4>
                            <p className="px-10 text-2xl pt-5 text-justify">To manage it we can use a third-party solution. Many developers are inclined to use built-in React features like the Context API to manage their state.To manage global state, many developers tried and tested third-party libraries like Zustand, Jotai, and Recoil.</p>
                            <p className="px-10 text-2xl pt-5 text-justify mb-5"><strong>Server state</strong>– Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.</p>
                            <h4 className='text-2xl px-10 font-semibold'>How to Manage server State in React</h4>
                            <p className="px-10 text-2xl pt-5 text-justify">Server state can be deceptively challenging to manage. At first, it seems we just need to fetch data and display it in the page. But then we need to display a loading spinner while we are waiting for the data. Then we need to handle errors and display them to the user as they arise.</p>
                            <p className="px-10 text-2xl pt-5 text-justify">To fix this, there are a couple of great libraries that make data fetching in React a breeze: SWR and React Query.They not only give us a convenient hook to both get and change data from an API, but they keep track of all the necessary states and cache the data for us.</p>
                            <p className="px-10 text-2xl pt-5 text-justify mb-5"><strong>URL state</strong>–Data that exists on our URLs, including the pathname and query parameters.</p>
                            <p className="px-10 text-2xl pt-1 text-justify">URL state is quite easy to manage, usually through custom hooks that give us all the information we need about our location, history, and pathname. If you are using React Router, you can get all the information you need using useHistory or useLocation.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-base-200 py-5">

                    <h2 className="text-3xl font-bold text-center">How does prototypical inheritance work?</h2>
                    <p className="px-10 text-2xl pt-5 text-justify">Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
                </div>
                <div className="min-h-screen bg-base-200 py-5">
                    <h2 className="text-3xl font-bold text-center">What is a unit test? Why should we write unit tests?</h2>
                    <p className="px-10 text-2xl pt-5 text-justify mb-5"><strong>unit test</strong>-Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                    <p className="px-10 text-2xl pt-5 text-justify mb-5"><strong>Why should we write unit tests?</strong>-As developers, it is not possible to check every single line of code, but it is a developer's job.
                        Writing unit tests gives the developers a piece of mind when moving on to the next task/feature on-hand. It would be better to write a unit test to confirm the behavior of code than to not write a unit test and have a customer discover an error in the system.</p>
                </div>
                <div className="min-h-screen bg-base-200 py-5">
                    <h2 className="text-3xl font-bold text-center">React vs. Angular vs. Vue?</h2>
                    <p className="px-10 text-2xl pt-5 text-justify mb-5"><strong>React</strong>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                    <p className="px-10 text-2xl pt-5 text-justify mb-5"><strong>Why should we write unit tests?</strong>-As developers, it is not possible to check every single line of code, but it is a developer's job.
                        Writing unit tests gives the developers a piece of mind when moving on to the next task/feature on-hand. It would be better to write a unit test to confirm the behavior of code than to not write a unit test and have a customer discover an error in the system.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;