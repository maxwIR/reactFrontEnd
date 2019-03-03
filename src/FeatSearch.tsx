import * as React from 'react';

class FeatSearch extends React.Component {
	constructor(props: any) {
      super(props);
    }

    search(e){
        e.preventDefault();
        
    }

	render() {
		return (
            <div className="featSearch">
                <h2>Search</h2>
                <form onSubmit={this.search}>
                    Class: <input type="text" value="Mickey"/> <br/>
                    Bass Attack Bonus: <input type="text" name="lastname" value="Mouse"/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
		)
	}
}

export default FeatSearch;
