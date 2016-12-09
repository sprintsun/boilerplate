/**
 * @description
 * @author jiuhu <jiuhu.zh@gmail.com>
 * @date 2016/12/7
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../styles/index.css';

class Index extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <p>
          template ~~~
        </p>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));

if (module.hot) {
  // accept update of dependency
  module.hot.accept();
}
