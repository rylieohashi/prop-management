import React, { Component } from 'react';

class TabNav extends Component {
    render() {
        return (
            <div className='tab-nav'>
                <div className='tab-nav__tabs'>
                    {
                        this.props.tabs.map((tab, index) => {  //we want to go into the tab and render the components
                            return <a className='tab-nav__tab'>{tab.title}</a>
                        })
                    }
                </div>
                <div>requests or newsletter content goes here</div>
                
            </div>
        )

        // var JSX = [
        //     <h1>TABS</h1>
        // ];

        // this.props.tabs.map((tab, index) => {
        //     JSX.push(tab.component);
        // })

        // return JSX;
    }
}

export default TabNav;