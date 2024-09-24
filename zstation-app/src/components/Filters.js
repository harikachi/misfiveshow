import React, { useState } from 'react';
import axios from 'axios';
import '../css/Filters.css';

function Filters() {
  //console.log("Filters context in Filters.js:", setSelections);
  const [dropdown1, setDropdown1] = useState('');
  const [dropdown2, setDropdown2] = useState('');
  const [dropdown3, setDropdown3] = useState('');
  const [dropdown4, setDropdown4] = useState('');
  const [dialogDropdown1, setDialogDropdown1] = useState('');
  const [dialogDropdown2, setDialogDropdown2] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [results, setResults] = useState([]);

  const handleDropdownClick = () => {
    setDropdown1('');
    setDropdown2('');
    setDropdown3('');
    setDropdown4(''); 
    setDialogDropdown1('');
    setDialogDropdown2('');
    setIsDialogOpen(true);  // Open the dialog on dropdown click
  };

  const handleSearchDialog = (e) => {
    setIsDialogOpen(false);  // Close the dialog
    setDropdown1('');
    setDropdown2('');
    setDropdown3('');
    setDropdown4('');
    setDialogDropdown1('');
    setDialogDropdown2('');
    handleSearch();  // Call the search function
  };

  const handleCloseDialog = (e) => {
    setIsDialogOpen(false);  // Close the dialog
  };

  const handleDialogFilter1Change = (e) => {  
    setDialogDropdown1(e.target.value);
    //setSelectedFilter(e.target.value);
  }

  const handleDialogFilter2Change = (e) => {  
    setDialogDropdown2(e.target.value);
    //setSelectedFilter(e.target.value);
  }

  const handleSearch = () => {
    // You can replace this with your actual search logic
    /*alert(`Search clicked with: \nDropdown 1: ${dropdown1}\nDropdown 2: ${dropdown2}\nDropdown 3: 
      ${dropdown3}\nDropdown 4: ${dropdown4}\n Dialog Dropdown 1: ${dialogDropdown1}\n
      Dialog Dropdown 2: ${dialogDropdown2}`);*/

      axios.post('http://localhost:5002/api/findStations', {
        region: dialogDropdown1, 
        district: dialogDropdown2,
        service_type: dropdown2,
        station_type: dropdown3, 
        fuel_type: dropdown4
      })
      .then((response) => {
        if (Array.isArray(response.data)) {
          setResults(response.data); // Already an array, set it directly
        } else {
          // Convert object data to an array
          const arrayData = Object.values(response.data); // Convert object to array
          setResults(arrayData);
        }
        //onFiltersChange({ filters: dataArray });
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });

  };

  return (
    <div>
    <div className="dropdown-container">
      <div className="dropdown-group">
        {/* Dropdown 1 */}
        <div className="dropdown-item">
          <label htmlFor="dropdown1">Location</label>
          <select
            id="dropdown1"
            value={dropdown1}
            onClick={handleDropdownClick}
            onChange={(e) => setDropdown1(e.target.value)}
          >
            <option value="">All Locations</option>
          </select>
          {isDialogOpen && (
            <div className="dialog-overlay">
                <div className="dialog">
                    <h3>Dialog with Dropdowns</h3>

                    {/* Dropdown 1 in Dialog */}
                    <label htmlFor="dialogDropdown1">Region</label>
                    <select id="dialogDropdown1"
                      value={dialogDropdown1}
                      onChange={handleDialogFilter1Change}
                    >
                      <option value="">Select Region</option>
                    <option value="North Island">North Island</option>
                    <option value="Northland">Northland</option>
                    <option value="Auckland">Auckland</option>
                    <option value="Waikato">Waikato</option>
                    </select>

                    {/* Dropdown 2 in Dialog */}
                    <label htmlFor="dialogDropdown2">District</label>
                    <select id="dialogDropdown2"
                      value={dialogDropdown2}
                      onChange={handleDialogFilter2Change}
                    >
                    <option value="">Select District</option>
                    <option value="Auckland City">Auckland City</option>
                    <option value="Manukau City">Manukau City</option>
                    <option value="Houraki">Houraki</option>
                    </select>

                    {/* Search Button */}
                    <button onClick={handleSearchDialog}>Search</button>

                    {/* Close Button */}
                    <button onClick={handleCloseDialog}>Close</button>
                </div>
            </div>
            )}
        </div>

        {/* Dropdown 2 */}
        <div className="dropdown-item">
          <label htmlFor="dropdown2">Services</label>
          <select
            id="dropdown2"
            value={dropdown2}
            onChange={(e) => setDropdown2(e.target.value)}
          >
            <option value="">Select Services</option>
            <option value="EV Charging - Fast">EV Charging - Fast</option>
            <option value="EV Charging - Ultra Fast">EV Charging - Ultra Fast</option>
            <option value="Pre-order Coffee">Pre-order Coffee</option>
            <option value="Pay in app">Pay in app</option>
            <option value="Z20 carwash">Z20 carwash</option>
            <option value="Trailer hire">Trailer hire</option>
            <option value="LPG SWAPnGO">LPG SWAPnGO</option>

          </select>
        </div>

        {/* Dropdown 3 */}
        <div className="dropdown-item">
          <label htmlFor="dropdown3">Station type</label>
          <select
            id="dropdown3"
            value={dropdown3}
            onChange={(e) => setDropdown3(e.target.value)}
          >
            <option value="">Select Station type</option>
            <option value="Truck stop">Truck stop</option>
            <option value="Service station">Service station</option>
          </select>
        </div>

        {/* Dropdown 4 */}
        <div className="dropdown-item">
          <label htmlFor="dropdown4">Fuel type</label>
          <select
            id="dropdown4"
            value={dropdown4}
            onChange={(e) => setDropdown4(e.target.value)}
          >
            <option value="">Select Fuel type</option>
            <option value="ZX Premium">ZX Premium</option>
            <option value="Z91 Unleaded">Z91 Unleaded</option>
            <option value="Z Diesel">Z Diesel</option>
          </select>
        </div>
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>
    </div>
    <div className="resultContainer">
      <div className="results-container">
            {results.length === 0 ? (
            <p className="locator-results-summary">No results found</p>
          ) : ( 
            <div className="locator-results">
              <ul className="locator-results-list">
                <p className="locator-results-summary">{results.length} stations found</p>
                {results.map((result) => (
                <li className="locator-result">
                  <p className="locator-result-heading">{result.region}</p>
                  <p className="locator-result-address">{result.district}</p>
                  <p className="locator-result-address">{result.suburb}</p>
                  <p className="locator-hours">{result.service_type}</p>
                  <p className="locator-hours">{result.station_type}</p>
                  <p className="locator-hours">{result.fuel_type}</p>
                </li>
                ))}
              </ul>
            </div>
          )}
      </div>

      <div className='search-container'>
        <h3>Maps are coming</h3>
       
      </div>
    </div>
    </div>  
  );
}

export default Filters;
