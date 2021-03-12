import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import bg1 from "./bg1.jpg"
import bg3 from "./bg3.jpg"

function App() {
  return (
    <>
      <Header title="This is title" desc="This is Description!"/>
      <Layout id={2} title="This is title" desc="This is Description!" urlBg={bg1} />
      <Layout id={3} title="This is title" desc="This is Description!" colorBg="red" />
      <Layout id={4} title="This is title" desc="This is Description!" urlBg={bg3} />
      <Footer />
    </>
  );
}

export default App;
