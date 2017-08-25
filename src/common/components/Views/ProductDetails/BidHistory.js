import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const BiddingHistory = ({ bids }) => {

  const component = (
    <div>
      {
        !bids.get('data').size ?
          <p>No bids have been placed yet.</p> :
          <table className='table'>
            <thead>
              <tr>
                <th>User</th>
                <th>Amount</th>
                <th className='text-right'>Date</th>
              </tr>
            </thead>
            <tbody>
              {
                bids.get('data').map((item) => {
                  return (
                    <tr key={ `bid-${item.key}` }>
                      <td>{ item.user }</td>
                      <td>{ `$${item.amount}` }</td>
                      <td className='text-right'>
                        { moment(item.date).format('M/DD/YYYY h:MM:SS') }
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
      }    
    </div>
  );

  return component;

}

BiddingHistory.propTypes = {
  bids: PropTypes.object.isRequired
}

export default BiddingHistory;