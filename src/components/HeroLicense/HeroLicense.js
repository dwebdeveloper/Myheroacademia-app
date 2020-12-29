import React, { Component } from 'react';
import heroAcademiaApi from '../../HeroAcademiaApi';
import '../HeroLicense/HeroLicense.css';

class HeroLicense extends Component {
    state = {
        licenses: null
    }

    componentDidUpdate() {
        if (this.props.id) {
            let heroCard = this.state.licenses;
            if (!heroCard || (heroCard && heroCard.id !== this.props.id)) {
                heroAcademiaApi.get('/' + this.props.id)
                    .then(hero => {
                        //console.log(hero.data);
                        this.setState({ licenses: hero.data });
                    })
            }
        }

    }

    render() {
        let selectedHero = <p style={{ textAlign: 'center' }}>Select a Hero!</p>;
        if (this.props.id) {
            selectedHero = <p style={{ textAlign: 'center' }}>Loading Hero Card!</p>;
        }
        if (this.state.licenses) {
            let heroCard = this.state.licenses;
            selectedHero = (
                <div className='HeroCard'>
                    <h1>Hero License</h1>
                    <img src={heroCard.images[0]} alt='alll' />
                    <h2>{heroCard.name}</h2>
                    <ul>
                        <li>Quirk: {heroCard.quirk}</li>
                        <li>Alais: {heroCard.alias}</li>
                        <li>Status: {heroCard.status}</li>
                        <li>Epithet: {heroCard.epithet}</li>
                        <li>Occupation: {heroCard.occupation}</li>
                        <li>Gender: {heroCard.gender}</li>
                    </ul>
                    <p>{heroCard.description}</p>
                </div>
            )
        }
        return selectedHero

    }
}

export default HeroLicense;