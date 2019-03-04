import * as React from 'react';

interface IFeatSearchProps{
   updateList: (featList:any[]) => void,
}

class FeatSearch extends React.Component <IFeatSearchProps> {
	constructor(props: any) {
      super(props);
      const featList = [];
      this.props.updateList(featList);
      this.search = this.search.bind(this);
   }

   search(e){
      e.preventDefault();
      const featList = [
         {
            name: "Dodge",
            description: "Jump out of the way!"
         },
         {
            name: "Weapon Finesse",
            description: "You know your way around the weapon of your choice"
         }
      ];
      this.props.updateList(featList);
   }

	render() {
		return (
         <div className="featSearch">
            <h2>Search</h2>
            <form onSubmit={this.search}>
               <span>
                  Base Attack Bonus: <input type="text" name="bab"/> <br/>
               </span>
               <p>Caster Level:</p> <input type="text" name="cl"/> <br/>
               <span>
                  <p>
                     Feats:
                  </p>
                  <input type="text" name="feats"/> <br/>
               </span>
               <input type="submit" value="Submit"/>
            </form>
         </div>
		)
	}
}

export default FeatSearch;
