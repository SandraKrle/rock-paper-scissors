import './Modal.css';
import closeIcon from 'assets/svg/icon-close.svg'

const Modal = ({ show, title, children }) => {
  const showHideClassName = show ? "modal-visible" : "modal-hide";

  return (
    <div className={showHideClassName}>
      <div className="modal-container">
        <div className="title">{title}</div>
        {children}
        <div className="modal-close">
          <img src={closeIcon} alt="close" />
        </div>
      </div>
    </div>
  );
};

export default Modal;