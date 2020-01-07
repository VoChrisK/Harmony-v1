import { Route } from 'react-router-dom';

const App = () => {
    return(
        <div className="harmony-app">
            <Route to="/login" component={LoginFormContainer} />
            <Route to="/signup" component={SignupFormContainer} />
        </div>
    );
};

export default App;