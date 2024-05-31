import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import ContentHeader from "./components/ContentHeader/ContentHeader";
import ContactForm from "./components/ContactForm/ContactForm";
function App() {
  return (
    <>
      <div>
        <Navigation></Navigation>
        <main className="main_container">
          <ContentHeader></ContentHeader>
          <ContactForm></ContactForm>
        </main>
      </div>
    </>
  );
}

export default App;
