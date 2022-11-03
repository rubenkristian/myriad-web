import {useState} from 'react';
import {useNavigate} from 'react-router';

import {Button, TextField, Typography} from '@material-ui/core';

import {useStyles} from './LoginByEmail.style';

import {getCheckEmail} from 'src/lib/api/user';
import i18n from 'src/locale';

interface LoginByEmailInterface {
  email: string;
  setEmail: (string) => void;
}
const LoginByEmail = (props: LoginByEmailInterface) => {
  const {email, setEmail} = props;
  const navigate = useNavigate();
  const styles = useStyles();

  // const [email, setEmail] = useState('');
  const [error, setError] = useState({
    isError: false,
    message: '',
  });

  const isEmail = (email: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;

    if (!input.length) {
      setError({isError: false, message: ''});
    } else if (!isEmail(input)) {
      setError({
        isError: true,
        message: 'Please enter a valid email!',
      });
    } else {
      setError({
        isError: false,
        message: '',
      });
    }
    setEmail(event.target.value);
  };

  const handleNext = async () => {
    const checkEmail = await getCheckEmail(email);
    if (checkEmail) {
      //TODO: handle login if email is registered
    } else {
      navigate('/createAccounts');
    }
  };

  return (
    <div className={styles.root}>
      <div>
        <Typography className={styles.title}>{i18n.t('Login.Email.LoginByEmail.Title')}</Typography>
        <Typography className={styles.subtitle}>
          {i18n.t('Login.Email.LoginByEmail.Subtitle')}
        </Typography>
      </div>
      <TextField
        fullWidth
        id="user-email-input"
        label="Email"
        variant="outlined"
        placeholder="Add your email"
        value={email}
        onChange={handleChange}
        error={error.isError}
        helperText={error.isError ? error.message : ''}
      />
      <div className={styles.actionWrapper}>
        <Button variant="outlined" color="secondary" onClick={() => navigate('/')}>
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={!email.length || error.isError}
          onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default LoginByEmail;