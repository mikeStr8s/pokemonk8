import React from 'react'
import K8ListItemComponent from '../k8-list-item/k8-list-item';
import './k8-list.css'

export interface IK8ListProps {
    items: string[];
}

class K8ListComponent extends React.Component<IK8ListProps> {

    items: JSX.Element[];

    constructor(props: IK8ListProps) {
        super(props);
        this.items = this.generateList(props.items);

    }

    generateList(items: string[]): JSX.Element[] {
        return items.map(item => <K8ListItemComponent text={item} />);
    }

    render() {
        return (
            <div className="list">{ this.items }</div>
        )
    }
}

export default K8ListComponent
