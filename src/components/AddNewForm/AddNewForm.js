import React, {Component} from "react";

class AddNewForm extends Component {
    state = {
        multilingual: false
    };

    inputHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    checkboxHandler = () => {
        this.setState({multilingual: !this.state.multilingual})
    };

    render() {

        return (

            <form action="" className="add__new__form">
                <div className="add__new__form__left">
                    <h2 className="add__new__form__title">Nowe badanie</h2>
                    <span className="add__new__form__illustration"/>
                </div>
                <div className="add__new__form__right">
                    <button className="add__new__form__close"/>
                    <div className="add__new__form__qa__child">
                        <h3 className="add__new__form__child__title">Dziecko</h3>
                        <label htmlFor="">Imię
                            <input type="text" name="childName" required={true} onChange={this.inputHandler}/>
                        </label>
                        <label htmlFor="">Nazwisko
                            <input type="text" name="childSurname" required={true} onChange={this.inputHandler}/>
                        </label>
                        <label htmlFor="">Data urodzenia
                            <input type="date" name="dateOfBirth" required={true} onChange={this.inputHandler}/>
                        </label>
                        <label htmlFor="">Tydzień ciąży w którym urodziło się dziecko
                            <input type="number" name="pregnancyDurationInWeeks" required={true}
                                   onChange={this.inputHandler}/>
                        </label>
                        <label htmlFor="" id="multilingual__label">Czy dziecko jest dwujęzyczne?
                            <input id="multilingual__input" type="checkbox" checked={this.state.multilingual}
                                   onChange={this.checkboxHandler}/>
                        </label>
                        {this.state.multilingual && <label htmlFor="">Znane języki
                            <input type="text" name="spokenLanguages" onChange={this.inputHandler}/>
                        </label>}
                    </div>
                    <div className="add__new__form__qa__parent">
                        <h3 className="add__new__form__parent__title">Rodzic</h3>
                        <label htmlFor="">Imię
                            <input type="text" name="parentName" required={true} onChange={this.inputHandler}/>
                        </label>
                        <label htmlFor="">Nazwisko
                            <input type="text" name="parentSurname" required={true} onChange={this.inputHandler}/>
                        </label>
                        <label htmlFor="">Telefon
                            <input type="text" name="parentPhone" required={true} onChange={this.inputHandler}/>
                        </label>
                        <label htmlFor="">Email
                            <input type="email" name="parentEmail" required={true} onChange={this.inputHandler}/>
                        </label>
                        <label htmlFor="">Miasto
                            <input type="text" name="homeTown" required={true} onChange={this.inputHandler}/>
                        </label>
                        <label htmlFor="">Miejsce zamieszkania
                            <input type="text" name="parentHomeAddress" required={true} onChange={this.inputHandler}/>
                        </label>
                    </div>
                    <button type="submit" className="add__new__form__submit">Dodaj</button>
                </div>
            </form>
        )
    }
}

export default AddNewForm
