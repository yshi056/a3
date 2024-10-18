import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";
export default function AssignmentControls() {
  return (
    <div id="wd-assignment-controls" className="text-nowrap">
        <div>
        <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment</button>
        <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group</button>
        </div>
        <div className="position-relative w-50 me-1 float-end">
          <FaSearch className="position-absolute" style={{ top: '10px', left: '10px' }}/>
          <input
            type="text"
            className="form-control pl-4"
            placeholder="Search for Assignment"
            style={{ paddingLeft: '30px' }} 
          />
        </div>
      </div>
);
}