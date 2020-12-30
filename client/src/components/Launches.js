import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query, Mutation, Subscription } from '@apollo/client/react/components';
import { graphql } from '@apollo/client/react/hoc';

import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
query LaunchesQuery {
    launches {
        flight_number
        mission_name
        launch_date_local
        launch_success
    }
}
`;

export class Launches extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="display-4 my-3">SpaceX Launches</h1>
                <MissionKey />
                <Query query={LAUNCHES_QUERY}>
                    {
                        ({ loading, error, data}) => {
                            if(loading) return <h4>Loading.....</h4>
                            if(error) return <h4>Error returned. Data could not be loaded</h4>                        
                            return <Fragment>
                                {
                                    data.launches.map(launch => (
                                        <LaunchItem key={launch.flight_number} launch={launch} />
                                    ))
                                }
                            </Fragment>;
                        }
                    }
                </Query>
            </Fragment>
        )
    }
}

export default Launches