import React from "react"
import { useSwipeable, Swipeable } from "react-swipeable";

let arr = ["Choose for me", "Let me choose", "Store", "Outfits"];
let links = ["/AiCoordinate", "/LetMeChoose", "/Store", "/Outfits"];
var Main = React.createClass({
  state = {
    menuArray: arr,
    menuLinks: links
  },

  //manipulates array of links and Names to move menu up
  pushShift = (array, x) => {
    array.push(array[x]);
    array.shift(array[x]);
  },

  //takes the array of names and links and shifts everything down
  popUnshift = array => {
    let popItem = array.pop();
    array.unshift(popItem);
  },

  handleMenuUp = () => {
    let menuArray = arr.slice();
    let spliceLinks = links.slice();
    this.pushShift(menuArray, 0);
    this.pushShift(spliceLinks, 0);
    links = spliceLinks;
    arr = menuArray;
    this.setState({ menuArray: arr });
    this.setState({ menuLinks: links });
  },

  handleMenuDown = () => {
    let menuArray = arr.slice();
    let spliceLinks = links.slice();
    this.popUnshift(menuArray);
    this.popUnshift(spliceLinks);

    links = spliceLinks;
    arr = menuArray;
    this.setState({ menuArray: arr });
    this.setState({ menuLinks: links });
  },

  render() {
    let links = this.state.menuLinks;
    let names = this.state.menuArray;

    const config = {
      onSwipedUp: () => this.handleMenuUp(),
      onSwipedDown: () => this.handleMenuDown(),
      preventDefaultTouchmoveEvent: true,
      trackMouse: true
    };

    return (
      <React.Fragment>
        <header>
          <button className="btn btn-secondary">HOME</button>
          <h1 className="logo-main">ai closet</h1>
        </header>
        <div id="main">
          <div className="weather">
            <h2>test</h2>
            <h3>test</h3>
            <p>test</p>
          </div>
          <Swipeable className="full-height slide-nav" {...config}>
            <ul>
              {/* {this.state.menuArray.map(menuArray => (
                <li key={menuArray}>
                 {this.state.menuLinks.map(menuLinks => (<Link to={menuLinks}>{menuArray}</Link>))}
                </li>
              ))} */}
              <li>
                <Link to={links[0]}>{names[0]}</Link>
              </li>
              <li>
                <Link to="#">{names[1]}</Link>
              </li>
              <li>
                <Link to="#">{names[2]}</Link>
              </li>
              <li>
                <Link to="#">{names[3]}</Link>
              </li>
            </ul>
          </Swipeable>
        </div>
      </React.Fragment>
    );
  }
});

export default Main