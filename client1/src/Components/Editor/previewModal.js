import React , {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export const PreviewModal = ({ output }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
    <>
    <Button as="a" variant="primary" onClick={handleShow} >
          Preview message
        </Button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Preview Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <div dangerouslySetInnerHTML={{ __html: output }}></div>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" as="a" href="/" >Done</Button>
    <Button variant="primary" onClick={handleClose}>Close</Button>
    </Modal.Footer>
  </Modal>
  </>
  )
}

  
  
//   <div className="modal fade" id="previewModal" tabindex="-1" role="dialog" aria-hidden="true">
//     <div className="modal-dialog" role="document">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h5 className="modal-title" id="exampleModalLabel">
//             Preview Modal
//           </h5>
//           <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//         <div className="modal-body" dangerouslySetInnerHTML={{ __html: output }} />
//         <div className="modal-footer">
//           <button type="button" className="btn btn-secondary" data-dismiss="modal">
//             Done
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>

