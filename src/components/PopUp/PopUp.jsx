import React from 'react';
import PropTypes from 'prop-types';
import { StyledPopUp } from './PopUp.styled';
import { CgClose } from 'react-icons/cg';
import { iconSize } from 'components/constants';

const PopUp = ({ title, text, children }) => {
  return (
    <StyledPopUp>
      <div className="modal">
        <button
          className="modal-close-btn"
          data-modal-close
          type="button"
          aria-label="Modal close button"
        >
          <CgClose className="modal-close-btn-icon" size={iconSize.xl} />
        </button>
        <h2>{title}</h2>
        <p>{text}</p>
        {children}
      </div>
    </StyledPopUp>
  );
};

PopUp.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PopUp;