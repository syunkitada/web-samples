import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'


// プレゼンテーションとコンテナのロジックを混合に書いてもよい

const AddTodo = ({ dispatch }) => {
  let input
  console.log("called AddTodo")

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
