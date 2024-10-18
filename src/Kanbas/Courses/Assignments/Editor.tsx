export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" className="form-control mb-2"/><br /><br />
      <textarea id="wd-description" className="form-control mb-2">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
      <tr>
        <td align="right" valign="top">
          <label htmlFor="wd-points">Points</label>
        </td>
        <td>
          <input id="wd-points" value={100} className="form-control mb-2"/>
        </td>
      </tr>
      <br/>
      <tr>
        <td align="right" valign="top">
          <label htmlFor="wd-group">Assignment Group</label>
        </td>
        <select id="wd-group" className="form-control mb-2">
          <option value="QUIZ">QUIZ</option>
          <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
        </select>
      </tr>
      <br/>
      <tr>
        <td align="right" valign="top">
          <label htmlFor="wd-display-grade-as">Display Grade as</label>
        </td>
        <select id="wd-display_grade-as" className="form-control mb-2">
          <option value="Raw Score">Raw Score</option>
          <option selected value="Percentage">Percentage</option>
        </select>
      </tr>
      <br/>
      <tr>
        <td align="right" valign="top">
          <label htmlFor="wd-submission-type">Submission Type</label>
        </td>
        <select id="wd-submission-type" className="form-control mb-2">
          <option selected value="Online">Online</option>
        </select>
      </tr> 
      <br/>
      <tr>
      <label>Online Entry Options:</label><br/>
      <input type="checkbox" name="check-type" id="wd-text-entry"/>
      <label htmlFor="wd-text-entry">Text Entry</label><br/>
      <input type="checkbox" name="check-type" id="wd-website-url"/>
      <label htmlFor="wd-website-url">Website URL</label><br/>
      <input type="checkbox" name="check-type" id="wd-media-recordings"/>
      <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
      <input type="checkbox" name="check-type" id="wd-student-annotation"/>
      <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
      <input type="checkbox" name="check-type" id="wd-file-upload"/>
      <label htmlFor="wd-file-upload">File Uploads</label><br/>
      </tr>
      <br/>
      <tr>
        <td align="right" valign="top">
          <label htmlFor="wd-assign-to">Assign to</label>
        </td>
        <td>
          <input id="wd-points" value="Everyone" className="form-control mb-2"/>
        </td>
      </tr>
      <br/>
      <tr>
        <td align="right" valign="top">
          <label htmlFor="wd-due-date">Due</label>
        </td>
        <td>
        <input type="date" id="wd-due-date"value="2024-05-13" className="form-control mb-2"/>
        </td>
      </tr>
      <br/>
      <tr>
        <td align="right" valign="top">
          <label htmlFor="wd-avaliable-from">Avaliable From</label>
          <br/>
          <label htmlFor="wd-avaliable-until">Avaliable Until</label> 
        </td>
        <td>
        <input type="date" id="wd-avaliable-from"value="2024-05-06" className="form-control mb-2"/>
        <input type="date" id="wd-avaliable-until"value="2024-05-20"className="form-control mb-2"/>
        </td>
      </tr>
      <button className="btn btn-secondary w-50">Cancel</button><button className="btn btn-danger w-50">Save</button>
    </table>
  </div>
);}

 