import './App.css';

import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Yam extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nbLancer : 14
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(event) {
    event.preventDefalut();
  };

  handleChange(event) {
    const {value, name} = event.target;

    console.log(`value: ${value} name: ${name}`);

    this.setState({ [name] : value});
  }

  render() {

    const { nbLancer, name } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username :
            {/* Pensez à controler avec React la saisie des données dans le champ value plus cohérent. C'est React qui fait d'un bout à bout les choses*/}
            <input
              type="text"
              name="Nombre de lancers"
              onChange={this.handleChange}
              value={nbLancer}
            />
          </label>
          <p>{nbLancer}</p>
        </div>
        <div>
          <button class="btn btn-primary">Lancer</button>
        </div>
      </form>
    );
  };
};

export default Yam;
