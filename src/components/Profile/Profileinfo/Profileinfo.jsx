import React from 'react'
import s from './Profileinfo.module.css'
import img from '../../../img/main_img.jpg'

export default function ProfileInfo() {
    
    return (
        <div>
            <div>
                <img src={img} alt="main"></img>
            </div>
            <div className={s.descriptionBlock}>
                <img style={{width: '50px'}} src="http://steklovdom.by/wp-content/gallery/children/thumbs/thumbs_children_add_16.jpg" alt="logo2"></img>
            </div>
        </div>
    )
}
