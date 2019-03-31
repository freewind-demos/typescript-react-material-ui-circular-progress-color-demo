import * as React from 'react'
import CircularProgress from "@material-ui/core/CircularProgress";

class Hello extends React.Component {

  render() {
    return <div>
      <CircularProgress style={{color: 'blue'}}/>
    </div>
  }
}

export default Hello
