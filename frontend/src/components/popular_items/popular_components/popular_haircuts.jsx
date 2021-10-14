import React from 'react'
import baldFade from './haircut_images/bald-fade.jpg'
import coolFlowTapered from './haircut_images/cool-flow-tapered.jpg'
import lowFade from './haircut_images/low-fade.jpg'
import mediumLengthLowFade from './haircut_images/medium-length-low-fade.jpg'
import sidePart from './haircut_images/side-part.jpg'
import undercut from './haircut_images/undercut-long-fringe.jpg'

class PopularItems extends React.Component {
    render() {
        return (
                <div className = "style-item-container">
               <div className = "style-item">
                <div className = "style-item-picture">
                    <img src={baldFade}/>
                </div>
                <div className = "style-item-name">Medium<br/>Bald Fade</div>
               </div>
               <div className = "style-item">
                <div className = "style-item-picture">                    
                    <img src={coolFlowTapered}/>
                </div>
                <div className = "style-item-name">Cool Flow<br/>Tapered</div>
               </div>
               <div className = "style-item">
                <div className = "style-item-picture">                    
                    <img src={lowFade}/>
                </div>
                <div className = "style-item-name">Low Fade</div>
               </div>
               <div className = "style-item">
                <div className = "style-item-picture">                    
                    <img src={mediumLengthLowFade}/>
                </div>
                <div className = "style-item-name">Medium Length<br/>Low Fade</div>
               </div>
               <div className = "style-item">
                <div className = "style-item-picture">                    
                    <img src={sidePart}/>
                </div>
                <div className = "style-item-name">Side Part<br/>Mid-Fade</div>
               </div>
               <div className = "style-item">
                <div className = "style-item-picture">                    
                    <img src={undercut}/>
                </div>
                <div className = "style-item-name">Undercut<br/>Long Fringe</div>
               </div>
               </div>
        )
    }
}

export default PopularItems