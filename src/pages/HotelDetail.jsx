import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchHotelById } from '../store/actions/actionHotel'
import { useHistory } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'

import FacilitiesIcon from '../components/FacilitiesIcon'

export default function HotelDetail() {
  const dispatch = useDispatch()
  const history = useHistory()
  const hotel = useSelector((state) => state.hotel)

  useEffect(() => {
    dispatch(fetchHotelById('5fda55be9acbac7ff019610d'))
  }, [])

  function facilitiesClick(idx) {
    history.push(`/facility/${idx}`)
  }

  if (!hotel.facilities) {
    return (
      <div>
        <h1>LOADING.....</h1>
      </div>
    )
  }
  return (
    <div className="ml-5 mr-5 mt-3" style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}>
      <h2 className='text-center'>Our Facilities</h2>
      <div className='d-flex justify-content-center'>
        {hotel.facilities.map((facility, index) => (
          <FacilitiesIcon key={index} name={facility.name} index={index} facilitiesClick={facilitiesClick}/>
        ))}
      </div>
    </div>
  )
}