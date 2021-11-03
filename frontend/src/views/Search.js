// search - handles rendering the page for search results - stateless
//react
import React from 'react'

// retrieve the current queried term, which is stored in the redux store.
import { useSelector } from 'react-redux'

//components
import AnimeList from '../components/animeList'

//css
import '../css/search.css'

//js 
import { parseQueryURL } from '../js/math'

const Search = props => {
    const query = useSelector((state) => state.query)
    const resource = parseQueryURL()
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
                        <AnimeList id='searchlist' className='searchResults' header='Results' resource='/search/' query={query.url||resource} scroll='vertical' theme={props.theme}/>
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

export default Search