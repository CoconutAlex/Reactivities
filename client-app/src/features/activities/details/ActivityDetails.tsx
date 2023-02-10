import React from 'react';
import * as semanticUiReact from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activity: Activity;
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
}

export default function ActivityDetails({ activity, cancelSelectActivity, openForm }: Props) {
    return (
        <semanticUiReact.Card fluid>
            <semanticUiReact.Image src={`/assets/categoryImages/${activity.category}.jpg`} />
            <semanticUiReact.Card.Content>
                <semanticUiReact.Card.Header>{activity.title}</semanticUiReact.Card.Header>
                <semanticUiReact.Card.Meta>
                    <span>{activity.date}</span>
                </semanticUiReact.Card.Meta>
                <semanticUiReact.Card.Description>
                    {activity.description}
                </semanticUiReact.Card.Description>
            </semanticUiReact.Card.Content>
            <semanticUiReact.Card.Content extra>
                <semanticUiReact.Button.Group widths={2}>
                    <semanticUiReact.Button onClick={() => openForm(activity.id)} basic color='blue' content='Edit' />
                    <semanticUiReact.Button onClick={cancelSelectActivity} basic color='grey' content='Cancel' />
                </semanticUiReact.Button.Group>
            </semanticUiReact.Card.Content>
        </semanticUiReact.Card>
    )
}