import { useState } from "react";

function DistrictSelectorForm({ setSelectedDistrict }) {
  const [inputs, setInputs] = useState({
    country: "Nepal",
    district: "Kathmandu",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value; //e.target which element caused the element-->select country value -->e.target refers to the element that triggered the event

    setInputs((values) => ({
      ...values, //this It copies the existing properties from the previous state into the new object, elle purano state lai completely copy garxa
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedDistrict(inputs.district);
  };
  return (
    <div className="district-selection">
      <form onSubmit={handleSubmit}>
        <label htmlFor="country">Country</label>

        <select
          id="country"
          name="country"
          value={inputs.country} // kun chai value change garyo tyo ui ma dekhaune jastai{displays the value essentailly}
          onChange={handleChange} //onchange le jun chai state user the change garxa teslai eta lyauxa
        >
          <option value="Nepal">Nepal</option>
          <option value="India">India</option>
        </select>

        <label htmlFor="district">District</label>

        <select
          id="district"
          name="district"
          value={inputs.district}
          onChange={handleChange}
        >
          {inputs.country === "Nepal" && (
            <>
              <option value="Kathmandu">Kathmandu</option>
              <option value="Bhaktapur">Bhaktapur</option>
              <option value="Dhankuta">Dhankuta</option>
              <option value="Kaski">Kaski</option>
              <option value="Chitwan">Chitwan</option>
              <option value="Rupandehi">Rupandehi</option>
            </>
          )}

          {inputs.country === "India" && (
            <>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
            </>
          )}
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DistrictSelectorForm;

//flow
// User selects country
//         ↓
// onChange runs
//         ↓
// handleChange()
//         ↓
// e.target.name + e.target.value
//         ↓
// setInputs()
//         ↓
// inputs.country changes
//         ↓
// React re-renders
//         ↓
// District options change
