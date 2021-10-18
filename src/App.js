import MainContainer from './components/MainContainer/MainContainer';
import Title from './components/Title/Title';
import Form from './components/Form/Form';
import ContactsList from './components/ContactsList/ContactsList';
import ContactsFilter from './components/ContactsFilter/ContactsFilter';

function App() {
  return (
    <MainContainer>
      <Title text="Phonebook" />
      <Form />

      <Title text="Contacts" />
      <ContactsFilter />
      <ContactsList />
    </MainContainer>
  );
}

export default App;
