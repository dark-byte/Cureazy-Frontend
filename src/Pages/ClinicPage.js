import { Link, useParams } from 'react-router-dom';
import NavFixed from '../Components/NavFixed'
import GridGallery from '../Components/GridGallery';
import images from '../Components/Data/images';
import ClinicTitle from '../Components/ClinicTitle';
import clinicInfo from '../Components/Data/clinicInfo';
import Specialists from '../Components/Specialists';
import Footer from '../Components/Footer';

const ClinicPage = () => {
  const {id } = useParams()
  // useEffect((
  //     getData()
  // ), [])

  // const getData = ()=>{
  //   // axios.get(`https://localhost/5000/clinic/{id}`).then((data))
  // }

  return (  
    <div>
        <NavFixed/>
      <div className='clinic-page'>
          <p>
            <Link className='aTag' to="/home">
              Bhuvaneswar 
            </Link> / { id}
          </p>
        <GridGallery images = {images}/>
        <ClinicTitle {...clinicInfo}/>
        <Specialists/>
      </div>
        <Footer/>
    </div>
  );
}

export default ClinicPage;