import './Footer.css';
import Rules from '../Rules/Rules';
import Modal from '../Modal/Modal';
import { useState } from 'react';

const Footer = () => {
  const [show, setShow] = useState(false);

  const modalToggle = () => {
    setShow(!show)
  }

  return (
    <>
     <Modal show={show} title="Rules">
        <Rules />
      </Modal>
      <div className="footer">
        <button
          className="cta"
          onClick={e => {
            modalToggle();
          }}
        >
          Rules
        </button>
      </div>
      
      </>
   );
}
 
export default Footer;