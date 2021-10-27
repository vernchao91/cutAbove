import React from 'react'
// import style1 from './hairstyles/1-trending-hairstyle-for-women-CNfIfNdDDYf.jpeg'
// import style2 from './hairstyles/1-voluminous-lob-haircut-with-bangs-CLJg371BdpY.jpeg'
// import style3 from './hairstyles/10-medium-multi-colored-hair-CPo1nN_Le5v.jpeg'
// import style4 from './hairstyles/12-long-shaggy-bob-haircut-B56DTa0BthM.jpeg'
// import style5 from './hairstyles/4-medium-hair-with-wispy-bangs-CO0BCGpjXwf.jpeg'
// import style6 from './hairstyles/8-shag-haircut-with-bangs-B32dmpRlowA.jpeg'

class PopularHairstyles extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            styles: this.props.styles
        }
    }

    hairstyleArray() {
        if (!this.props.styles) return null
        const { styles } = this.props
        let newArr = []
        for(let i = 0; i < styles.length; i++) {
            if(styles[i].styleType === "Hairstyle") {
                newArr.push(styles[i])
            }
        }
        return newArr
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    renderSixRandomStyles() {
        let hairstyleArray = this.hairstyleArray()
        let newArr = []
        if(hairstyleArray.length === 0) {return null} else {
            while (newArr.length < 6) {
                let randomNum = this.getRandomInt(hairstyleArray.length)
                let haircut = hairstyleArray[randomNum];
                if(!newArr.includes(haircut)) {
                    newArr.push(haircut)
                }
                console.log(newArr)
                console.log(haircut)
            }
            let popularHairstyle = newArr.map((hairstyle,i) => 
                <div className="style-item" key={i}>
                    <div className="style-item-picture">
                        <img src={hairstyle.imageUrl} alt=""/>
                        <div className="style-item-name">
                            {hairstyle.description}
                        </div>
                    </div>
                </div>
            )
            return popularHairstyle
        }
    }
    
    render() {
        if (!this.props.styles) return null
        return (
            <div className = "style-item-container">
                {this.renderSixRandomStyles()}
               {/* <div className = "style-item">
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
               </div> */}
            </div>
        )
    }
}

export default PopularHairstyles