import React, { useState } from "react";
import BasicContainer from "../../Container/BasicContainer";
import { Form, Field } from 'react-final-form';
function ExerciseForm() {

  function handleSubmit () {
    //do something with data
  }

  function onSubmit () {
    //pass data in program builder
  }

  return (
    <BasicContainer>
      <div className="ui form">
        <div className="ui grid">
          <div class="six wide  column">
            <Form
              onSubmit={onSubmit}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <div className="inline field">
                    <label className="three wide column">Reps</label>
                    <Field name="Reps" component="input" placeholder="First Name" type="number" />
                  </div>

                  <div className="inline field">
                    <label className="three wide column">Hold Time</label>
                    <Field type="number" maxlength="3" placeholder="Hold" component="input" type="number" />
                  </div>
                  <div className="inline field">
                    <label>Resistance</label>
                    <Field name="weight" component="select">
                      <option value="">Weight</option>
                      <option value="0.5">0.5 Kg </option>
                      <option value="2">1 Kg</option>
                      <option value="3">1.5 Kg</option>
                      <option value="4">2 Kg</option>
                      <option value="5">2.5 Kg</option>
                      <option value="6">3 Kg</option>
                      <option value="7">3.5 Kg</option>
                      <option value="8">4 Kg</option>
                    </Field>
                    <div class="field">
                      <Field name="Theraband" component="select">
                        <option value="">Theraband</option>
                        <option value="Yellow">Yellow </option>
                        <option value="Red">Red</option>
                        <option value="Green">Green</option>
                        <option value="Blue">Blue</option>
                        <option value="Black">Black</option>
                        <option value="Silver">Silver</option>
                      </Field>
                    </div>
                  </div>
                  <div class="six wide  column">
                    <div className="inline field">
                      <label>Sets</label>
                      <Field type="number" maxlength="3" placeholder="Sets" component="input" />
                    </div>
                    <div className="inline field">
                      <label>Hold Time</label>
                      <Field type="number" maxlength="3" placeholder="Hold Time" component="input" />
                    </div>
                  </div>
                </form>
              )}
            />
          </div>
        </div>
      </div>
    </BasicContainer>
  );
}

export default ExerciseForm;
