import { Navbar, Article, Brand, CTA, Feature } from "./components/index";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./container/index";
import "./app.css";
function App() {
  return (
    <div className="App">
      <div className="bg__gradient">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
