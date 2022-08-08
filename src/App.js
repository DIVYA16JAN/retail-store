import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import HomePage from './routes/homePage/homePage.component';
import SignIn from './routes/signIn/signIn.component';

export const Shop = () => {
  return (<h1>I am Shop page.</h1>)
}

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="/signin" element={<SignIn/>} />
      </Route>
    </Routes>

  );
}

export default App;