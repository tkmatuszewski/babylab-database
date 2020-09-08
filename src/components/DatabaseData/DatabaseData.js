import React, {Component} from "react";
import {db} from "../Firebase/FirebaseFirestore";
import {List} from 'react-virtualized'

const classNames = require('classnames');

class DatabaseData extends Component {

    state = {
        loadingInProgress: true,
        data: [],
        selectedData: [],
        projects: [
            {
                projectName: "noworodki",
                projectDescription: "About project",
                meetingCountTotal: 5,
                meetingCountCurrent: 0,
                participants: []
            },
            {
                projectName: "nastolatki",
                projectDescription: "About project",
                meetingCountTotal: 4,
                meetingCountCurrent: 2,
                participants: []
            }
        ],
        selected: {
            all: true,
            target: false
        },
        showFullData: false
    }

    handleSelected = (boolean) => {
        this.setState(prevState => ({
                ...prevState.selected,
                selected: {
                    all: boolean,
                    target: !boolean
                }
            })
        )
    }

    handleClick = () => {
        this.setState({showFullData: !this.state.showFullData})
    }

    handleChildAge(date) {
        const today = new Date();
        const birthDate = new Date(date);
        //years
        let ageYears = today.getFullYear() - birthDate.getFullYear();
        //months
        let ageMonths = today.getMonth() - birthDate.getMonth()
        let age = ageYears + " lat " + ageMonths + " miesięcy ";


        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            ageYears--;
        }
        if (ageYears === 0) {
            age = ageMonths + " miesięcy "
        }
        return age;
    }

    handleFavorites = (data) => {

        if (this.state.selectedData.includes(data)) {
            const newArray = this.state.selectedData.filter((value) => {
                return value !== data
            })
            this.setState({selectedData: newArray})
        } else {
            this.setState({selectedData: this.state.selectedData.concat(data)})
        }
    }

    rowRendererAll = ({index, key, style}) => {
        const childData = this.state.data[index];
        return (
            <div key={key} style={style} className={"databaseData__list__element"}
                 onClick={this.handleClick}>
                <div className={"databaseData__list__element__id"}>{index + 1}</div>
                <div className={"databaseData__list__element__fav"}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height={"30"} width={"30"}
                         fill={"purple"}
                         onClick={() => this.handleFavorites(childData)}>
                        <path
                            d="M12.9 29.6l-2.3 13.2c-0.1 0.4 0.1 0.8 0.4 1 0.3 0.2 0.7 0.3 1.1 0.1L24 37.6l11.9 6.3c0.2 0.1 0.3 0.1 0.5 0.1 0.2 0 0.4-0.1 0.6-0.2 0.3-0.2 0.5-0.6 0.4-1l-2.3-13.2 9.6-9.4c0.3-0.3 0.4-0.7 0.3-1 -0.1-0.4-0.4-0.6-0.8-0.7l-13.3-1.9L24.9 4.5c-0.3-0.7-1.5-0.7-1.8 0l-5.9 12.1L3.9 18.5c-0.4 0.1-0.7 0.3-0.8 0.7s0 0.8 0.3 1L12.9 29.6zM18 18.5c0.3 0 0.6-0.2 0.8-0.5L24 7.2l5.3 10.7c0.2 0.3 0.4 0.5 0.8 0.6l11.8 1.7 -8.5 8.3c-0.2 0.2-0.3 0.6-0.3 0.9l2 11.8 -10.6-5.5c-0.3-0.1-0.6-0.1-0.9 0l-10.6 5.6 2-11.8c0.1-0.3 0-0.7-0.3-0.9l-8.5-8.3L18 18.5z"
                            fill="#008ef9" />
                    </svg>
                </div>
                <div className={"databaseData__list__element__names"}>
                    <span>{childData.childName}</span>
                    <span>{childData.childSurname}</span>
                </div>
                <div className={"databaseData__list__element__age"}>{this.handleChildAge(childData.dateOfBirth)}</div>
                <div className={"databaseData__list__element__projects"}>
                    <span>Projekty</span>
                    <button className={"databaseData__list__element__projects__add"}>
                        Dołącz
                    </button>
                </div>
                <div className={"databaseData__list__element__meetings"}>
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
                <div className="databaseData__list__element__menu">
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
                {this.state.showFullData ? <h3>Pozostałe dane</h3> : null}
            </div>
        )
    }

    rowRendererSelected = ({index, key, style}) => {
        const childData = this.state.selectedData[index];
        return (
            <div key={key}
                 style={style}
                 className={"databaseData__list__element"}
                 onClick={this.handleClick}>
                <div className={"databaseData__list__element__id"}>{index + 1}</div>
                <div className={"databaseData__list__element__fav"}>
                    <span onClick={() => this.handleFavorites(childData)} />
                </div>
                <div className={"databaseData__list__element__names"}>
                    <span>{childData.childName}</span>
                    <span>{childData.childSurname}</span>
                </div>
                <div className={"databaseData__list__element__age"}>{this.handleChildAge(childData.dateOfBirth)}</div>
                <div className={"databaseData__list__element__projects"}>
                    Projekty
                </div>
                <div className={"databaseData__list__element__meetings"}>
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
                <div>{this.handleMenu}</div>
                {/*<button className={"databaseData__list__element__menu"} />*/}
                {this.state.showFullData ? <h3>Pozostałe dane</h3> : null}
            </div>
        )
    }

    render() {

        const listHeight = 750;
        const rowHeight = 80;
        const rowWidth = 1700;

        const selectorToggleAll = classNames(
            {
                "database__data__selector": true,
                "active": this.state.selected.all
            })

        const selectorToggleTarget = classNames(
            {
                "database__data__selector": true,
                "active": this.state.selected.target
            })

        return (
            <>
                {/*<ul className="database__data__selector">*/}
                {/*    <li className={selectorToggleAll}*/}
                {/*        onClick={() => this.handleSelected(true)}>*/}
                {/*        Wszyscy*/}
                {/*    </li>*/}
                {/*    <li className={selectorToggleTarget}*/}
                {/*        onClick={() => this.handleSelected(false)}>*/}
                {/*        Zaznaczeni*/}
                {/*    </li>*/}
                {/*</ul>*/}
                {/*<div>*/}
                {this.state.loadingInProgress && <h2 className="database__data__loading__status">Loading Data</h2>}
                <div className="databaseData__list">
                    <ul className="database__data__selector">
                        <li className={selectorToggleAll}
                            onClick={() => this.handleSelected(true)}>
                            Wszyscy
                        </li>
                        <li className={selectorToggleTarget}
                            onClick={() => this.handleSelected(false)}>
                            Zaznaczeni
                        </li>
                    </ul>
                    {this.state.selected.all ?
                        <List
                            width={rowWidth}
                            height={listHeight}
                            rowHeight={rowHeight}
                            rowRenderer={this.rowRendererAll}
                            rowCount={this.state.data.length} />
                        :
                        <List
                            width={rowWidth}
                            height={listHeight}
                            rowHeight={rowHeight}
                            rowRenderer={this.rowRendererSelected}
                            rowCount={this.state.selectedData.length} />
                    }
                </div>
                {/*</div>*/}
            </>
        )
    }

    componentDidMount() {
        db.collection('childrenDatabase').onSnapshot(querySnapshot => {
            querySnapshot.docChanges().map((change) => {
                let data = null;
                if (change.type === "added") {
                    data = this.setState({
                        data: this.state.data.concat(change.doc.data()),
                    });
                }
                if (change.type === "modified") {
                    data = console.log("Zmodyfikowano ", change.doc);
                }
                if (change.type === "removed") {
                    const filtered = this.state.data.filter(event => event.id !== change.doc.id);
                    data = this.setState({data: filtered});
                }
                return data
            })
        }, this.setState({loadingInProgress: false}))
    }
}

export default DatabaseData
