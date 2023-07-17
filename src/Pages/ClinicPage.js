import axios from 'axios';
import React, { useEffect } from 'react';

const ClinicPage = ({id}) => {
    useEffect((
        getData()
    ), [])

    const getData = ()=>{
            axios.get(`https://localhost/5000/clinics/{id}`).then((data))
        }
  return (
    
    <div>
      
    </div>
  );
}

export default ClinicPage;
