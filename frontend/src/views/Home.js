import React from 'react'
import AnimeList from '../components/animeList'
import '../css/home.css'
import '../css/parallax.css'

const Home = props => {
    console.log(props)
    return(
        <div className='main'>
            <main className="parallaxMain">

                <section className="parallaxSection parallaxSection--header">
                    <div className='headerContent'>
                        <h1 className='headerText'>MY APP</h1>
                        <p className='subText'>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps.</p>
                    </div>
                    <div className='gradient'/>
                </section>
                <section className="staticSection staticSection--base">
                    <div className='shows'>
                        <AnimeList header='Top 10 Anime' resource='/filter/top'  scroll='horizontal' theme={props.theme} />
                        <AnimeList header='All Anime This Season' resource='/'  scroll='horizontal' theme={props.theme}/>
                    </div>
                </section>
                <footer className='footerSection'>
                    <div className='footerContent'>
                    <h2 className='footerText'>FOOTER</h2>
                    <p className='subText'>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules.</p>
                    </div>
                </footer>
            </main>
        </div>
    )
}
export default Home