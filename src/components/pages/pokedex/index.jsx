import React from 'react'

import { PokedexLeft} from '../../containers/pokedex-left'
import { PokeRightBack} from '../../containers/pokedex-right'

export const Pokedex = () =>{
    return (
        <div className="pokedex">
            
                <PokedexLeft />
                <div className="pokedex-right-front" />

                <div className="pokedex-right-back">
                    <PokeRightBack />
                </div>
        </div>
    )
}