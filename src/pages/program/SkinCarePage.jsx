import s from './ProgramPage.module.scss';
import skincare from 'assets/skincare.png';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ShopPage from 'pages/ShopPage';

export default function SkincarePage() {
	return (
		<>
			<Helmet>
				<title>GWAVISION: Skincare</title>
				<meta
					name="keywords"
					content="sunscreen, Acne, skincare, anti-aging skincare, cleanser, moisturizer, makeup remover, makeup, haircare, beauty, wellness, environmentally-friendly skincare products"
				/>
			</Helmet>
			<div className={s.page}>
				<article className={s.content}>
					<div>
						<img src={skincare} alt="skincare" />
						<p>
							<b>
								Promoting optimal lifestyle changes by supporting BEAUTIFUL AND
								HEALTHY SKIN as an overall health and wellness, anti-aging and
								preventive medicine. Please visit the shop section for some high
								quality product related to exercise and fitness.
							</b>
						</p>
						<Link to="/enroll">Read More</Link>
					</div>
					<div className={s.description}>
						<h2>Skincare</h2>
						<p>
							Skincare is an essential component of health and wellness. The
							skin can have a great impact on your Mind Body and Soul. The skin
							is the largest organ of the body which is sometimes considered a
							mirror of your soul. Beautiful skin can ensure confident and
							positive mental health. Healthy skin represents good health, good
							body temperature, and regulation. Great skincare hygiene prevents
							diseases and even fights some skincare cancer, especially when
							applying the proper sunscreen. Please visit the shopping section
							for some excellent skincare products, including instructions about
							the manufacturers and ingredients. Some typical skincare products
							that can be found are Acne skincare, anti-aging skincare,
							cleanser, moisturizer, makeup remover, makeup, haircare, beauty,
							wellness, and environmentally-friendly products.
						</p>
						<p>
							“Always talk to your doctor if experiencing any unusual problem
							related to your skin when starting to use any skincare products.
						</p>
					</div>
				</article>
				<ShopPage category={'skincare'} />
			</div>
		</>
	);
}
