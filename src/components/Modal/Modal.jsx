import { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './modal.module.scss';

const Modal = (imgAlt, imgLargeSrc, onModalClose) => {

  useEffect(() => {
    document.addEventListener('keydown', onKeyPress);
    return document.removeEventListener("keydown", onKeyPress);
  });

  const onKeyPress = event => {
    if (event.code === 'Escape') {
      onModalClose();
    }
  };

  const onModalOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onModalClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={onModalOverlayClick}>
      <img className={styles.modal} src={imgLargeSrc} alt={imgAlt} />
    </div>
  );
}
export default Modal;

Modal.propTypes = {
  imgAlt: PropTypes.string.isRequired,
  imgLargeSrc: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
};

/*
class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyPress);
  }

  onKeyPress = event => {
    if (event.code === 'Escape') {
      this.props.onModalClose();
    }
  };

  onModalOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onModalClose();
    }
  };

  render() {
    const { imgAlt, imgLargeSrc } = this.props;

    return (
      <div className={styles.overlay} onClick={this.onModalOverlayClick}>
        <img className={styles.modal} src={imgLargeSrc} alt={imgAlt} />
      </div>
    );
  }
}
export default Modal;

Modal.propTypes = {
  imgAlt: PropTypes.string.isRequired,
  imgLargeSrc: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
};
*/
