let tick = () => {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}</h2>
      </div>
    );
    ReactDOM.render(
      "Hello, World!",
      document.getElementById('app')
    );
}

setInterval(tick, 1000);