import {Component} from "react";

export class ClassComponentLifecycle extends Component {
  constructor(props) {
    super(props);
    // 1) constructor
    this.increment = this.increment.bind(this) // without binding will not work
    this.state = {
      a: 0,
      b: 42
    }
  }
  
  increment() {
    this.setState(prev => ({a: prev.a + 1})) // prev = this.state
  }

  // 3) componentDidMount
  componentDidMount() {
    // console.log('component did mount') useEffect with []
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // IF OUR STATE SATISFIES CONDITION WE GET SNAPSHOT; WE RETURN NULL TO PREVENT ERROR MESSAGE
    if (prevState.a === 2) {
      return 'SNAPSHOT: STATE A NOW EQUALS 2'
    }
    return null
  }

  // 4) componentDidUpdate (works only after update, like when some value in useState changes)
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('state: ', prevState);
    console.log('props: ', prevProps);
    console.log(snapshot);
  }

  // 5) componentWillUnmount (works when we get rid of our component)
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    // 2) render
    return (
      <div>
        <div>Hello from class component</div>
        <div>A: {this.state.a}</div>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}