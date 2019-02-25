import * as React from "react";
import * as ReactDOM from "react-dom";
import FeatList from './FeatList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<div>
   <FeatList />
</div>,
   document.getElementById("root")
);
//registerServiceWorker();