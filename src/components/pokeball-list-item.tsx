import React from 'react'
import './pokeball-list-item.css'
import pokeball from '../assets/pokeball_sprite.svg'

export interface IPokeballListItemProps {
    text: string;
}

class PokeballListItemComponent extends React.Component<IPokeballListItemProps> {

    text: string;

    constructor(props: IPokeballListItemProps) {
        super(props);
        this.text = props.text;
    }

    render() {
        return (
            <div className="list-item">
                <img src={pokeball} className="pokeball" />
                <span className="list-text">{ this.text }</span>
            </div>
        )
    }
}

export default PokeballListItemComponent
