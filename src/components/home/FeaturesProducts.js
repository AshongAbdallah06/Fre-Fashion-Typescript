import React from "react";
import strangerThingsGlasses from "../../images/stranger-things-inspired-sunglasses.jpeg";
import omegaRegularMensWatch from "../../images/omega-regulateur-mens-watch.jpg";
import nikeAirForce1 from "../../images/nike-lunar-force-1-duckboot.jpeg";
import ovalSpectacleSunglasses from "../../images/oval-spectacle-steampunk-victorian-sunglass.jpeg";
import cobblesTShirt from "../../images/cobbles-classic-tshirt.jpeg";
import johanGreyHat from "../../images/johan-grey-hat.jpeg";

const FeaturesProducts = () => {
	return (
		<section className="section">
			<div className="top-title">
				<h2>Featured Products</h2>
				<div className="divider"></div>
			</div>

			<div className="items-row">
				<div className="product-item">
					<div className="product-image">
						<img
							alt="product"
							src={strangerThingsGlasses}
						/>
					</div>
					<h4 className="product-name">
						Stranger Things Inspired Sunglasses
					</h4>
					<p className="price">$ 88.00 USD</p>
				</div>

				<div className="product-item">
					<div className="product-image">
						<img
							alt="product"
							src={omegaRegularMensWatch}
						/>
					</div>
					<h4 className="product-name">
						Omega Regulateur Mens Watch
					</h4>
					<p className="price">$ 131.00 USD</p>
				</div>

				<div className="product-item">
					<div className="product-image">
						<img
							alt="product"
							src={nikeAirForce1}
						/>
					</div>
					<h4 className="product-name">
						Nike Lunar Force-1 Duckboot Medium
					</h4>
					<p className="price">$ 120.00 USD</p>
				</div>

				<div className="product-item">
					<div className="product-image">
						<img
							alt="product"
							src={ovalSpectacleSunglasses}
						/>
					</div>
					<h4 className="product-name">
						Oval Spectacle Steampunk Victorian Sunglass
					</h4>
					<p className="price">$ 40.00 USD</p>
				</div>

				<div className="product-item">
					<div className="product-image">
						<img
							alt="product"
							src={cobblesTShirt}
						/>
					</div>
					<h4 className="product-name">Cobbles Classic T-Shirt</h4>
					<p className="price">$ 47.00 USD</p>
				</div>

				<div className="product-item">
					<div className="product-image">
						<img
							alt="product"
							src={johanGreyHat}
						/>
					</div>
					<h4 className="product-name">Johan Grey Hat</h4>
					<p className="price">$ 80.00 USD</p>
				</div>
			</div>
		</section>
	);
};

export default FeaturesProducts;
