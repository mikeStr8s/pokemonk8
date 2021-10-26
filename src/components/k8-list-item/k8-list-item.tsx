import React from 'react'
import './k8-list-item.css'
import pokeball from '../../assets/pokeball_sprite.svg'

export interface IK8ListItemProps {
    key: number;
    text: string;
}

class K8ListItemComponent extends React.Component<IK8ListItemProps> {

    text: string;
    key: number;

    constructor(props: IK8ListItemProps) {
        super(props);
        this.text = props.text;
        this.key = props.key;
    }

    render() {
        return (
            <div className="flex flex-row items-center" key={ this.key }>
                <img src={ pokeball } className="h-4 w-4 pr-1" />
                <span className="pl-1">{ this.text }</span>
            </div>
        )
    }
}

export default K8ListItemComponent
