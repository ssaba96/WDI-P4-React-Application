import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import { Link } from 'react-router-dom';

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
      <section>
        <div className="columns is mulitline">
          <div className="card">
            <div className="column is-12">
              <h2 className="title">{this.state.talent.name}</h2>
              <hr />
              <figure className="image">
                <img src={this.state.talent.image} id="front-image"/>
              </figure>
              <strong><h4 className="">Rating</h4></strong>
              <h2 className="title">{this.state.talent.rating}</h2>
              <strong><h4 className="">Based In</h4></strong>
              <p className="">{this.state.talent.basedIn}</p>
              <hr />
              <div className="card">
                <p className="title">Comments</p>
                <p className="title is-6">Rating</p>
              </div>
            </div>
          </div>
          {/* <div className="card">
          <label className="label">Rating</label>
          <div className="control">
            <select name="rating">
              <option value="" disabled>Please Rate</option>
              <option value="">Rating</option>
              <option value="1">⭐️</option>
              <option value="2">⭐️⭐️</option>
              <option value="3">⭐️⭐️⭐️</option>
              <option value="4">⭐️⭐️⭐️⭐️</option>
              <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
            </select>
          </div>
        </div> */}
          <div className="column is-5">
            <div className="card">
              <h4 className="title">Description</h4>
              <p className="">{this.state.talent.description}</p>
              <hr />
              <h4 className="title">Skills</h4>
              <p className="">{this.state.talent.skills}</p>
              <hr />
              <h4 className="title">Education</h4>
              <p className="">{this.state.talent.education}</p>
            </div>
            <hr />
            <div className="card portfolio">
              <p className="title">Portfolio</p>
              <a>links</a>
            </div>
            <hr />
            <Link className="button is-primary" to={`/talents/${this.state.talent._id}/edit`}>Edit</Link>
          </div>
        </div>
      </section>
    );
  }
}

export default TalentsShow;
