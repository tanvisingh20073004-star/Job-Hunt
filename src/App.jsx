import React from 'react'
import Card from './components/Card';
const 
App = () => {
  
  return (
    <div className="parent"> 
      
        <Card company="Microsoft" role="Senior Software Developer" pay="750$" location="Bangalore" logo='https://static.vecteezy.com/system/resources/previews/021/514/825/original/microsoft-software-brand-logo-symbol-with-name-design-illustration-with-black-background-free-vector.jpg'/>
         <Card company="Google" role="HR Manager" pay="580$" location="Hyderabad" logo="https://tse3.mm.bing.net/th/id/OIP.Kg2FF2wpIK_HLyo8Q56ycAHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"/>
         <Card company="Amazon" role="DevOps Engineer" pay="790$" location="Noida" logo='https://tse1.mm.bing.net/th/id/OIP.mfjIDgZfzL5i-BViz7SCnwHaD4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'/>
         <Card company="Flipkart" role="Business Analyst" pay="500$" location="Hyderabad" logo="https://tse2.mm.bing.net/th/id/OIP.OQrbMsmN86RrB-hXq7AfSQHaHY?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"/>
      </div>
      
    
  )
}

export default 
App
