import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getHistoryAPI, removeHistoryAPI } from '../services/allAPI'
function History() {

  const [historyDetails, setHistoryDetails] = useState([])

  const getHistory = async () => {
    const response = await getHistoryAPI()
    console.log(response);
    if (response.status >= 200 && response.status < 300) {
      setHistoryDetails(response.data)
    }
  }
  console.log(historyDetails);

  useEffect(() => {
    getHistory()
  }, [])

  const removeHistory = async (historyId) => {
    await removeHistoryAPI(historyId)
    getHistory()
  }

  return (
    <div style={{ marginTop: "100px" }} className='container'>
      <div className="d-flex justify-content-between">
        <h3>watch History</h3>
        <Link to={'/home'} className='btn btn-danger'>back to Home</Link>
      </div>
      <Table striped bordered hover className='mt-3'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Video Link</th>
            <th>Time Stamp</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {
            historyDetails.length > 0 ?
              historyDetails?.map((details, index) => (
                <tr key={details.id}>
                  <td>{index + 1}</td>
                  <td>{details.caption.toUpperCase()}</td>
                  <td><a href={details.link} target="_blank" rel="noopener noreferrer">{details.link}</a></td>
                  <td>{details.timeStamp}</td>
                  <td><button className='btn' onClick={() => removeHistory(details?.id)}><i className="fa-solid fa-trash-can"></i></button></td>
                </tr>
              )) :
              <tr>
                <td colSpan="5" className='text-center text-danger fw-bold'>Your Watch History is Empty</td>
              </tr>
          }
          
        </tbody>
      </Table>
    </div>
  )
}

export default History
