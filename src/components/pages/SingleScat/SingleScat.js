import React from 'react';
import { Link } from 'react-router-dom';

import './SingleScat.scss';
import scatsData from '../../../helpers/data/scatsData';


class SingleScat extends React.Component {
  state = {
    scat: {},
  }

  componentDidMount() {
    const { scatId } = this.props.match.params;
    scatsData.getSingleScat(scatId)
      .then((response) => this.setState({ scat: response.data }))
      .catch((err) => console.error('unable to get single scat: ', err));
  }

  removeScat = () => {
    const { scatId } = this.props.match.params;
    scatsData.deleteScat(scatId)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('unable to delete single scat:', err));
  }

  render() {
    const { scat } = this.state;
    const { scatId } = this.props.match.params;
    const editLink = `/edit/${scatId}`;
    return (
        <div className="SingleScat" style={{ backgroundColor: scat.color }}>
        <Link className="btn btn-warning" to={editLink}><i className="fas fa-pencil-alt"></i></Link>
        <button className="btn btn-danger" onClick={this.removeScat}><i className="fas fa-trash-alt"></i></button>
        <h1>{scat.location}</h1>
        <p>Shape: {scat.shape}</p>
        <p>Size: {scat.size}</p>
        <p>Temperature: {scat.temperature}</p>
        <p>Viscosity: {scat.viscosity}</p>
        <p>Location: {scat.location}</p>
        <p>Notes: {scat.notes}</p>
        <p>Was it Fulfilling? {scat.wasFulfilling ? 'Yes' : 'No'}</p>
      </div>
    );
  }
}

export default SingleScat;
