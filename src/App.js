import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import HomePage from './routes/homePage/homePage.component';

export const Shop = () => {
  return (<h1>I am Shop page.</h1>)
}

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>

  );
}

export default App;