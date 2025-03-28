const checkout = () => {
    const handleCheckout = () => {
        window.location.href = "https://buy.stripe.com/test_3cs3fqey79m84ZW4gg"; // Replace with your Stripe link
    };

    return (
        <button
            onClick={handleCheckout}
            className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
        >
            Pay for All Products
        </button>
    );
};

export default checkout;
