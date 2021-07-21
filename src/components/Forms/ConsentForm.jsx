import React from "react";
import CKEditor from "react-ckeditor-component";
import PointingError from "../LandingPage/ErrorComponent/PointingError";
function ConsentForm({ open }) {
  const editorData = localStorage.getItem("editorData") || "Type Here";
  const [content, setContent] = React.useState(editorData);

  const onChange = (evt) => {
    setContent(evt.editor.getData());
  };

  const onSave = () => {
    localStorage.setItem("editorData", content);
  };

  const onDiscard = () => {
    setContent(localStorage.getItem("editorData") || "Type Here");
  };

  const renderForm = () => {
    return (
      <div>
        <CKEditor
          activeClass="p10"
          content={content}
          events={{
            change: onChange,
          }}
        />
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button className="ui primary button" onClick={onSave}>
            Save
          </button>
          <button className="ui button" onClick={onDiscard}>
            Discard
          </button>
        </div>
      </div>
    );
  };

  return open ? renderForm() : null;
}

export default ConsentForm;
