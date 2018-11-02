import React, {Component} from 'react';


export default class Keypad extends Component {
  typing = () => {console.log('Entering password...')};
  render () {
  <input onKeyUp={this.typing} type="password" />
  }
}
