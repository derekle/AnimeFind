// home - handles rendering the homepage of our application - stateless

//react
import React from 'react'

//components
import AnimeList from '../components/animeList'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

//css
import '../css/home.css'
import '../css/parallax.css'

//contains styling for giving a parallax scroll effect. Big thanks to https://www.digitalocean.com/community/tutorials/css-pure-css-parallax for providing a small tutorial on achieving this effect.
const Home = props => {
    console.log(props)
    return(
        <div className='main'>
            <main className="parallaxMain">

                <section className="parallaxSection parallaxSection--header">
                    <div className='headerContent'>
                        <h1 className='headerText'>AnimeFind</h1>
                        <p className='subText'>Discover details about current, past, and upcoming anime. Check our recommendations below, or being a search above.</p>
                    </div>
                    <div className='gradient'>
                        <div className='arrow'><KeyboardArrowDownIcon fontSize='large'/></div>
                    </div>
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