import strangerThingsGlasses from "./images/stranger-things-inspired-sunglasses.jpeg";
import omegaRegularMensWatch from "./images/omega-regulateur-mens-watch.jpg";
import nikeAirForce1 from "./images/nike-lunar-force-1-duckboot.jpeg";
import ovalSpectacleSunglasses from "./images/oval-spectacle-steampunk-victorian-sunglass.jpeg";
import cobblesTShirt from "./images/cobbles-classic-tshirt.jpeg";
import johanGreyHat from "./images/johan-grey-hat.jpeg";

const useProducts = () => {
	const items = [
		{
			name: "Stranger Things Inspired Sunglasses",
			price: 8800,
			image: strangerThingsGlasses,
		},
		{
			name: "Omega Regulateur Mens Watch",
			price: 13100,
			image: omegaRegularMensWatch,
		},
		{
			name: "Nike Lunar Force-1 Duckboot Medium",
			price: 12000,
			image: nikeAirForce1,
		},
		{
			name: "Oval Spectacle Steampunk Victorian Sunglass",
			price: 4000,
			image: ovalSpectacleSunglasses,
		},
		{
			name: "Cobbles Classic T-Shirt",
			price: 4700,
			image: cobblesTShirt,
		},
		{
			name: "Johan Grey Hat",
			price: 8000,
			image: johanGreyHat,
		},
	];
	return { items };
};

export default useProducts;
