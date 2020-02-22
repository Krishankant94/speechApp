import React, { Component } from "react";
import Button from "../button";
import validate from "../../../validate";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: (props.dataObj.author && props.dataObj.author.name) || "krishan",
      mobile: (props.dataObj.author && props.dataObj.author.mobile) || "",
      speech: props.dataObj.text || "",
      date: props.dataObj.date || "",
      errors: {
        author: "",
        mobile: "",
        speech: ""
      }
    };
  }

  validateData = e => {
    let res,
      err = "";
    switch (e.target.name) {
      case "author":
        res = validate(e.target.value, "name");
        err = !res && "please write a valid name";
        break;
      case "mobile":
        res = validate(e.target.value, "mobile");
        err = !res && "please enter valid mobile number";
        break;
      case "speech":
        res = validate(e.target.value, "textarea");
        err = !res && "speech is not valid";
        break;
    }

    this.setState({
      [e.target.name]: e.target.value,
      errors: {
        ...this.state.errors,
        [e.target.name]: err
      }
    });
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.validateData(e);
  };

  handleUpdate = () => {
    const { author, mobile, speech, date } = this.state;
    let obj = {
      text: speech,
      sid: parseInt(Math.random() * (1200 - 1140) + 1140),
      author: {
        name: author,
        mobile
      },
      keywords: ["education", "health", "water"],
      date
    };
    this.props.onUpdate(obj);
  };

  handleOnSave = () => {
    const { author, mobile, speech, date } = this.state;
    let obj = {
      text: speech,
      sid: parseInt(Math.random() * (1200 - 1140) + 1140),
      author: {
        name: author,
        mobile
      },
      keywords: ["education", "health", "water"],
      date
    };
    this.props.onSave(obj);
  };

  allFieldValid = () => {
    const { author, mobile, speech, date, errors } = this.state;
    return (
      !speech ||
      !mobile ||
      !author ||
      !date ||
      errors.author ||
      errors.mobile ||
      errors.speech
    );
  };

  UpdateOrSave = () => {
    if (this.props.dataObj && this.props.edit) {
      return (
        <>
          {" "}
          <Button primary onClick={this.handleUpdate}>
            Update
          </Button>
          <Button primary onClick={this.props.onDelete}>
            Delete
          </Button>
        </>
      );
    } else if (this.props.edit) {
      return (
        <Button
          disabled={this.allFieldValid()}
          primary
          onClick={this.handleOnSave}
        >
          Save
        </Button>
      );
    }
  };

  render() {
    const { author, mobile, speech, date, errors } = this.state;
    const { edit, dataObj } = this.props;

    return (
      <div className="modal">
        <div className="modal-content">
          <div className="form-group">
            <label>Speech</label>
            <textarea
              type="text"
              className="form-control speech"
              name="speech"
              placeholder="Enter Your Speech"
              onChange={this.handleOnChange}
              value={speech}
            />
            {errors.speech && (
              <span className="text-danger">{errors.speech}</span>
            )}
          </div>
          <div className="middle-section">
            <div className="form-group">
              <label>Author</label>
              <input
                type="text"
                name="author"
                className="form-control"
                placeholder="Enter Name"
                onChange={this.handleOnChange}
                value={author}
              />
              {errors.author && (
                <span className="text-danger">{errors.author}</span>
              )}
            </div>
            <div className="form-group">
              <label>Mobile</label>
              <input
                type="text"
                name="mobile"
                className="form-control"
                placeholder="Mobile Number"
                onChange={this.handleOnChange}
                value={mobile}
              />
              {errors.mobile && (
                <span className="text-danger">{errors.mobile}</span>
              )}
            </div>

            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                name="date"
                className="form-control"
                onChange={this.handleOnChange}
                value={date}
              />
            </div>
          </div>
          <div className="btn-section">
            {this.UpdateOrSave()}
            <Button secondary onClick={this.props.onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
