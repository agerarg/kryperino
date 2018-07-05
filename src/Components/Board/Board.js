import React, {Component} from 'react';

import Card from './Enemy/Card';
class Board extends Component {

    render(){


        return (
        <div className="BoardGame">
             <div className="LeftBoard">Left</div>
            <div className="CenterBoard">
                <div className="enemyCards">
                    <Card id="1" /><Card id="1" /><Card id="1" /><Card id="1" /><Card id="1" /><Card id="1" /><Card id="1" /><Card id="1" />
                </div>
                <div className="AllyCards">
                    <Card id="1" /><Card id="1" /><Card id="1" /><Card id="1" /><Card id="1" /><Card id="1" /><Card id="1" /><Card id="1" />
                </div>
            </div>
            <div className="RightBoard">Right</div>
       </div>
        )
    }

}

export default Board;