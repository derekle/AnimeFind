//react
import React from 'react';
import {useParams} from "react-router-dom";

//components
import InfoContainer from '../components/infoContainer'

//css
import '../css/info.css'


const Info = props => {
  console.log(props)
  let { topicId } = useParams();

  return (
    <div>
      <InfoContainer resource={'/info/' + topicId} />
      <footer className='footerSection'>
          <div className='footerContent'>
            <h2 className='footerText'>FOOTER</h2>
            <p className='subText'>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules.</p>
          </div>
      </footer>
    </div>

  );
}

export default Info