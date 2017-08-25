import { createContainer } from 'meteor/react-meteor-data';
import { Athletes } from '../api/athletes';
import App from '../ui/App';

export default createContainer(() => {
  const athletes = Athletes.find({}, { sort: { createdAt: 1 } }).fetch();
  return { athletes };
}, App);
