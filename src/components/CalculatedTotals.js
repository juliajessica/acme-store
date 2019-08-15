import React from 'react';
import { string } from 'prop-types';

const CalculateTotals = ({ total }) => {
  const tax = 0.08067;
  let calculatedTotalTax = null;

  const taxOnItems = () => {
    calculatedTotalTax = (total * tax).toFixed(2);

    return calculatedTotalTax.toLocaleString();
  };

  const finalTotal = () => {
    taxOnItems();
    const totalPrice = parseFloat(calculatedTotalTax, 10) + parseInt(total, 10);

    return totalPrice.toLocaleString();
  };
  const convertTotalToNum = parseFloat(total, 10);

  return (
    <div className="calculated-totals_container">
      <div className="calculated-totals_price-before">
        <p>
          <span>Subtotal:</span>
          <span>{`$${convertTotalToNum.toLocaleString()}`}</span>
        </p>
        <p>
          <span>Taxes:</span>
          <span className="calculated-totals-taxes">{`$${taxOnItems()}`}</span>
        </p>
      </div>
      <p className="calculated-totals_price-final">
        <span>Total:</span>
        <span className="calculated-totals_final-total">{`$${finalTotal()}`}</span>
      </p>
      <button className="calculated-totals_update-button" type="button">
        Update
      </button>
    </div>
  );
};

CalculateTotals.propTypes = {
  total: string.isRequired
};
export default CalculateTotals;
