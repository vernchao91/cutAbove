import React from 'react';
import { Link } from 'react-router-dom';
// import BookAppointmentContainer from '../book_appointment/book_appointment_container_form_form'

const StylistIndexItem = props => (
  <li>
    <p>
    {props.stylist.firstName} {props.stylist.lastName}
    {props.stylist.rating}
    </p>
    <Link to={`/stylists/${props.stylist._id}`}> Stylist Profile Page </Link>
    {/* <BookAppointmentContainer stylist={props.stylist}/> */}
  </li>
)

export default StylistIndexItem

