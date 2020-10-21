import React, {Component} from "react";
import {db} from "../Firebase/FirebaseFirestore";
import {AutoSizer, List} from 'react-virtualized'
import DataRow from "../DataRow/DataRow";

class DatabaseData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingInProgress: true,
            data: [],
            dataFiltered: [],
            projects: [],
            filterValue: ""
        }
    }

    handleClickAll = () => {
        const filtered = this.state.data.filter(child =>
            child)
        return this.setState({dataFiltered: filtered})
    }

    handleClickSelected = () => {
        const filtered = this.state.data.filter(child =>
            child.selected === true)
        return this.setState({dataFiltered: filtered})
    }

    handleFilter = () => {
        const value = this.state.filterValue.toLowerCase();

        const filtered = this.state.data.data().filter(child =>
            child.childName.toLowerCase().includes(value) ||
            child.childSurname.toLowerCase().includes(value))
        return this.setState({dataFiltered: filtered})
    }

    handleChange = e => {
        this.setState({filterValue: e.target.value}, this.handleFilter)
    }

    rowRenderer = ({index, key, style}) => {
        const childData = this.state.dataFiltered[index];
        return <DataRow index={index} id={key} childData={childData} style={style} />
    }

    render() {
        const rowHeight = 60;

        return (
            <div className="databaseData__container">
                <form className="databaseData__filter">
                    <h2 className="databaseData__filter__title">Przeszukaj bazę</h2>
                    <label>
                        <span />
                        <input type="text"
                               value={this.state.filterValue}
                               autoComplete="off"
                               placeholder="Szukaj po imieniu lub nazwisku"
                               onChange={this.handleChange} />
                    </label>
                </form>
                {this.state.loadingInProgress && <h2 className="databaseData__loader">Loading Data</h2>}
                <div className="databaseData__list">
                    <ul className="databaseData__list__setup">
                        <li onClick={() => this.handleClickAll()}>W</li>
                        <li onClick={() => this.handleClickSelected()}>
                            <svg className={"databaseData__list__element__fav"} xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 48 48" height={"30"} width={"30"} fill={"blue"}>
                                <path
                                    d="M12.9 29.6l-2.3 13.2c-0.1 0.4 0.1 0.8 0.4 1 0.3 0.2 0.7 0.3 1.1 0.1L24 37.6l11.9 6.3c0.2 0.1 0.3 0.1 0.5 0.1 0.2 0 0.4-0.1 0.6-0.2 0.3-0.2 0.5-0.6 0.4-1l-2.3-13.2 9.6-9.4c0.3-0.3 0.4-0.7 0.3-1 -0.1-0.4-0.4-0.6-0.8-0.7l-13.3-1.9L24.9 4.5c-0.3-0.7-1.5-0.7-1.8 0l-5.9 12.1L3.9 18.5c-0.4 0.1-0.7 0.3-0.8 0.7s0 0.8 0.3 1L12.9 29.6zM18 18.5c0.3 0 0.6-0.2 0.8-0.5L24 7.2l5.3 10.7c0.2 0.3 0.4 0.5 0.8 0.6l11.8 1.7 -8.5 8.3c-0.2 0.2-0.3 0.6-0.3 0.9l2 11.8 -10.6-5.5c-0.3-0.1-0.6-0.1-0.9 0l-10.6 5.6 2-11.8c0.1-0.3 0-0.7-0.3-0.9l-8.5-8.3L18 18.5z"
                                    fill="black" />
                            </svg>
                        </li>
                    </ul>
                    <AutoSizer>
                        {({width, height}) => (
                            <List
                                width={width}
                                height={height}
                                rowHeight={rowHeight}
                                rowRenderer={this.rowRenderer}
                                rowCount={this.state.dataFiltered.length}
                                handleClick={this.handleClick} />
                        )}
                    </AutoSizer>
                </div>
            </div>
        )
    }

    componentDidMount() {
        db.collection('childrenDatabase').onSnapshot(querySnapshot => {
            querySnapshot.docChanges().map(change => {
                let data = "";
                if (change.type === "added") {

                    data = this.setState({
                        dataFiltered: this.state.data.concat(change.doc.data()),
                        data: this.state.data.concat(change.doc.data())
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
        }, this.setState({
            loadingInProgress: false
        }))
    }
}

export default DatabaseData
