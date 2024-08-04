import Front from "../../components/Front/front";
import PersonalityCarousel from "../../components/PersonalityCarousel/PersonalityCarousel";
import Partners from "../../components/Partner/partners";
import Vision from "../../components/Vision/vision";

const About = () =>{
    const array=['/cocacola.webp','levis.png','NBA.png','timhortans.png','/cocacola.webp','levis.png','NBA.png','timhortans.png','/cocacola.webp','levis.png','NBA.png','timhortans.png','/cocacola.webp','levis.png','NBA.png','timhortans.png','/cocacola.webp','levis.png','NBA.png','timhortans.png'];
    const team=[
        {name:'Saib', img:'slide1a.jpeg',description:'hey this is my description........'},
        {name:'Saib2', img:'slide1a.jpeg',description:'hey this is my description.......'},
        {name:'Saib3', img:'slide1a.jpeg',description:'hey this is my description.......'},
        {name:'Saib4', img:'slide1a.jpeg',description:'hey this is my description.......'},
        {name:'Saib5', img:'slide1a.jpeg',description:'hey this is my description.......'},
    ]
    return(
        <div className="">
        <Front flag={false} title="About Us"/>
        <Partners array={array}/>
        <PersonalityCarousel personalities={false} team={team} bgColor={'#107063'} textColor={'white'} cartColor={'white'} title={'Meet the Team'} titleColor={'white'}/>
        <Vision/>
        </div>
        
    );
}
export default About;