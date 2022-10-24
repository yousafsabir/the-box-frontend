import React from "react";
import "./Cta.scss";

const Cta: React.FC = () => {
    return (
        <section className="cta">
            <div className="cta-container">
                <h2 className="h4">What can we do for you?</h2>
                <p className="para-md">
                    We are ready to work on a project of any complexity, whether
                    it’s commercial or residential.
                </p>
                <div className="input-grid">
                    <input type="text" placeholder="Your Name*" />
                    <input type="text" placeholder="Email*" />
                    {/* <input type="text" placeholder="Reason for Contacting*" /> */}
                    <div className="dropdown">
                        <select name="" id="">
                            <option value="0">Reason for Contacting*</option>
                            <option value="1">Reason 1</option>
                            <option value="2">Reason 2</option>
                        </select>
                        <img src="/images/icon-dropdown.svg" alt="" />
                    </div>
                    <input type="text" placeholder="Phone" />
                </div>
                <textarea
                    className="textarea"
                    name="textarea"
                    id=""
                    placeholder="message"
                ></textarea>
                <span>
                    <span className="estarric">*</span> indicates a required
                    field
                </span>
                <button className="para-reg">Submit</button>
            </div>
        </section>
    );
};

export default Cta;
