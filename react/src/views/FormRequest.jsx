import { useRef } from "react"

import {useStateContext} from "../context/ContextProvider.jsx";

export default function FormRequest() {
  const {user, token, setUser, setToken, notification} = useStateContext();
  return (
    <div className="flex justify-center flex-row">
      <form className="w-1/2">
        <div><input id="name" name="name" value={user.name} type="text" disabled/></div>
        <div className="mb-3">
          <div className="flex">
            <div className="w-1/2">
              <label htmlFor="start_date">From</label>
              <input type="date" id="start_date" name="start_date" />
            </div>
            <div className="w-1/2">
              <label htmlFor="end_date">To</label>
              <input type="date" id="end_date" name="end_date" />
            </div>
          </div>
          <div><label htmlFor="reason">Reason</label></div>
          <div><textarea rows="3" className="w-100" id="reason" name="reason"></textarea></div>
        </div>
        <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}
