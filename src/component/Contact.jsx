import React from 'react'

export default function Contact() {
  return (
    <div className='container m-5 p-5'>
        <h1 className='text-info text-center'>Conatct</h1>
      <form action="" className="form-container">
        <input type="text" className='form-control my-2 ' placeholder='Nom complet' />
        <input type="text" className='form-control my-2' placeholder='Numero téléphone' />
        <textarea name="" id="" className='form-control my-2' placeholder='Message'></textarea>
        <div className='text-center'>
        <input type="button" value="Envoyer"  className='btn btn-outline-dark w-100 '/>
        </div>
      </form>
    </div>
  )
}
