import React, { Component } from 'react';
//setting navbar contents into a aray 
const listNames = [
    'Nautilus',
    'ISSUES',
    'TOPICS',
    'BLOG',
    'NEWSLETTER',
    'FACEBOOK',
    'TWITTER',
    'LOGIN',
    'SUBSCRIBE'
]



class Header extends Component {
    render() {
        return (
            <ul className="nav">
                {   
            //mapping through the array and passing in name/content
                    listNames.map(name => {
                        if(name === 'Nautilus') 
                            return <li className="nav1">{name}</li>
                        if(name === 'SUBSCRIBE') 
                            return <li> <button className="navb" type="button">{name}</button> </li>
                        return <LinkTag tagName={name}/>
                    })
                }
            </ul>
        ) 
    }
}
// links reapeat so i can make another component 
class LinkTag extends Component {
    render() {
        return (
            <li className="navl"><a href="#">{this.props.tagName}</a></li>
        )   
    }
}





export default Header;


