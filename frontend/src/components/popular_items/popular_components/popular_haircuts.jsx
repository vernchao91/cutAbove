import React from 'react'
import baldFade from './haircut_images/bald-fade.jpg'
import coolFlowTapered from './haircut_images/cool-flow-tapered.jpg'
import lowFade from './haircut_images/low-fade.jpg'
import mediumLengthLowFade from './haircut_images/medium-length-low-fade.jpg'
import sidePart from './haircut_images/side-part.jpg'
import undercut from './haircut_images/undercut-long-fringe.jpg'

class PopularItems extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            styles: this.props.styles
        }
    }

    // componentDidMount() {
    //     this.props.fetchStyles()
    // }

    haircutArray() {
        if (!this.props.styles) return null
        const { styles } = this.props
        let newArr = []
        for(let i = 0; i < styles.length; i++) {
            if(styles[i].styleType === "Haircut") {
                newArr.push(styles[i])
            }
        }
        return newArr
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    renderSixRandomStyles() {
        let haircutArray = this.haircutArray()
        let newArr = []
        if(haircutArray.length === 0) {return null} else {
            while (newArr.length < 6) {
                let randomNum = this.getRandomInt(haircutArray.length)
                let haircut = haircutArray[randomNum];
                if(!newArr.includes(haircut)) {
                    newArr.push(haircut)
                }
                console.log(newArr)
                console.log(haircut)
            }
            let popularHaircut = newArr.map((haircut,i) => 
                <div className="style-item" key={i}>
                    <div className="style-item-picture">
                        <img src={haircut.imageUrl} alt=""/>
                        <div className="style-item-name">
                            {haircut.description}
                        </div>
                    </div>
                </div>
            )
            return popularHaircut
        }
    }

    render() {
        if (!this.props.styles) return null

        return (
            <div className = "style-item-container">
                {/* {this.renderSixRandomStyles()} */}
               <div className = "style-item">
                <div className = "style-item-picture">
                    <img src={baldFade}/>
                </div>
                <div className = "style-item-name">Medium Bald Fade</div>
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