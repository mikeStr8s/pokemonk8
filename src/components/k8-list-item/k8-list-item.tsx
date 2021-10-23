import React from 'react'
import './k8-list-item.css'
import pokeball from '../../assets/pokeball_sprite.svg'

export interface IK8ListItemProps {
    text: string;
}

class K8ListItemComponent extends React.Component<IK8ListItemProps> {

    text: string;

    constructor(props: IK8ListItemProps) {
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

export default K8ListItemComponent
