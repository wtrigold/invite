import React, { useState } from 'react'
import CardContainer from './style'
import { testEmail } from '../utils'
import { postAjax } from '../api'

export default function Modal (props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [confirm, setConfirm] = useState('')
  const [nameError, setNameError] = useState('')
  const [emailError, setEmainError] = useState('')
  const [confirmError, setConfirmError] = useState('')
  const [sending, setSending] = useState(false)
  const [serverMessage, setServerMessage] = useState('')
  const [success, setSuccess] = useState(false)
  // useEffect(() => {
  //   console.log(testEmail('1290073851@qq.com'))
  // })
  const sendInfo = async () => {
    if (name.length < 3) {
      setNameError('Full name needs to be at least 3 characters long.')
    }
    if (!testEmail(email)) {
      setEmainError('Email format is incorrect.')
    }
    if (!testEmail(confirm)) {
      setConfirmError(' Confirm email format is incorrect.')
      return
    }
    try {
      setSending(true)
      let res = await postAjax(
        'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth',
        { name: name, email: email, confirm: confirm }
      )
      setSending(false)
      if (res && res === 'Registered') {
        setSuccess(true)
      } else {
        setServerMessage(res)
      }
    } catch (error) {
      setServerMessage('Server error.')
    }
  }

  return (
    <CardContainer>
      <div
        className='wrapper'
        id='wrapper'
        onClick={e => {
          if (e.target.id === 'wrapper') props.setVisible(false)
        }}
      >
        <div className='modal'>
          {success ? (
            <>
              <div className='title'>All done !</div>
              <div className='separate'>———</div>
              <div className='success-content'>
                <p className='item-1'>
                  You will be one of the first to experience
                </p>
                <p className='item-2'>Broccoli & Co. when we launch.</p>
              </div>
              <div
                className='ok-button'
                onClick={() => {
                  props.setVisible(false)
                }}
              >
                OK
              </div>
            </>
          ) : (
            <>
              <div className='title'>Request an invite</div>
              <div className='separate'>———</div>
              <div className={`input-item ${nameError ? 'error' : ''}`}>
                <input
                  value={name}
                  placeholder='Full name'
                  autoComplete='off'
                  onChange={e => {
                    setName(e.target.value)
                  }}
                />
                {nameError ? (
                  <p className='error-message'>{nameError}</p>
                ) : null}
              </div>
              <div className={`input-item ${emailError ? 'error' : ''}`}>
                <input
                  value={email}
                  placeholder='Email'
                  autoComplete='off'
                  onChange={e => {
                    setEmail(e.target.value)
                  }}
                />
                {emailError ? (
                  <p className='error-message'>{emailError}</p>
                ) : null}
              </div>
              <div className={`input-item ${confirmError ? 'error' : ''}`}>
                <input
                  value={confirm}
                  placeholder='Confirm email'
                  autoComplete='off'
                  onChange={e => {
                    setConfirm(e.target.value)
                  }}
                />
                {confirmError ? (
                  <p className='error-message'>{confirmError}</p>
                ) : null}
              </div>
              <div className='send-button' onClick={sendInfo}>
                {sending ? 'Sending, please wait...' : 'send'}
              </div>
              {serverMessage ? (
                <p className='server-message'>{serverMessage}</p>
              ) : null}
            </>
          )}
        </div>
      </div>
    </CardContainer>
  )
}
