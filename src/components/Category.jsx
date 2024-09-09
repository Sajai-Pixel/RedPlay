import React, { useEffect, useState } from 'react'
import { Row, Col, Modal, FloatingLabel, Form, Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategoryAPI, getCategoryAPI, getSingleVideoAPI, removeCategoryAPI, removeVideoAPI, updateCategoryAPI } from '../services/allAPI';

function Category({ setRemoveVideoResponseCategory }) {

  const [categoryName, setCategoryName] = useState("")
  const [allCategory, setAllCategory] = useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCategory = async () => {
    if (categoryName) {
      await addCategoryAPI({ categoryName, allVideos: [] })
      setCategoryName("")
      handleClose()
      getAllCategory()
    }
    else {
      toast.warning("Please fill the form completely")
    }
  }

  const getAllCategory = async () => {
    const response = await getCategoryAPI()
    if (response.status >= 200 && response.status < 300) {
      setAllCategory(response.data)
    }
  }
  console.log(allCategory);

  useEffect(() => {
    getAllCategory()
  }, [])

  const removeCategory = async (categoryId) => {
    await removeCategoryAPI(categoryId)
    getAllCategory()
  }

  const dragOverCategory = e => {
    e.preventDefault()
  }

  const videoDropped = async (e, categoryId) => {
    const videoId = e.dataTransfer.getData("vId")
    console.log(`Video id: ${videoId} dropped inside category id : ${categoryId}`);
    //add video to category
    const { data } = await getSingleVideoAPI(videoId)
    console.log(data);
    let selectedCategory = allCategory?.find(item => item.id == categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    //save updated category to json server using api call
    await updateCategoryAPI(categoryId, selectedCategory)
    const result = await removeVideoAPI(videoId)
    setRemoveVideoResponseCategory(result)
    getAllCategory()
  }
  return (
    <>
      <div className='d-flex align-items-center mb-3'>
        <h3 style={{ margin: '0', lineHeight: '50px' }}>All Categories</h3>
        <button className='btn  ms-3 btn-primary rounded-circle fw-bolder' style={{ width: '40px', height: '40px', padding: '0', fontSize: '20px', lineHeight: '40px' }} onClick={handleShow}>+</button>
      </div>

      <div className='container'>
        {
          allCategory.length > 0 ?
            allCategory?.map(categoryDetails => (
              <div droppable={true} onDragOver={e => dragOverCategory(e)} onDrop={e => videoDropped(e, categoryDetails?.id)} key={categoryDetails?.id} className='card border-primary mb-3'>
                <div className='d-flex align-items-center justify-content-between card-header'>
                  <h5 style={{ margin: '0', lineHeight: '40px' }}>{categoryDetails?.categoryName}</h5>
                  <button onClick={() => removeCategory(categoryDetails.id)} style={{ width: '40px', height: '40px', padding: '0', fontSize: '20px', lineHeight: '40px' }} className='btn btn-dark me-3 rounded'
                  ><i className="fa-solid fa-trash-can-arrow-up" style={{ color: "white" }}></i></button>
                </div>
                {/* <Row className='p-2'>
                  <Col sm={3} className='card ms-2'>
                    <img src="https://placehold.co/300x200" alt="" className='mt-2' />
                    <div className="card-body">
                      <p className="card-text">Avesham Trailer</p>
                    </div>
                  </Col>
                </Row> */}
              </div>
            )) :
            <div>No Categories are added yet</div>
        }
      </div>

      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill the following details.</p>
          <FloatingLabel
            controlId="floatingInput"
            label="Category Name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Category Name" onChange={e => setCategoryName(e.target.value)} />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button className='rounded' variant="dark" onClick={handleClose}>
            Close
          </Button>
          <Button className='rounded' variant="primary" onClick={handleCategory}>Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </>
  )
}

export default Category
