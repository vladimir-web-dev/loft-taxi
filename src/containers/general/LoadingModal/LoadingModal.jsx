import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import containerStyles from "../../../css_modules/Container.module.css";

export function LoadingModal ({showModal}) {
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={containerStyles.modal}
        open={showModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showModal}>
          <div className={containerStyles.paper}>
            <h2  className={containerStyles.modalHeader} id="transition-modal-title">Идет загрузка..</h2>         
          </div>
        </Fade>
      </Modal>   
    );
}