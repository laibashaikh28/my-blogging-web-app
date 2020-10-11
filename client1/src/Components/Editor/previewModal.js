import React , {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {MyContextConsumer} from '../../Context';

export const PreviewModal = ({ output }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <MyContextConsumer>
    {(value) =>
    {
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
        <Form>
              <Form.Group   controlId="type">
                <Form.Label>Type</Form.Label>
                <Form.Control onChange={value.onChange} className="col-md-5" name="type" as="select">
                  <option value="Food & Health">Food & Health</option>
                  <option value="Technology & Business">Technology & Business</option>
                  <option value="Places">Places</option>
                  <option value="Art">Art</option>
                  <option value="Media">Media</option>
                  <option value="Others">Others</option>
                </Form.Control>
              </Form.Group>
            </Form>
          <Modal.Body>
            <div dangerouslySetInnerHTML={{ __html: output }}></div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="secondary" onClick={value.onBlogPost} >Done</Button>
            <Button variant="primary" onClick={handleClose}>Close</Button>
          </Modal.Footer>
        
        
        
  </Modal>
  </>
      )
      
    }
    }
  </MyContextConsumer>
  )
}

  
  
{/* //   <div className="modal fade" id="previewModal" tabindex="-1" role="dialog" aria-hidden="true">
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
//   </div> */}

