/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import './contact.css'

const contact = () => {

  const [contact, setContact] = useState([]);

  useEffect(() => {
    getcontact();
  }, [])

  const getcontact = async () => {
    let result = await fetch('http://localhost:5000/contact');
    result = await result.json();
    setContact(result);
    console.log(result);
  }
  //delete
  const deletecontact = async (id) => {
    let result = await fetch(`http://localhost:5000/contacts/${id}`, {
      method: "Delete"
    });
    result = await result.json()
    if (result) {
      alert("delete");
      getcontact();
    }
  };


  return (

    <>
      <div className="contact">
        <table className='table'>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>massage</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {contact.map((item, index) =>
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.massage}</td>

                <td className='action'>
                  <button className='edit'><i className="fa-solid fa-pen-to-square"></i></button>

                  <button className='view'><i className="fa-regular fa-eye"></i></button>

                  <button className='delete' onClick={() => deletecontact(item._id)}><i className="fa-solid fa-trash"></i></button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default contact