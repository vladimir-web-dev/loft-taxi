import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import logo from '../../images/logo.png';
import './Login.css';


class Login extends React.Component {
    constructor({props}) {
        super(props);
        this.state = {
            name: '',
            password: ''
        }
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
            <section className='section login'>
                <div className='login__content'>
                    <div className='login__left'> 
                        <img className='logo' src={logo} alt="Logo"></img>
                    </div>
                    <div className='login__right'>
                        <form className='formTag' onSubmit={this.handleSubmit}>
                            <div className="form">
                                <h1 className='form__label'>Войти</h1>
                                <h5 className='form__info'>
                                    Новый пользователь? 
                                    <Link underline='none' onClick={() => this.props.changePage('REGISTRATION')}> Зарегистрируйтесь</Link>                       
                                </h5>
                                <div className='form__row'>
                                    <div className='form__col'>
                                        <TextField 
                                        onChange={this.handleChange} 
                                        name='name' 
                                        value={this.state.name}
                                        label='Имя пользователя' 
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

Login.propTypes = {
    changePage: PropTypes.func.isRequired
}

export default Login;