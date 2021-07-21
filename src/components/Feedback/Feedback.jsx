import React from "react";
import CustomizedTables from "../Tables/Table";
import BasicContainer from "../Container/BasicContainer";
import { feedbackTableHeading, feedbackTableData } from "../../db";
import { getFeedback } from "../../actions/feedbackAction";
import { connect } from "react-redux";

function Feedback(props) {
  React.useEffect(() => {
    props.getFeedback();
  }, []);
  const feedbackTableData = props.feedbacks.map((feedback) => ({
    date: new Date(feedback.date).toDateString(),
    ptName: feedback.patientName,
    score: feedback.score,
    recommend: feedback.recommend ? "Yes" : "No",
    actions: "actions",
  }));
  return (
    <BasicContainer>
      <h2 class="ui dividing header">FEEDBACK LIST</h2>
      <CustomizedTables
        title={"New Feedback"}
        headings={feedbackTableHeading}
        rows={feedbackTableData}
      />
    </BasicContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    feedbacks: state.feedbacks,
  };
};

export default connect(mapStateToProps, { getFeedback })(Feedback);
