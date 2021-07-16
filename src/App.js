import Counter from './components/Counter.jsx';
function App(value1, value2) {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;

// A  center of every redux application is the store.
// A store stores the global state of your application
// never direclty updates the global state
// Instead dispatch a action that discribes what happened in your application
// the store runs the reducer function which calculates the new store
// based on the old state and action
// Finaly the store notifies the subscriber that the state has been updated
// so the UI can be updated with the new state
// Because Redux is a standalone library with no dependencies
// Store itself ia js object with other values inside that object
