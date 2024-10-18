import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AMControlButtons from "./AMControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter(assignment => assignment.course === cid);
    return (
      <div>
        <AssignmentControls /><br /><br /><br />
        <ul id="wd-assignments" className="list-group rounded-0">
        <div className="wd-title p-3 ps-2 bg-secondary"> 
        <BsGripVertical className="me-2 fs-3" />
          ASSIGNMENTS  40% of Total
          <AMControlButtons />  
        </div></ul>
        {assignments.map((assignment) => (
                <li key={assignment._id} className="wd-assignment list-group-item p-3 ps-1">
                    <a href={`/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`} className="wd-assignment-link d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3" />
                        <FaRegFileAlt className="me-2 fs-3" />
                        {assignment.title}
                        <AssignmentControlButtons />
                    </a>
                    <ul className="wd-assignment-details list-group rounded-0">
                        <ul className="wd-assignment-detail list-group-item">Multiple Modules | Not available until {assignment.availableFrom} |</ul>
                        <ul className="wd-assignment-detail list-group-item">Due {assignment.availableUntil} | {assignment.points}pts</ul>
                    </ul>
                </li>
            ))}
    </div>
     );
}
  
  