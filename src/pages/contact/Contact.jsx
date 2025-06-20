import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';

export default function Contact() {
  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .required('Name is required')
      .min(2, 'Name must be at least 2 characters'),
    userAge: Yup.number()
      .required('Age is required')
      .positive('Age must be positive')
      .integer('Age must be a whole number'),
    userEmail: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    userPassword: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
  });

  const formik = useFormik({
    initialValues: {
      userName: '',
      userAge: '',
      userEmail: '',
      userPassword: ''
    },
    validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  // Function to get label text from input name
  const getLabel = (name) => {
    return name.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-5 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-950 mb-4 uppercase">Contact Section</h1>
          
          <div className="flex justify-center items-center mb-16">
            <div className="bg-blue-950 h-1 w-16 mr-4"></div>
            <svg className="w-8 h-8 text-blue-950" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <div className="bg-blue-950 h-1 w-16 ml-4"></div>
          </div>

          <form onSubmit={formik.handleSubmit} className="max-w-xl mx-auto">
            {/* Username Field */}
            <div className="mb-6 relative">
              {(formik.values.userName || document.activeElement?.name === 'userName') && (
                <label 
                  htmlFor="userName" 
                  className="absolute -top-3 left-2 bg-white px-1 text-emerald-600 text-sm transition-all"
                >
                  {getLabel('userName')}
                </label>
              )}
              <input 
                type="text" 
                id="userName"
                name="userName"
                className="w-full p-4 text-gray-700 border-b border-gray-300 focus:outline-none focus:border-gray-500" 
                placeholder={!formik.values.userName ? 'userName' : ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
              />
              {formik.touched.userName && formik.errors.userName && (
                <div className="text-red-500 text-sm text-left mt-1">{formik.errors.userName}</div>
              )}
            </div>
            
            {/* Age Field */}
            <div className="mb-6 relative">
              {(formik.values.userAge || document.activeElement?.name === 'userAge') && (
                <label 
                  htmlFor="userAge" 
                  className="absolute -top-3 left-2 bg-white px-1 text-emerald-600  text-sm transition-all"
                >
                  {getLabel('userAge')}
                </label>
              )}
              <input 
                type="number" 
                id="userAge"
                name="userAge"
                className="w-full p-4 text-gray-700 border-b border-gray-300 focus:outline-none focus:border-gray-500" 
                placeholder={!formik.values.userAge ? 'userAge' : ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userAge}
              />
              {formik.touched.userAge && formik.errors.userAge && (
                <div className="text-red-500 text-sm text-left mt-1">{formik.errors.userAge}</div>
              )}
            </div>
            
            {/* Email Field */}
            <div className="mb-6 relative">
              {(formik.values.userEmail || document.activeElement?.name === 'userEmail') && (
                <label 
                  htmlFor="userEmail" 
                  className="absolute -top-3 left-2 bg-white px-1 text-emerald-600  text-sm transition-all"
                >
                  {getLabel('userEmail')}
                </label>
              )}
              <input 
                type="email" 
                id="userEmail"
                name="userEmail"
                className="w-full p-4 text-gray-700 border-b border-gray-300 focus:outline-none focus:border-gray-500" 
                placeholder={!formik.values.userEmail ? 'userEmail' : ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userEmail}
              />
              {formik.touched.userEmail && formik.errors.userEmail && (
                <div className="text-red-500 text-sm text-left mt-1">{formik.errors.userEmail}</div>
              )}
            </div>
            
            {/* Password Field */}
            <div className="mb-6 relative">
              {(formik.values.userPassword || document.activeElement?.name === 'userPassword') && (
                <label 
                  htmlFor="userPassword" 
                  className="absolute -top-3 left-2 bg-white px-1 text-emerald-600  text-sm transition-all"
                >
                  {getLabel('userPassword')}
                </label>
              )}
              <input 
                type="password" 
                id="userPassword"
                name="userPassword"
                className="w-full p-4 text-gray-700 border-b border-gray-300 focus:outline-none focus:border-gray-500" 
                placeholder={!formik.values.userPassword ? 'userPassword' : ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userPassword}
              />
              {formik.touched.userPassword && formik.errors.userPassword && (
                <div className="text-red-500 text-sm text-left mt-1">{formik.errors.userPassword}</div>
              )}
            </div>
            
            <button 
              type="submit" 
              className="bg-[#1abc9c] text-white px-8 py-3 rounded-md font-semibold hover:bg-cyan-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}