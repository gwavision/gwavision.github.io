import 'App.scss';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';

import HomePage from 'pages/HomePage';
import ShopPage from 'pages/ShopPage';
import ArticlePage from 'pages/ArticlePage';
import EnrollPage from 'pages/EnrollPage';
import ProgramPage from 'pages/ProgramPage';
import NutritionPage from 'pages/NutritionPage';
import FitnessPage from 'pages/FitnessPage';
import SleepPage from 'pages/SleepPage';
import SkinCarePage from 'pages/SkinCarePage';

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route exact path="/shop">
					<ShopPage />
				</Route>
				<Route exact path="/article">
					<ArticlePage />
				</Route>
				<Route exact path="/enroll">
					<EnrollPage />
				</Route>
				<Route exact path="/program">
					<ProgramPage />
				</Route>
				<Route exact path="/program/nutrition">
					<NutritionPage />
				</Route>
				<Route exact path="/program/fitness">
					<FitnessPage />
				</Route>
				<Route exact path="/program/sleep">
					<SleepPage />
				</Route>
				<Route exact path="/program/skincare">
					<SkinCarePage />
				</Route>
			</Switch>
			<Footer />
		</>
	);
}

export default App;
