import React from 'react';
import { Link } from 'react-router-dom';
import BookAppointmentContainer from '../book_appointment/book_appointment_container_form_form'

const StylistIndexItem = props => (
  <li>
    <p>
    {props.stylist.firstName}
    {props.stylist.lastName}
    {props.stylist.ratiing}
    </p>
    <Link to=''> This will be a link to the stylist home page</Link>
    {/* <BookAppointmentContainer stylist={props.stylist}/> */}
  </li>
)

export default StylistIndexItem

