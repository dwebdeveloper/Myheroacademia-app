import React, { Component } from 'react';
import HeroLicense from '../../components/HeroLicense/HeroLicense';
import MyHero from '../../components/MyHero/MyHero';
import heroAcademiaApi from '../../HeroAcademiaApi';
import '../MyHeroes/MyHeroes.css';

class MyHeroes extends Component {
    state = {
        character: [],
        images: [],
        selectedHeroId: null,
        error: false
    }

    componentDidMount = () => {
        /*for (let i = 0; i <= 2; i++) {
            heroAcademiaApi.get('/character?page=' + i)
                .then(MyHeroes => {
                    let character = []
                    const myHeroes = MyHeroes.data;
                    //console.log(myHeroes);
                    const heroes = myHeroes.result;
                    character.push(heroes);
                    //console.log(character)
                    this.setState({ character: [...character] })
                    console.log(this.state.character)
                })
                .catch(error => {
                    this.setState({ error: true })
                });
        }*/
        heroAcademiaApi.get('?quirk=One For All')
            .then(MyHeroes => {
                const myHeroes = MyHeroes.data;
                //console.log(myHeroes);
                const heroes = myHeroes.result;
                //console.log(heroes)
                const character = heroes.map(hero => { return { ...hero } });
                this.setState({ character: character })
                console.log(this.state.character);
            })
            .catch(error => {
                this.setState({ error: true })
            });
    }
    heroSelectedHandler = (id) => {
        //console.log('Clicked');
        this.setState({ selectedHeroId: id });
    }

    render() {

        let heroes
        if (!this.state.error) {
            heroes = this.state.character.map(hero => {
                return (
                    <MyHero
                        images={hero.images[0]}
                        key={hero.id}
                        name={hero.name}
                        gender={hero.gender}
                        quirk={hero.quirk}
                        occupation={hero.occupation}
                        hair={hero.hair}
                        eye={hero.Eye}
                        clicked={() => this.heroSelectedHandler(hero.id)}
                    />
                )
            })
        }

        return (
            <div>
                <section className="Heroes">
                    {heroes}
                </section>

                <section>
                    <HeroLicense id={this.state.selectedHeroId} />
                </section>
            </div >


            /* <section>
                    <NewHero />
            </section>
                    */
        )
    }
}

export default MyHeroes;