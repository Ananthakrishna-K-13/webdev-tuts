import React from 'react'
import { useDispatch } from 'react-redux'

import * as ActionCreators from '../state/action-creators/index'
import { bindActionCreators } from 'redux'

const Shop = () => {
  const dispatch = useDispatch()
  const actions = bindActionCreators(ActionCreators,dispatch)
  return (
    <div className='container my-5'>
        <button className='btn btn-primary' onClick={()=>{actions.withdrawMoney(100)}}>Withdraw</button>
          Deposit/ Withdraw 100 Rupees using redux    
        <button className='btn btn-primary'onClick={()=>{actions.depositMoney(100)}}>Deposit</button>
    </div>
  )
}

export default Shop