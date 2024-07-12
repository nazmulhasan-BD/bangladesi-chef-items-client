
import { Link } from 'react-router-dom';
import errorImage from '../assets/error_img/error.jpg'

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <img src={errorImage} alt="Error" className="mx-auto h-[350px] mb-6" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Oops! Something went wrong.</h1>
        <p className="text-xl font-semibold text-gray-600">We're sorry, but it seems there was an error.</p>
        <Link to="/" className= " text-xl text-blue-500 hover:underline">Back to Home</Link>
      </div>
    </div>
  );
}

export default ErrorPage;