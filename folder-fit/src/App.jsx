import React from 'react'
import Card from './components/Card'
import './App.css'
const App = () => {


  const jobListings = [
    {
      companyName: "TechNova Pvt Ltd",
      jobTitle: "Frontend Developer",
      postedBy: "Akash Gupta",
      experience: "3–5 Years",
      salary: "₹7,00,000 - ₹9,00,000 / year"
    },
    {
      companyName: "PixelCraft Studio",
      jobTitle: "UI/UX Designer",
      postedBy: "Aanchal Sharma",
      experience: "2–4 Years",
      salary: "₹5,50,000 - ₹7,00,000 / year"
    },
    {
      companyName: "CloudSync Technologies",
      jobTitle: "React.js Developer",
      postedBy: "Rohit Mehta",
      experience: "4–6 Years",
      salary: "₹9,00,000 - ₹12,00,000 / year"
    },
    {
      companyName: "DataNex Solutions",
      jobTitle: "Backend Engineer",
      postedBy: "Priya Verma",
      experience: "3–5 Years",
      salary: "₹8,00,000 - ₹10,00,000 / year"
    },
    {
      companyName: "SoftEdge Infotech",
      jobTitle: "WordPress Developer",
      postedBy: "Ankit Patel",
      experience: "1–3 Years",
      salary: "₹4,50,000 - ₹6,00,000 / year"
    }
  ];
  

  return (
    <>
   <div className='parent'>
      {jobListings.map((jobelement, idx)=>{
return(
  <div key={idx}>
  <Card company={jobelement.companyName} jobt={jobelement.jobTitle} postedby={jobelement.postedBy} exp={jobelement.experience} salary={jobelement.salary} />
</div>

 
)

      })}
    </div>
    </>
  )
}

export default App
