import { useState } from 'react'
import NextButton from 'components/common/next-button'
import BackButton from 'components/common/back-button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { locationPresetData } from "common/constants/location-preset-data";
import ToggleButton from 'react-bootstrap/ToggleButton'
import Button from 'react-bootstrap/ToggleButton'





function Location(props) {

    const [wordEntered, setWordEntered] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const data = Object.keys(locationPresetData.enum)

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
          return value.toLowerCase().includes(searchWord.toLowerCase());
        });
    
        if (searchWord === "") {
          setFilteredData([]);
        } else {
          setFilteredData(newFilter);
        }
      };
    
      const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
      };


    const options = Object.keys(locationPresetData.enum)
    const state = locationPresetData.state

    const [locData, setLocData] = useState(props.formData == null ? {...state} : {...props.formData})


    const handleChange = (value) => {
        setLocData({
            ...locData,
            [value]: !locData[value]
        })
    }

    const onDone = () => {
        for (let x in locData) {
            if (locData[x] == true) {
                props.setFormData(locData)
                props.nextStep()
                return;
            }
        }
        alert("Please choose something")
        }

   
    const dropdownMap = options.map(x =>
        <Dropdown.Item eventKey={x}>{x}</Dropdown.Item>
    )
    
    const onCheckboxTicked = (cuisine) => {
        setLocData({
            ...locData,
            [cuisine]: !locData[cuisine]
        })
    }

    
    const tagMap =[]

    for (var key in locData) {
        if (locData[key]==true) {
            tagMap.push(
                <ToggleButton
                    type="checkbox"
                    variant="primary"
                    checked={locData[key]}
                    name = {key}
                    onChange={() => onCheckboxTicked(key)}
                    >
                    {key}
                </ToggleButton>
                )    
        }
    }    



    return(
    <div>
    <p>Where do you wanna eat</p>    
    {tagMap}
    <p></p>
    <DropdownButton id="dropdown-basic-button" title = "Options" onSelect = {handleChange} >
        {dropdownMap}
    </DropdownButton>
    
    <br/>
    <NextButton nextStep={onDone}/> 
    <br/>
    <BackButton prevStep={props.prevStep}/>


    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder='locations'
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <Button />
          ) : (
            <Button id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
    </div>
    
    
    )
}

export default Location
