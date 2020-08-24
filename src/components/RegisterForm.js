import React from 'react'

export default function RegisterForm(props) {
  return (
    <form>
      <div>
        <h2>Register</h2>
      </div>

      <div>
        <label>Street Address:&nbsp;
          <input
            type='text'
            name='street_address'
            // value={}
            placeholder='street address'
          // onChange={}
          />
        </label>

        <label>City:&nbsp;
          <input
            type='text'
            name='city'
            // value={}
            placeholder='City'
          // onChange={}
          />
        </label>

        <label>Zip Code:&nbsp;
          <input
            type='text'
            name='zip'
            // value={}
            placeholder='Zip Code'
          // onChange={}
          />
        </label>

        <label>Zip Code:&nbsp;
          <input
            type='text'
            name='zip'
            // value={}
            placeholder='Zip Code'
          // onChange={}
          />
        </label>

        <label name='type'>Property Type:&nbsp;
          <select
            name='property_type'
          // onChange={}
          //value={}
          >
            <option value=''>-- Select A Type --</option>
            <option value='house'>House</option>
            <option value='apartment'>Apartment</option>
            <option value='Condo'>Condo</option>
          </select>
        </label>

        <label>Number of Rooms:&nbsp;
          <input
            type='text'
            name='leasable_area'
            // value={}
            placeholder='Number of Rooms'
          // onChange={}
          />
        </label>
        <label>Parking Available?:&nbsp;
          <input
            type='text'
            name='parking'
            // value={}
            placeholder='Parking Available?'
          // onChange={}
          />
        </label>

        <label>Additional Upgrades:&nbsp;
          <input
            type='text'
            name='upgrades'
            // value={}
            placeholder='Additional Upgrades'
          // onChange={}
          />
        </label>

        <label>Special Remarks:&nbsp;
          <input
            type='text'
            name='special_remarks'
            // value={}
            placeholder='Special Remarks'
          // onChange={}
          />
        </label>
      </div>
    </form>
  )
}