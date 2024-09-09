import React, { useState } from 'react'
import { FloatingLabel, Button, Form, Modal } from 'react-bootstrap'
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadVideoAPI } from '../services/allAPI';

function Add({ setUloadVideoResponse }) {


    const [invalidLink, setInvalidLink] = useState(false)
    const [videoDetails, setVideoDetails] = useState({
        caption: "", url: "", link: ""
    })
    // console.log(videoDetails);

    const embededUrl = (link) => {
        if (link.includes("v=")) {
            let videoId = link.split("v=")[1].slice(0, 11)
            // console.log(videoId);
            setVideoDetails({ ...videoDetails, link: `https://www.youtube.com/embed/${videoId}` })
            setInvalidLink(false)
        }
        else {
            setVideoDetails({ ...videoDetails, link: "" })
            setInvalidLink(true)
        }
    }

    const handleUpload = async () => {
        const { caption, url, link } = videoDetails
        console.log("inside handle");
        if (caption && url && link) {
            const result = await uploadVideoAPI(videoDetails)
            // console.log(result);
            if (result.status >= 200 && result.status < 300) {
                //upload success
                handleClose() //to close modal
                setVideoDetails({ ...videoDetails, caption: "", url: "", link: "" })
                // toast.success(`${result.data.caption} added to your collection`)
                setUloadVideoResponse(result)
            }
        }
        else {
            toast.warning("Please Fill Form Completely")
        }
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='d-flex align-items-center'>
                <h4 style={{ margin: '0', lineHeight: '50px' }}>Upload New Video</h4>
                <button onClick={handleShow} className='btn  ms-3 btn-primary rounded-circle fw-bolder' style={{ width: '40px', height: '40px', padding: '0', fontSize: '20px', lineHeight: '40px' }}>+</button>
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
                    <Modal.Title>Video Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please Fill the following details.</p>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Video Caption"
                        className="mb-3"
                    >
                        <Form.Control onChange={e => setVideoDetails({ ...videoDetails, caption: e.target.value })} type="text" placeholder="Video Caption" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Image URL"
                        className="mb-3"
                    >
                        <Form.Control onChange={e => setVideoDetails({ ...videoDetails, url: e.target.value })} type="text" placeholder="Image URL" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Video URL"
                        className="mb-3"
                    >
                        <Form.Control onChange={e => embededUrl(e.target.value)} type="text" placeholder="Video URL" />
                    </FloatingLabel>
                    {
                        invalidLink && <div className='text-danger fw-bolder ms-4 mt-2'>Invalid Youtube Link</div>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button className='rounded' variant="dark" onClick={handleClose}>
                        Close
                    </Button>
                    <Button className='rounded' variant="primary" onClick={handleUpload}>Upload</Button>
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

export default Add
