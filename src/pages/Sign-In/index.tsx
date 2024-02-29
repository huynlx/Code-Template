import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// hooks
import useAuth from 'src/hooks/useAuth';

const SignIn = () => {
  const isAuth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/', { replace: true });
    }
  }, [isAuth]);

  return <div>SignIn</div>;
};

export default SignIn;
