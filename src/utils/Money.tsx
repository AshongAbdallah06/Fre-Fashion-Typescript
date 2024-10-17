export function formatCurrency(priceCents: number) {
	return (Math.round(priceCents) / 100).toFixed(2);
}

export default formatCurrency;
