import React, { Component } from "react";
class MemeGenerator extends Component{
    constructor(){
        super()
        this.state={
            topText : "",
            bottomText : "",
            randomImg :"http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleGenClick = this.handleGenClick.bind(this)
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response =>{
                const {memes} = response.data
                this.setState({
                    allMemeImgs: memes
                })
            })
        
    }
    handleChange(event){
        const {name,value} = event.target
        this.setState(
            {
                [name] : value
            }
        )
    }
    handleGenClick(event){
        event.preventDefault()
        const selectedMeme = this.state.allMemeImgs[Math.floor(Math.random()* this.state.allMemeImgs.length)]
        this.setState(
            {randomImg: selectedMeme.url}
        )
    }
    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleGenClick}>

                    <input 
                        placeholder = "Top Text"
                        name = "topText"
                        type="text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />

                    <input 
                        placeholder = "Bottom Text"
                        name = "bottomText"
                        type="text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="Problem"/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>

                </div>
            </div>
        )
    }
}
export default MemeGenerator