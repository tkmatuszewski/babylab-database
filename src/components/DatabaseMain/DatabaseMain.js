import React, {Component} from "react";
import AddNewForm from "../AddNewForm/AddNewForm";
import Projects from "../Projects/Projects";
import Other1 from "../Other1/Other1";
import Other2 from "../Other2/Other2";
import DatabaseData from "../DatabaseData/DatabaseData";

const classNames = require('classnames');


class DatabaseMain extends Component {

    state = {
        showForm: false,
        showMenu: false,
        showOption: null,
        showDatabase: true
    }

    handleClickHamburger = (state) => {
        this.setState({showMenu: !state})
    }

    handleMenuOption = (option) => {
        this.setState({
            showOption: option,
            showMenu: false,
            showDatabase: false
        })
    }

    handleCloseModal = () => {
        this.setState({
            showOption: null,
            showDatabase: true,
            showMenu: false
        })
    };

    render() {
        const hamburger = classNames({
            "database__main__control__hamburger": !this.state.showMenu,
            "database__main__control__hamburger__active": this.state.showMenu
        })
        const menu = classNames({
            "database__main__control__nav": !this.state.showMenu,
            "database__main__control__nav__active": this.state.showMenu
        })
        return (
            <section className="database__main">
                <button className={hamburger}
                        onClick={() => this.handleClickHamburger(this.state.showMenu)} />
                <ul className={menu}>
                    <div className="database__main__control__container">
                        <li className="database__main__control__item"
                            id="Nowy badany"
                            onClick={(e) => {
                                this.handleMenuOption(e.target.id)
                            }}
                        >Nowy badany
                        </li>
                        <li className="database__main__control__item"
                            id="Projekty"
                            onClick={(e) => {
                                this.handleMenuOption(e.target.id)
                            }}>Projekty
                        </li>
                        <li className="database__main__control__item"
                            id="Inne 1"
                            onClick={(e) => {
                                this.handleMenuOption(e.target.id)
                            }}>Inne 1
                        </li>
                        <li className="database__main__control__item"
                            id="Inne 2"
                            onClick={(e) => {
                                this.handleMenuOption(e.target.id)
                            }}>Inne 2
                        </li>
                    </div>
                </ul>
                    {this.state.showOption === 'Projekty' ?
                        <Projects handleCloseModal={this.handleCloseModal} /> : null}
                <div className="database__main__container">
                    {this.state.showOption === 'Nowy badany' ?
                        <AddNewForm handleCloseModal={this.handleCloseModal} /> : null}
                    {this.state.showOption === 'Inne 1' ? <Other1 handleCloseModal={this.handleCloseModal} /> : null}
                    {this.state.showOption === 'Inne 2' ? <Other2 handleCloseModal={this.handleCloseModal} /> : null}
                    {this.state.showDatabase ? <DatabaseData /> : null}
                </div>
            </section>
        )
    }
}

export default DatabaseMain
