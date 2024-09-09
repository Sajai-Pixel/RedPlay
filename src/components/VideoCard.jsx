import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import 'react-toastify/dist/ReactToastify.css';
import { removeVideoAPI, storeHistoryAPI } from '../services/allAPI'

function VideoCard({ DisplayData, setDeleteVideoResponse }) {
    console.log(DisplayData);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async () => {
        setShow(true);
        const { caption, link } = DisplayData;
        const sysTime = new Date();
        const timeStamp = sysTime.toLocaleString('en-US');
        console.log(timeStamp);
        const videoDetails = { caption, link, timeStamp };
        storeHistoryAPI(videoDetails);
    };

    const removeVideo = async (videoId) => {
        const result = await removeVideoAPI(videoId)
        // pass response to view component
        setDeleteVideoResponse(result?.data)
    }

    const videoDragStart = (e,videoId) => {
        console.log(`Dragging Started with video id : ${videoId}`);
        e.dataTransfer.setData("vId",videoId)
    }

    return (
        <>
            <Card draggable={true} onDragStart={e=>videoDragStart(e,DisplayData?.id)} style={{ width: '18rem', height: '28rem' }} className='text-white bg-dark mb-5'>
                <div style={{ height: '80%', overflow: 'hidden' }}>
                    <Card.Img
                        variant="top"
                        src={DisplayData.url}
                        className='p-2'
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                <Card.Body>
                    <Card.Title className='text-center'>{DisplayData.caption}</Card.Title>
                    <div className='d-flex w-100'>
                        <button className='btn btn-success w-50' onClick={handleShow}>Play</button>
                        <button className='btn btn-danger w-50 ms-2' onClick={() => removeVideo(DisplayData?.id)}>Delete</button>
                    </div>
                </Card.Body>
            </Card>

            <Modal size='lg' show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{DisplayData.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body><iframe
                    width="100%"
                    height="400"
                    src={`${DisplayData.link}?autoplay=1`}
                    title="caption"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe></Modal.Body>
            </Modal>
        </>
    )
}

export default VideoCard
