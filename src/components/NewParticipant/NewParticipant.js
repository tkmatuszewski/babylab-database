import React, {Component} from "react";
import NewParticipantChild from "../NewParticipantChild/NewParticipantChild";
import NewParticipantParent from "../NewParticipantParent/NewParticipantParent";
import NewParticipantSummary from "../NewParticipantSummary/NewParticipantSummary";
import {Link} from "react-router-dom";
import {home} from "../../routes";

const classNames = require('classnames');

class NewParticipant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "child",
            childName: "",
            childSurname: "",
            birthday: "",
            birthDay: "",
            birthMonth: "",
            birthYear: "",
            pregDuration: "",
            multilingual: "",
            languages: "",
            parentName: "",
            parentSurname: "",
            parentEmail: "",
            parentPhone: "",
            parentHomeTown: "",
            parentResidence: "",
            projects: []
        }
    }

    setData = (state) => {
        this.setState(state)
    }

    pageHandler = (name) => {
        this.setState({active: name})
    }

    render() {

        const childPart = classNames(this.state.active === "child" ? "active" : null)
        const parentPart = classNames(this.state.active === "parent" ? "active" : null)
        const summaryPart = classNames(this.state.active === "summary" ? "active" : null)

        return (
            <div className="newParticipant__bg">
                <div className="newParticipant__modal">
                    <div className="newParticipant__container">
                        <div className="newParticipant__right">
                            {(() => {
                                switch (this.state.active) {
                                    case "child":
                                        return <NewParticipantChild
                                            pageHandler={this.pageHandler}
                                            setData={this.setData}
                                            summary={this.state} />
                                    case "parent":
                                        return <NewParticipantParent
                                            pageHandler={this.pageHandler}
                                            setData={this.setData}
                                            summary={this.state} />
                                    case "summary":
                                        return <NewParticipantSummary
                                            summary={this.state}
                                            pageHandler={this.pageHandler} />
                                    default :
                                        return <NewParticipantChild
                                            childData={this.state}
                                            pageHandler={this.pageHandler}
                                            setData={this.setData} />
                                }
                            })()}
                            <Link to={home} className="newParticipant__cancel">
                                Anuluj
                            </Link>
                        </div>
                    </div>
                    <aside className="newParticipant__progress">
                        <h2 className="newParticipant__title">Nowe<br />badanie
                        </h2>
                        <div className={childPart}>
                            <span>1</span>
                            Dane dziecka
                        </div>
                        <div className={parentPart}>
                            <span>2</span>
                            Dane rodzica
                        </div>
                        <div className={summaryPart}>
                            <span>3</span>
                            Podsumowanie
                        </div>
                    </aside>
                </div>
            </div>
        )
    }
}


export default NewParticipant
