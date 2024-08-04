import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../../pages/Home/home.css';

const Partners = ({array}) =>{
    return(
       <div className="container mt-5 pt-5 pb-5">
        <div className=" font-family text-center pb-5 mb-5 partner-font" >
                Our Partners
        </div>
        <div className="row pb-5">
            {array.map((element,index)=>(
               <div className="col-lg-2 col-sm-4 col-4 col-md-3" key={index} >
                <div className="row justify-content-center">
                    <div className="col-6">
                     <img src={element} className='img-fluid' alt="" />
                    </div>
                </div>
               </div>
            ))}
        </div>
       </div>
    );
}
export default Partners;