import React from 'react';

import './directory.style.scss';

import MenuItem from '../menu-item/menu-item.component.jsx';

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [{
                title:'hats',
                imgurl:'https://img5.cfcdn.club/6f/ec/6f210b6fa27081a55ff525d47a4950ec_350x350.jpg',
                id:1,
                linkUrl: 'hats'
            },
            {
                title:'jackets',
                imgurl:'https://img5.cfcdn.club/90/98/901c95e49356265c090eb9f97e9f9598_350x350.jpg',
                id:2,
                linkUrl:''
            },
            {
                title:'sneakers',
                imgurl:'https://static2.fashionbeans.com/wp-content/uploads/2018/07/11sneakers-top-1.jpg',
                id:3,
                linkUrl:''
            },
            {
                title:'womens',
                imgurl:'https://areskee.com/images/detailed/21/cline-stylish-womens-wool-and-felt-hat-by-buy-now-at-areskee.com-19886_itxk-kv.jpg',
                id:4,
                size:'large',
                linkUrl:''
            },
            {
                title:'mens',
                imgurl:'https://edge.alluremedia.com.au/uploads/businessinsider/2015/12/style-man.jpg',
                id:5,
                size:'large',
                linkUrl:''
            }
        ]
        };
    }
    render(){
        return(
            <div className='directory-menu'>
                {this.state.sections.map(({id,...otherSectionProps})=>(
                    <MenuItem key={id} {...otherSectionProps}/>
                ))}
            </div>
        );
    }
}

export default Directory;