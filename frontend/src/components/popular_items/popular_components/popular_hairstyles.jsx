import React from 'react'
import style1 from './hairstyles/1-trending-hairstyle-for-women-CNfIfNdDDYf.jpeg'
import style2 from './hairstyles/1-voluminous-lob-haircut-with-bangs-CLJg371BdpY.jpeg'
import style3 from './hairstyles/10-medium-multi-colored-hair-CPo1nN_Le5v.jpeg'
import style4 from './hairstyles/12-long-shaggy-bob-haircut-B56DTa0BthM.jpeg'
import style5 from './hairstyles/4-medium-hair-with-wispy-bangs-CO0BCGpjXwf.jpeg'
import style6 from './hairstyles/8-shag-haircut-with-bangs-B32dmpRlowA.jpeg'

class PopularItems extends React.Component {
    render() {
        return (
                <div className = "style-item-container">
               <div className = "style-item">
                <div className = "style-item-picture">
                    <img src={style1} alt = "Hich whyyyyy"/>
                </div>
                <div className = "style-item-name">Wavy Cut<br/>with Curtain Bangs</div>
               </div>
               <div className = "style-item">
                <div className = "style-item-picture">                    
                    <img src={style2} alt = "seriously"/>
                </div>
                <div className = "style-item-name">Lob with<br/>Face-Framing Bangs</div>
               </div>
               <div className = "style-item">
                <div className = "style-item-picture">                    
                    <img src={style3} alt = "it's saturday night"/>
                </div>
                <div className = "style-item-name">Tousled<br/>Multi-Colored</div>
               </div>
               <div className = "style-item">
                <div className = "style-item-picture">                    
                    <img src={style4} alt = "I have better things to do"/>
                </div>
                <div className = "style-item-name">Tousled<br/>Lob Haircut</div>
               </div>
               <div className = "style-item">
                <div className = "style-item-picture">                    
                    <img src={style5} alt = "...alright I don't"/>
                </div>
                <div className = "style-item-name">Wispy Bangs<br/>for Medium Hair</div>
               </div>
               <div className = "style-item">
                <div className = "style-item-picture">                    
                    <img src={style6} alt = "fine I don't"/>
                </div>
                <div className = "style-item-name">Curtain Bangs<br/>and Shag Haircut</div>
               </div>
               </div>
        )
    }
}

export default PopularItems