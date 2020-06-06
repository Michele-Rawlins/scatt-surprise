import PropTypes from 'prop-types';

const scatShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  shape: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired ,
  viscosity: PropTypes.string.isRequired,
  wasFulfilling: PropTypes.bool.isRequired ,
  location: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,

});

export default { scatShape };
