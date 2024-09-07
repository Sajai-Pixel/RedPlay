import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'
function Home() {
    const [uploadVideoResponse, setUloadVideoResponse] = useState("")
    return (
        <div style={{ marginTop: "100px" }}>
            <div className="container d-flex justify-content-between">
                <Add setUloadVideoResponse={setUloadVideoResponse} />
                <Link to={'/history'} className='btn btn-danger'>Watch History</Link>
            </div>
            <div className="container  justify-content-between my-5">
                <div>
                    <h3 className='mb-5'>All Videos</h3>
                    <View uploadVideoResponse={uploadVideoResponse}/>
                </div>
                <div className='mt-5'>
                    <Category />
                </div>
            </div>
        </div>
    )
}

export default Home
