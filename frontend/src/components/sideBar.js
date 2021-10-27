import React from 'react'
import '../css/sideBar.css'

const Sidebar = (props) => {
				
    return (
        <div>
        <div className={'visible-'+props.show.toString()+'-sidebar'}>
            <p>test1</p>
            <p>test2</p>
            <p>test3</p>
            </div>
            <div className={'visible-'+props.show.toString()+'-overlay'}/>
        </div>

    )
}

export default Sidebar