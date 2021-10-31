import React from 'react'
import App from '../App';
import AnimeList from '../components/animeList'
import '../css/search.css'

import { connect } from 'react-redux'


const Search = props => {
    console.log(props)
    return(
        <div className='main'>
            <main className='searchResults'>
                <section className="staticSection parallaxSection--header">
                    <div className='headerContent'>
                        <h1 className='headerText'>Search</h1>
                    </div>
                    <div className='gradient'/>
                </section>
                <section className="staticSection staticSection--base">
                    <div className='shows'>
                        <AnimeList className='searchResults' header='Results' resource={'/search/'+(props.query.text||'')}  scroll='vertical' theme={props.theme}/>
                    </div>
                </section>

            </main>
            <section className='footerSection'>
                <div className='footerContent'>
                <h2 className='footerText'>FOOTER</h2>
                <p className='subText'>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules.</p>
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = (state) => {
	return {
        query: state.query
	};
};

export default connect(mapStateToProps)(Search)