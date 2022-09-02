import s from './App.module.scss';
import { Routes, Route } from 'react-router-dom';

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

export default function App() {
	return (
		<div className={s.app}>
			<Header />
			<main className={s.main}>
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route exact path="/shop" element={<ShopPage />} />
					<Route exact path="/article" element={<ArticlePage />} />
					<Route exact path="/enroll" element={<EnrollPage />} />
					<Route exact path="/program" element={<ProgramPage />} />
					<Route exact path="/program/nutrition" element={<NutritionPage />} />
					<Route exact path="/program/fitness" element={<FitnessPage />} />
					<Route exact path="/program/sleep" element={<SleepPage />} />
					<Route exact path="/program/skin-care" element={<SkinCarePage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}
