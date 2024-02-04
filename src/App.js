import './App.scss';

function App() {
  return (
  <>
    <div class="navbar--container sticky">
      <div class="navbar--title"><h4>navigation</h4></div>
      <div class="navbar--icon"><i class="fas fa-bars"></i></div>
    </div>
    <div class="nav--open close sticky">
      <div class="nav--open-icon"><i class="fas fa-times"></i></div>
      <div class="nav--open-title">explore</div>
      <div class="nav--open-menu">
        <a href="">about</a>
        <a href="">work</a>
        <a href="">services</a>
        <a href="">blog</a>
        <a href="">contact</a>
      </div>
    </div>
  
    <section>
      <h1>Hi, my name is <span>Julie.</span></h1>
    </section>
  <section class="two">
    <h1>I'm a <span>front-end</span>engineer.</h1>
  </section>
  <section class="three">
    <h1>I like to <span class="light">design + code</span> pretty things.</h1>
  </section>
  <section class="four">
      <h1>placeholder text here </h1>
  </section>
  </>
  );
}

export default App;
