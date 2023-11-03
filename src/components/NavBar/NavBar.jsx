import React, { useEffect, useState } from "react";
import { TiThList } from "react-icons/ti";
import "./NavBar.css"; // Change the CSS file name to NewNavBar.css
import { useDispatch, useSelector } from "react-redux";
import { selectData } from "../../redux/actions";

const getGroupValue = () => {
  if (localStorage.getItem("group")) {
    return localStorage.getItem("group");
  } else {
    return "status";
  }
}

const getOrderValue = () => {
  if (localStorage.getItem("order")) {
    return localStorage.getItem("order");
  } else {
    return "priority";
  }
}

const NewNavBar = () => {
  const [displayOnClick, setDisplayOnClick] = useState(false);
  const dispatch = useDispatch();
  const { allTickets, allUser } = useSelector(state => state.DataSlice);
  const [groupValue, setGroupValue] = useState(getGroupValue());
  const [orderValue, setOrderValue] = useState(getOrderValue());

  const handleValueChange = (e, isGroup) => {
    if (isGroup) {
      setGroupValue(e.target.value);
      setDisplayOnClick(!displayOnClick);
      localStorage.setItem("group", e.target.value);
    } else {
      setOrderValue(e.target.value);
      setDisplayOnClick(!displayOnClick);
      localStorage.setItem("order", e.target.value);
    }
  }

  useEffect(() => {
    if (groupValue === 'user') {
      dispatch(selectData(groupValue, {
        allTickets,
        allUser
      }, orderValue));
    } else {
      dispatch(selectData(groupValue, allTickets, orderValue));
    }
  }, [allTickets, dispatch, groupValue, allUser, orderValue]);

  return (
    <div className="newTopHeader" style={{ paddingLeft: "10px" }}>
      <div className="newDisplayButton">
        <button
          className="newButton p-10 f-16"
          onClick={() => setDisplayOnClick(!displayOnClick)}
        >
          <TiThList /> Display
        </button>
        {displayOnClick && (
          <div className="newDropOnClick flex-gap-10 p-10">
            <div className="newSelectGroup flex-sb">
              <label htmlFor="group">Grouping</label>
              <select
                value={groupValue}
                onChange={(e) => handleValueChange(e, true)}
                className="newSelectStyle"
                name="group"
                id="group"
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="newSelectGroup flex-sb">
              <label htmlFor="order">Ordering</label>
              <select
                value={orderValue}
                onChange={(e) => handleValueChange(e, false)}
                className="newSelectStyle"
                name="order"
                id="order"
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewNavBar;
