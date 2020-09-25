import React, {Component} from "react";

const classNames = require('classnames');

class AddNewForm extends Component {
    state = {
        birthDay: "",
        birthMonth: "",
        birthYear: "",
        multilingual: false,
        page: 1
    };

    inputHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    birthdayHandler = () => {
        // const birthday = [this.state]
        this.setState({childBirthday: this.state.birthDay + this.state.birthMonth + this.state.birthYear})
    }

    checkboxHandler = () => {
        this.setState({multilingual: !this.state.multilingual})
    };

    pageHandler = (number) => {
        this.setState({page: number})
    }

    render() {
        const page1 = classNames('marker', {'child': this.state.page === 1})
        const page2 = classNames('marker', {'parent': this.state.page === 2})
        return (
            <form action="" className="add__new__form">
                <div className="add__new__form__container">
                    <aside className="add__new__form__left">
                        <h2 className="add__new__form__title">Nowe badanie,
                            <span>nowa przygoda</span><span>doświadczenie</span></h2>
                        <button className="add__new__form__cancel"
                                onClick={() => {
                                    this.props.handleCloseModal();
                                }}>Anuluj
                        </button>
                    </aside>
                    <div className="add__new__form__right">
                        <h3 className="add__new__form__right__subheader">Dziecko</h3>
                        <button className="add__new__form__import">Importuj z pliku</button>
                        <label htmlFor="">Imię
                            <input type="text"
                                   name="childName"
                                   required={true}
                                   onChange={this.inputHandler} />
                        </label>
                        <label htmlFor="">Nazwisko
                            <input type="text"
                                   name="childSurname"
                                   required={true}
                                   onChange={this.inputHandler} />
                        </label>
                        <label htmlFor="">Długość trwania ciąży
                            <input type="text"
                                   name="pregnancyDurationInWeeks"
                                   required={true}
                                   onChange={this.inputHandler}
                                   placeholder="W tygodniach" />
                        </label>
                        <label htmlFor="" className="add__new__form__birthday">Data urodzenia
                            <div className="add__new__form__birthday__container"
                                 onChange={this.birthdayHandler}>
                                <label htmlFor="">
                                    DD
                                    <input type="text"
                                           name="birthDay"
                                           required={true}
                                           onChange={this.inputHandler} />
                                </label>
                                <label htmlFor="">MM
                                    <input type="text"
                                           name="birthMonth"
                                           required={true}
                                           onChange={this.inputHandler} />
                                </label>
                                <label htmlFor="">RRRR
                                    <input type="text"
                                           name="birthYear"
                                           required={true}
                                           onChange={this.inputHandler} />
                                </label>
                            </div>
                        </label>
                        <label htmlFor="" id="multilingual__label">Dziecko dwujęzyczne
                            <input id="multilingual__input"
                                   type="checkbox"
                                   checked={this.state.multilingual}
                                   onChange={this.checkboxHandler} />
                        </label>
                        {this.state.multilingual && <label htmlFor="">Znane języki
                            <input type="text"
                                   name="spokenLanguages"
                                   onChange={this.inputHandler} />
                        </label>}
                    </div>
                    {/*<div className="add__new__form__left">*/}
                    {/*    <div className="marker__container">*/}
                    {/*        <div className={"marker"}>*/}
                    {/*            <div className="marker__circle">1</div>*/}
                    {/*            <p>Dziecko</p>*/}
                    {/*        </div>*/}
                    {/*        <div className={"marker"}>*/}
                    {/*            <div className="marker__circle">2</div>*/}
                    {/*            <p>Rodzic</p>*/}
                    {/*        </div>*/}
                    {/*        <div className={"marker"}>*/}
                    {/*            <div className="marker__circle">3</div>*/}
                    {/*            <p>Wyślij</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="add__new__form__bottom">*/}
                    {/*<div className="add__new__form__button__container">*/}
                    {/*    <button className="add__new__form__submit"*/}
                    {/*            onClick={() => {*/}
                    {/*                this.pageHandler(2)*/}
                    {/*            }}>Następna*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                    {/*<div className="add__new__form__button__container">*/}
                    {/*<button className="add__new__form__button"*/}
                    {/*        onClick={() => {*/}
                    {/*            this.pageHandler(1)*/}
                    {/*        }}>Poprzednia*/}
                    {/*</button>*/}
                    {/*</div>*/}
                </div>
            </form>
        )
    }
}


{/*<div className="add__new__form__qa__parent">*/
}
{/*    <h3 className="add__new__form__parent__title">Rodzic</h3>*/
}
{/*    <label htmlFor="">Imię*/
}
{/*        <input type="text" name="parentName" required={true} onChange={this.inputHandler}/>*/
}
{/*    </label>*/
}
{/*    <label htmlFor="">Nazwisko*/
}
{/*        <input type="text" name="parentSurname" required={true} onChange={this.inputHandler}/>*/
}
{/*    </label>*/
}
{/*    <label htmlFor="">Telefon*/
}
{/*        <input type="text" name="parentPhone" required={true} onChange={this.inputHandler}/>*/
}
{/*    </label>*/
}
{/*    <label htmlFor="">Email*/
}
{/*        <input type="email" name="parentEmail" required={true} onChange={this.inputHandler}/>*/
}
{/*    </label>*/
}
{/*    <label htmlFor="">Miasto*/
}
{/*        <input type="text" name="homeTown" required={true} onChange={this.inputHandler}/>*/
}
{/*    </label>*/
}
{/*    <label htmlFor="">Miejsce zamieszkania*/
}
{/*        <input type="text" name="parentHomeAddress" required={true} onChange={this.inputHandler}/>*/
}
{/*    </label>*/
}
{/*</div>*/
}

export default AddNewForm
