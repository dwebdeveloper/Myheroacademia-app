import React, { Component } from 'react';
import '../MyHero/MyHero.css';

class MyHero extends Component {
    /*
    testing below
        componentDidMount = () => {
            heroAcademiaApi.get('/character/Toshinori_Yagi')
                .then(herodata => {
                    this.setState({ character: herodata.data, images: herodata.data.images });
                    console.log(this.state.character);
                })
                .catch(error => {
                    this.setState({ error: true })
                });
        }*/

    render() {
        return (
            <article className='heroCard' onClick={this.props.clicked}>

                <h1>{this.props.name}</h1>

                <img src={this.props.images} alt={this.props.name} className='heroImage' />

                <ul >
                    <li className='heroInfo'>Quirk: {this.props.quirk}</li>
                </ul>
            </article>
        )
    }
}

export default MyHero;