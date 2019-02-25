import * as React from 'react';
import Feat from './Feat';

interface ListState {
   feats: any[]
}

class FeatList extends React.Component<{}, ListState> {
	constructor(props: any) {
      super(props);
      this.state = {
			feats: [
				{
					name: "Dodge",
					description: "Jump out of the way!"
				},
				{
					name: "Weapon Finesse",
					description: "You know your way around the weapon of your choice"
				}
         ]
      };
      this.displayFeat = this.displayFeat.bind(this);
   }
   displayFeat(feat: any, i: number) {
      return (
			<Feat>
				  {feat}
		   </Feat>
		);
   }
	render() {
		return (
         <div className="featList">
            <h2> Feat List </h2>
            {this.state.feats.map(this.displayFeat)}
         </div>
		)
	}
}

export default FeatList;