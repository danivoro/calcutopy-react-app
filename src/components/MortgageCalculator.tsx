import { useState } from "react";

function MortgageCalculator() {
    const [price, setPrice] = useState<string>("");
    const [years, setYears] = useState<string>("");
    const [downPayment, setDownPayment] = useState<string>("");
    const [result, setResult] = useState<string>("");

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        if (inputValue === "" || parseFloat(inputValue) >= 0) {
            setPrice(inputValue);
        }
    };

    const handleYearsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        if (inputValue === "" || parseFloat(inputValue) >= 0) {
            setYears(inputValue);
        }
    };

    const handleDownPaymentChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const inputValue = event.target.value;
        if (inputValue === "" || parseFloat(inputValue) >= 0) {
            setDownPayment(inputValue);
        }
    };

    const calculateProduct = () => {
        const product =
            (parseFloat(price) / parseFloat(years) - parseFloat(downPayment)) /
            12;
        setResult(isNaN(product) ? "Invalid input" : product.toString());
    };

    return (
        <div className="container text-center mt-5">
            <h1 className="display-2">Mortgage Calculator</h1>
            <h3 className="mb-5">Your dream house is waiting for you!</h3>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6">
                    <img
                        src="../data/house-image.png"
                        alt="Nice house"
                        width="300"
                        height="400"
                        className="image img-fluid"
                    />
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <input
                            type="number"
                            placeholder="Enter the property price"
                            value={price}
                            onChange={handlePriceChange}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="number"
                            placeholder="Enter down payment quantity"
                            value={downPayment}
                            onChange={handleDownPaymentChange}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="number"
                            placeholder="Enter mortgage years"
                            value={years}
                            onChange={handleYearsChange}
                            className="form-control"
                        />
                    </div>
                    <button
                        className="btn btn-primary"
                        onClick={calculateProduct}
                    >
                        Calculate
                    </button>
                </div>
            </div>
            <div className="bg-info p-3 mt-4">
                <h4>Your monthly payment will be:</h4>
                <p className="h2">{result}</p>
            </div>
        </div>
    );
}

export default MortgageCalculator;
