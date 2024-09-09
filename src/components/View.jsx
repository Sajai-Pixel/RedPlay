import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideosAPI } from '../services/allAPI'
function View({ uploadVideoResponse, removeVideoResponseCategory }) {
    const [allVideos, setAllVideos] = useState([])
    const [deleteVideoResponse, setDeleteVideoResponse] = useState("")

    useEffect(() => {
        getAllVideos()
    }, [uploadVideoResponse, deleteVideoResponse, removeVideoResponseCategory])

    //get all videos

    const getAllVideos = async () => {
        const result = await getAllVideosAPI()
        // console.log(result);
        if (result.status >= 200 && result.status < 300) {
            setAllVideos(result.data)
        }
    }
    // console.log(allVideos);

    return (
        <Container>
            <Row>
                {
                    allVideos.length > 0 ?
                        allVideos?.map(video => (
                            <Col key={video?.id} sm={12} md={6} lg={3} className='mb-4'>
                                <VideoCard DisplayData={video} setDeleteVideoResponse={setDeleteVideoResponse} />
                            </Col>
                        ))
                        :
                        <Col>
                            <p>Nothing to Display</p>
                        </Col>
                }
            </Row>
        </Container>
    )
}

export default View
