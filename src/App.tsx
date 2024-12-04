import Form from './Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from './TrainerCard';
import TrainerCard from './TrainerCard';

function App() {

  const trainer = {
    image: "https://avatars.githubusercontent.com/u/41322826?s=400&u=3833f4151f784d19e27e46b81b280630c76d15a5&v=4",
    title: "Mr Jordan Harrison",
    age: "30",
    specialism: "Software"
  }
  return (
    <>
      <h2>Compound Components</h2>
      <section>
        <h3>Stateless</h3>
        <Form>
          <Form.Label>
            Text
            <Form.Input type='text' name="name" id="id" />
          </Form.Label>
          <br />
          <Form.Label>
            Number
            <Form.Input type='number' name="number" id="numberId" />
          </Form.Label>
          <br />
          <Form.Submit>Submit</Form.Submit>
        </Form>
      </section>
      <section>
        <h3>State Management</h3>
        <TrainerCard data={trainer}>
          <TrainerCard.Body>
            <TrainerCard.Title />
            <TrainerCard.Age />
            <TrainerCard.Specialism />
          </TrainerCard.Body>
          <TrainerCard.Image />
        </TrainerCard>
      </section>
    </>
  )
}

export default App
