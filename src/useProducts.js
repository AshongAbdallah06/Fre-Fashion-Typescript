import strangerThingsGlasses from "./images/stranger-things-inspired-sunglasses.jpeg";
import omegaRegularMensWatch from "./images/omega-regulateur-mens-watch.jpg";
import nikeAirForce1 from "./images/nike-lunar-force-1-duckboot.jpeg";
import ovalSpectacleSunglasses from "./images/oval-spectacle-steampunk-victorian-sunglass.jpeg";
import cobblesTShirt from "./images/cobbles-classic-tshirt.jpeg";
import johanGreyHat from "./images/johan-grey-hat.jpeg";

const useProducts = () => {
	const items = [
		{
			id: "1",
			name: "Stranger Things Inspired Sunglasses",
			price: 8800,
			image: strangerThingsGlasses,
			type: "Accessories",
		},
		{
			id: "2",
			name: "Omega Regulateur Mens Watch",
			price: 13100,
			image: omegaRegularMensWatch,
			type: "Accessories",
		},
		{
			id: "3",
			name: "Nike Lunar Force-1 Duckboot Medium",
			price: 12000,
			image: nikeAirForce1,
			type: "Sneakers",
		},
		{
			id: "4",
			name: "Oval Spectacle Steampunk Victorian Sunglass",
			price: 4000,
			image: ovalSpectacleSunglasses,
			type: "Accessories",
		},
		{
			id: "5",
			name: "Cobbles Classic T-Shirt",
			price: 4700,
			image: cobblesTShirt,
			type: "Shirts",
		},
		{
			id: "6",
			name: "Johan Grey Hat",
			price: 8000,
			image: johanGreyHat,
			type: "Hats",
		},
	];
	return { items };
};

export default useProducts;
