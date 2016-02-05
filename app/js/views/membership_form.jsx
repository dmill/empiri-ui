import React, { Component } from 'react'

const MembershipForm = () => {
  return (
    <form>
      <label>
        Name
        <input type="text" />
      </label>
      <label>
        Organization
        <input type="text" />
      </label>
      <label>
        Field
        <input type="text" />
      </label>
      <label>
        References
        <input type="text" />
      </label>
      <button>Apply</button>
    </form>
  )
}

export default MembershipForm
