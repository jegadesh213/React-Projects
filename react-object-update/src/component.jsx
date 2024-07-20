import React, { useState } from "react";

function Component() {
    const [car, setCar] = useState({
        year: 2024,
        company: "Ford",
        model: "Mustang",
    });

    const [visible, setVisible] = useState(false);

    function handleYear(event) {
        setCar((c) => ({ ...c, year: event.target.value }));
    }

    function handleCompany(event) {
        setCar((c) => ({ ...c, company: event.target.value }));
    }

    function handleModel(event) {
        setCar((c) => ({ ...c, model: event.target.value }));
    }

    function handleButton() {
        setVisible(true);
    }

    return (
        <>
            <div>
                {visible && (
                    <h2>
                        YOUR FAV CAR IS: {car.year} {car.company} {car.model}
                    </h2>
                )}
                <input type="number" onChange={handleYear} placeholder="Year" /><br />
                <input type="text" onChange={handleCompany} placeholder="Company" /><br />
                <input type="text" onChange={handleModel} placeholder="Model" /><br /><br />
                <button type="button" onClick={handleButton}>ENTER</button>
            </div>
        </>
    );
}

export default Component;
