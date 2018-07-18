import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class TalentsIndex extends React.Component {

  constructor() {
    super();
    this.state = {
      talents: [],
      sort: 'name|asc'
    };
  }

  componentDidMount() {
    axios.get('/api/talents')
      .then(res => this.setState({ talents: res.data }));
  }

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  }

  filteredTalents = (talents) => {
    const re = new RegExp(this.state.search, 'i');
    return talents.filter(talent => {
      return re.test(talent.name) || re.test(talent.description);
    });
  }

  handleSort = (e) => {
    this.setState({ sort: e.target.value});
  }

  sortedTalents = (talents) => {
    const [ prop, dir ] = this.state.sort.split('|');
    return _.orderBy(talents, prop, dir);
  }

  sortAndFilteredTalents = () => {
    const filtered = this.filteredTalents(this.state.talents);
    return this.sortedTalents(filtered);
  }

  render() {
    return (
      <section>

        <div className="filters">
          <input className="input" placeholder="Search" onChange={this.handleSearch} />
        </div>
        <div className="control">
          <div className="select is-fullwidth"/>
          <select className="select" onChange={this.handleSort}>
            <option value="name|asc"> Name (A-Z)</option>
            <option value="name|desc"> Name (Z-A)</option>
          </select>
        </div>

        <div className="columns is-multiline">
          {this.sortAndFilteredTalents().map(talent =>
            <div key={talent._id} className="column is-3">
              <Link to={`/talents/${talent._id}`}>
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-square">
                      <img src={talent.image} />
                    </figure>
                    <p className="title">{talent.name}</p>
                    <hr />
                    <p className="">{talent.description}</p>
                  </div>
                  <div className="card-content">
                    <div className="content">
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default TalentsIndex;
