
import PDFPage from './PDFPage'; // Import the PDF component
import { PDFDownloadLink } from '@react-pdf/renderer';

const Blogs = () => {
    return (
        <div className="md:p-10 sm:p-6 p-4 sm:w-[75%] w-full mx-auto">
            <h1 className="text-center bg-[linear-gradient(40deg,#180a59_30%,#ffdd44,#a816bf_70%)] bg-clip-text text-transparent font-extrabold lg:text-3xl sm:text-2xl text-xl ">
                Questions Answer are given below:

            </h1>
            {/* Add a button to download the page as a PDF */}
            <div className="md:mt-6 mt-4 ">
                <button className='w-full'>
                    <PDFDownloadLink
                        document={<PDFPage />}
                        fileName="blog.pdf"
                        className="px-4 sm:text-lg text-sm py-2 text-white  font-semibold bg-gradient-to-r from-blue-600 to-blue-400 rounded-md hover:from-pink-600 hover:to-orange-400"
                    >
                        {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
                    </PDFDownloadLink>
                </button>
            </div>
            <ol className="text-justify">
                <li className="mt-5">
                    <strong className="text-lg">1. Differences between uncontrolled and controlled components - </strong> Controlled components in React manage form data through the component's state. They use state variables and event handlers to update and maintain the form's input values, offering greater control and ease of validation. Uncontrolled components, on the other hand, rely on the DOM to manage form data. They use refs to access the input values, leading to less boilerplate code but also less control over the data and harder validation. Controlled components are generally preferred for complex forms due to their predictability and ease of data handling.
                </li>
                <li className="mt-5">
                    <strong className="text-lg">2. Validate React props using PropTypes - </strong> To validate React props using PropTypes, import PropTypes from the 'prop-types' package. Define the expected types for your component’s props using the propTypes static property. You can specify types like PropTypes.string, PropTypes.number, and use .isRequired to make a prop mandatory. This helps catch type-related bugs and improves code documentation.
                </li>
                <li className="mt-5">
                    <strong className="text-lg">3. Difference between Node.js and Express.js - </strong> Node.js is a runtime environment that allows you to run JavaScript on the server side, enabling you to build scalable and high-performance applications. It provides core features like file system access, networking, and event handling. <br />
                    Express.js, on the other hand, is a web application framework built on top of Node.js. It simplifies the process of building web applications and APIs by providing a robust set of features for routing, middleware, and request/response handling. While Node.js provides the foundation, Express.js streamlines web development tasks.
                </li>
                <li className="mt-5">
                    <strong className="text-lg">4. Custom hook and Why create custom Hooks in React - </strong> A custom hook in React is a function that allows you to encapsulate and reuse stateful logic across components. <br />
                    Creating custom Hooks in React allows developers to encapsulate and reuse logic within functional components. It promotes code reusability, readability, and maintainability by abstracting away complex logic into reusable units & enabling you to share logic without duplication. It also helps in abstracting complex functionalities, making your component code cleaner and easier to read. By encapsulating related state and side effects, custom hooks improve organization and maintainability.
                </li>
            </ol>
        </div>
    );
};

export default Blogs;
