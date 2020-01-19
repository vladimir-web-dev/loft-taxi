import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import logo from '../../images/logo.png';
import './Registration.css'

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }

    static propTypes = {
        changePage: PropTypes.func.isRequired
    }   

    handleChange = ({target}) => {
        this.setState({[target.name]: target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.changePage('MAP')
    }

    render() {
        return (
            <section className='section registration'>
                <div className='registration__content'>
                        <div className='registration__left'> 
                            <img className='logo' src={logo} alt='Logo'></img>
                        </div>
                        <div className='registration__right'>
                            <form className='formTag' onSubmit={this.handleSubmit}>
                                <div className="form">
                                    <h1 className='form__label'>Регистрация</h1>
                                    <h5 className='form__info'>
                                        Уже зарегистрированы? 
                                        <Link underline='none' onClick={() => this.props.changePage('MAP')}> Войти</Link>                       
                                    </h5>
                                    <div className='form__row'>
                                        <div className='form__col'>
                                            <TextField 
                                            onChange={this.handleChange} 
                                            name='email' 
                                            value={this.state.email} 
                                            label='Адрес электронной почты' 
                                            placeholder='Имя пользователя' 
                                            required
                                            fullWidth />
                                        </div>
                                    </div> 
                                    <div className='form__row'>
                                        <div className='form__col'>
                                            <TextField 
                                            onChange={this.handleChange} 
                                            name='firstName' 
                                            value={this.state.firstName} 
                                            label='Имя' 
                                            placeholder='Имя пользователя'
                                            required
                                            fullWidth />
                                        </div>
                                        <div className='form__col'>
                                            <TextField 
                                            onChange={this.handleChange} 
                                            name='lastName' 
                                            value={this.state.lastName} 
                                            label='Фамилия' 
                                            placeholder='Имя пользователя' 
                                            required
                                            fullWidth />
                                        </div>
                                    </div>  
                                    <div className='form__row'>
                                        <div className='form__col'>
                                            <TextField 
                                            onChange={this.handleChange} 
                                            name='password' 
                                            value={this.state.password} 
                                            label='Пароль' 
                                            placeholder='Пароль' 
                                            required
                                            fullWidth />
                                        </div>
                                    </div>
                                    <div className='form__row form__row--reverse'>
                                        <Button type='submit' >Войти</Button>
                                    </div>
                                </div>
                            </form>
                        </div>        
                    </div>                       
            </section>
        );
    }
}

export default Registration;