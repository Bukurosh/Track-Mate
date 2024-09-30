/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


// import React, { useState } from 'react';

// function FAQPage() {
//   const faqData = [
//     {
//       question: 'What is an FAQ section?',
//       answer: 'An FAQ section can be used to quickly answer common questions about your business like "Where do you ship to?", "What are your opening hours?", or "How can I book a service?"..',
//     },
//     {
//       question: 'Why do FAQs matter?',
//       answer: 'FAQs are a great way to help site visitors find quick answers to common questions about your business and create a better navigation experience.',
//     },
//     {
//       question: 'Where can I add my FAQs?',
//       answer: 'FAQs can be added to any page on your site or to your Wix mobile app, giving access to members on the go.',
//     },

//     {
//       question: 'How do I add a new question & answer?',
//       answer: 'To add a new FAQ follow these steps: 1. Manage FAQs from your site dashboard or in the Editor  2. Add a new question & answer 3. Assign your FAQ to a category 4. Save and publish.You can always come back and edit your FAQs.',
//     },
   
//   ];

//   return (
//     <>
//       <p className="text-white text-6xl ml-36 mt-36">FAQ</p>
//       <p className="text-white text-2xl mt-12 ml-[600px]">Frequently asked questions</p>

//       <div className="mt-12 ml-36 space-y-8">
//         {faqData.map((item, index) => (
//           <FAQItem key={index} question={item.question} answer={item.answer} />
//         ))}
//       </div>
//     </>
//   );
// }

// function FAQItem({ question, answer }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleOpen = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <h3
//         onClick={toggleOpen}
//         className="text-white text-2xl cursor-pointer"
//       >
//         {question}
//       </h3>
//       {isOpen && <p className="text-white text-xl mt-2 ml-4">{answer}</p>}
//     </div>
//   );
// }

// export default FAQPage;
