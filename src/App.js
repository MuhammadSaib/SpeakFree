import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import HomeBackground from './components/HomeBackground';
import Carousel from './components/carousel';
import PersonalityCarousel from './components/PersonalityCarousel';
import Sponsors from './components/sponsors';


function App() {
  const data =[
    {
      title:'What is Stammering?',
      description1:'Stammering, or stuttering, disrupts speech fluency with involuntary repetitions and pauses,often starting in childhood. Its exact cause is complex, involving genetic, neurological, and environmental factors.',
      description2:"Living with stammering can lead to social stigma and discrimination, impacting self-esteem. However, it's crucial to understand that stammering doesn't reflect intelligence or capability.",
      img1:'slide1a.jpeg',
      img2:'slide1b.jpeg',
      bgColor:'#107063',
      textColor:'white',
      flag:true
    },
    {
      title:'Why it’s important to talk about Stammering?',
      description1:'Stammering, or stuttering, disrupts speech fluency with involuntary repetitions and pauses,often starting in childhood. Its exact cause is complex, involving genetic, neurological, and environmental factors.',
      description2:"Living with stammering can lead to social stigma and discrimination, impacting self-esteem. However, it's crucial to understand that stammering doesn't reflect intelligence or capability.",
      img1:'slide1a.jpeg',
      img2:'slide1b.jpeg',
      bgColor:'#EFBF3C',
      textColor:'black',
      flag:false
    },
    {
      title:'How We Can Eliminate Stammering?',
      description1:'Stammering, or stuttering, disrupts speech fluency with involuntary repetitions and pauses,often starting in childhood. Its exact cause is complex, involving genetic, neurological, and environmental factors.',
      description2:"Living with stammering can lead to social stigma and discrimination, impacting self-esteem. However, it's crucial to understand that stammering doesn't reflect intelligence or capability.",
      img1:'slide1a.jpeg',
      img2:'slide1b.jpeg',
      bgColor:'#EEEBD3',
      textColor:'black',
      flag:true
    }
   ];
   const personalities = [
    {
      img:'/bgImg.jpeg',
      name:'Saib',
      description:'Designation,Occupation etc'
    },
    {
      img:'/bgImg.jpeg',
      name:'Saib2',
      description:'Designation,Occupation etc'
    },
    {
      img:'/bgImg.jpeg',
      name:'Saib3',
      description:'Designation,Occupation etc'
    },
    {
      img:'/bgImg.jpeg',
      name:'Saib4',
      description:'Designation,Occupation etc'
    },
    {
      img:'/slide1a.jpeg',
      name:'Saib5',
      description:'Designation,Occupation etc'
    },
    {
      img:'/slide1b.jpeg',
      name:'Saib6',
      description:'Designation,Occupation etc'
    },
    {
      img:'/bgImg.jpeg',
      name:'Saib7',
      description:'Designation,Occupation etc'
    },
    {
      img:'/bgImg.jpeg',
      name:'Saib8',
      description:'Designation,Occupation etc'
    },
    {
      img:'/bgImg.jpeg',
      name:'Saib9',
      description:'Designation,Occupation etc'
    },
    {
      img:'/bgImg.jpeg',
      name:'Saib10',
      description:'Designation,Occupation etc'
    }
   ];
   const array=['/cocacola.webp','levis.png','NBA.png','timhortans.png'];
  return (
     
     <div className="">
      <Sponsors array={array}/>
      <Carousel slides={data}/>
      <PersonalityCarousel personalities={personalities}/>
     </div>
  );
}
export default App;
