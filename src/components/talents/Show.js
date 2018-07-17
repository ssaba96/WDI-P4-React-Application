import React from 'react';
import axios from 'axios';
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
        <div className="card">
          <div className="column is-5">
            <h2 className="title">{this.state.talent.name}</h2>
            <hr />
            <hr />
            <figure className="image">
              <img src={this.state.talent.image} id="front-image"/>
            </figure>
          </div>
        </div>
        <div className="column is-4">
          <div className="card profile-card">
            <h4 className="title">Description</h4>
            <p className="">{this.state.talent.description}</p>
            <hr />
            <h4 className="title">Skills</h4>
            <p className="">{this.state.talent.skills}</p>
            <hr />
            <h4 className="title">Education</h4>
            <p className="">{this.state.talent.education}</p>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default TalentsShow;
