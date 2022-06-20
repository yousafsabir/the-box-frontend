import React from "react";
import "./Form.css";

export default function Form() {
    return (
        <div className="FormOutCont">
            <div className="FormCont">
                <h2>What can us do for you?</h2>
                <p>
                    We are ready to work on a project of any complexity, whether
                    it’s commercial or residential.
                </p>
                <div className="InnerForm">
                    <input
                        type="text"
                        className="Req"
                        placeholder="Your Name e.g. M.Yousaf"
                        required
                    />
                    <input
                        className="Req"
                        type="email"
                        placeholder="Your Email e.g. yousafsabir430516@gmail.com"
                        required
                    />
                </div>
                <div className="InnerForm">
                    <input
                        className="Req"
                        list="dropdown"
                        type="text"
                        placeholder="Reason for Contacting"
                        required
                    />
                    <datalist id="dropdown">
                        <option value="Reason1"></option>
                        <option value="Reason2"></option>
                        <option value="Reason3"></option>
                    </datalist>
                    <input type="tel" placeholder="Phone e.g. +923041317170" />
                </div>
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Message"
                ></textarea>
                <p>
                    <span>*</span> indicates a required field
                </p>
                <button type="submit">Submit</button>
            </div>
        </div>
    );
}
