import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header id={1} title={"This is title"} desc={"This is Description!"}/>
      <Layout id={2} title={"This is title"} desc={"This is Description!"} urlBg={"./bg1.jpg"} />
      <Layout id={3} title={"This is title"} desc={"This is Description!"} colorBg={"red"} />
      <Layout id={4} title={"This is title"} desc={"This is Description!"} urlBg={"./bg3.jpg"} />
      <Footer />
    </>
  );
}

export default App;
