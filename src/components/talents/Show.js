import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

class TalentsShow extends React.Component {

  state = {
    talent: {}
  }

  componentDidMount() {
    axios.get(`/api/talents/${this.props.match.params.id}`)
      .then(res => this.setState({ talent: res.data }))
      .catch(err => this.setState({ error: err.message }));
  }

  handleDelete = () => {
    axios({
      url: `/api/talents/${this.props.match.params.id}`,
      method: 'DELETE',
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push('/talents'));
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-3">
          <figure className="image">
            <img src={this.state.talent.image} />
          </figure>
        </div>
        <div className="column is-half">
          <h2 className="title">{this.state.talent.name}</h2>
          <hr />
          <div className="column is-half">
            <p className="">{this.state.talent.description}</p>
            <hr />
            <Link className="button" to={`/talents/${this.state.talent._id}/edit`}>Edit</Link>
            <button className="button is-danger" onClick={this.handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default TalentsShow;
