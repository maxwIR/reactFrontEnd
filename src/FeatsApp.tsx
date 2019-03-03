import * as React from 'react';
import FeatSearch from './FeatSearch';
import FeatList from './FeatList';

class Feat extends React.Component {
	constructor(props: any) {
		super(props)
    }

	render() {
		return (
            <div>
                <FeatSearch />
                <hr/>
                <FeatList />
            </div>
		);
	}

}

export default FeatsApp