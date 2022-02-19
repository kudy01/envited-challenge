import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

import "./styles.css";

const CreatePage = () => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      id: Math.random().toString(),
      eventName: "",
      hostName: "",
      location: "",
      startDate: "",
      endDate: "",
      eventFooter: "",
    },
    validationSchema: Yup.object({
      eventName: Yup.string().required("You must enter a event name"),
      hostName: Yup.string().required("You must enter a host name"),
      location: Yup.string().required("You must enter a location"),
      startDate: Yup.date().required("You must enter a date"),
      endDate: Yup.date().required("You must enter a date"),
      eventFooter: Yup.string(),
    }),
    onSubmit: (values) => {
      sessionStorage.setItem("event", JSON.stringify(values));
      history.push(`/event/${values.id}`);
    },
  });

  return (
    <div className="br3 ba bg-white mv5 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4">
        <div className="measure">
          <h1 className="f2 fw6 ph0 mh0 logo title">Create an Event</h1>

          <form onSubmit={formik.handleSubmit}>
            <div className="mv4">
              <label className="label">Event Name:</label>
              <input
                type="text"
                name="eventName"
                value={formik.values.eventName}
                onChange={formik.handleChange}
                className="mt1 pa2 input-reset ba b--black bw1 bg-transparent w-100 br3 inputText"
                placeholder="Name of the event"
              />
              {formik.errors.eventName && formik.touched.eventName && (
                <p className="input-error">{formik.errors.eventName}</p>
              )}
            </div>
            <div className="mv4">
              <label className="label">Host Name:</label>
              <input
                type="text"
                name="hostName"
                value={formik.values.hostName}
                onChange={formik.handleChange}
                className="mt1 pa2 input-reset ba b--black bw1 bg-transparent w-100 br3 inputText"
                placeholder="Name of the host"
              />
              {formik.errors.hostName && formik.touched.hostName && (
                <p className="input-error">{formik.errors.hostName}</p>
              )}
            </div>
            <div className="mv4">
              <label className="label">Location:</label>
              <input
                type="text"
                name="location"
                value={formik.values.location}
                onChange={formik.handleChange}
                className="mt1 pa2 input-reset ba b--black bw1 bg-transparent w-100 br3 inputText"
                placeholder="Location of the event"
              />
              {formik.errors.location && formik.touched.location && (
                <p className="input-error">{formik.errors.location}</p>
              )}
            </div>
            <div className="mv4">
              <label className="label">Start Date:</label>
              <input
                type="date"
                name="startDate"
                value={formik.values.startDate}
                onChange={formik.handleChange}
                className="mt1 pa2 input-reset ba b--black bw1 bg-transparent w-100 br3 inputText"
              />
              {formik.errors.startDate && formik.touched.startDate && (
                <p className="input-error">{formik.errors.startDate}</p>
              )}
            </div>
            <div className="mv4">
              <label className="label">End Date:</label>
              <input
                type="date"
                name="endDate"
                value={formik.values.endDate}
                onChange={formik.handleChange}
                className="mt1 pa2 input-reset ba b--black bw1 bg-transparent w-100 br3 inputText"
              />
              {formik.errors.endDate && formik.touched.endDate && (
                <p className="input-error">{formik.errors.endDate}</p>
              )}
            </div>
            <div className="mv4">
              <label className="label">Event Footer</label>
              <input
                type="text"
                name="eventFooter"
                value={formik.values.eventFooter}
                onChange={formik.handleChange}
                className="mt1 pa2 input-reset ba b--black bw1 bg-transparent w-100 br3 inputText"
                placeholder="Enter a footer description"
              />
              {formik.errors.eventFooter && formik.touched.eventFooter && (
                <p className="input-error">{formik.errors.eventFooter}</p>
              )}
            </div>
            <>
              <button
                type="submit"
                style={{
                  background:
                    "linear-gradient(107.04deg, #06D6A0 48.99%, #5794F7 118.32%)",
                  fontFamily: "OpenSansBold",
                }}
                className="b no-underline ph5 mb2 pv2 input-reset ba b--near-white white grow pointer f3 dib br-pill"
              >
                Next
              </button>
            </>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreatePage;
