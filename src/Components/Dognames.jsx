import '../App.css'
import { useState, useEffect } from 'react'
import axios from 'redaxios';
import LoadingScreen from './LoadingScreen';

const Dognames = () => {
    const apiURL = `https://api.jsonbin.io/v3/b/643568d3ebd26539d0a8e3b1`;
    let [dogNameList, setdogNameList] = useState([]);

    let content = null;
    let [selectedDogName, setselectedDogName] = useState([]);
    let [selectedSex, setselectedDogSex] = useState([]);
    let [selectedBreed, setselectedDogbreed] = useState([]);
    let [selectedpresent, setselectedDogpresent] = useState([]);
    let [selectedage, setselectedDogage] = useState([]);
    let [selectedchip, setselectedDogchip] = useState([]);
    let [selectedfirst, setselectedDogownerfirst] = useState([]);
    let [selectedlast, setselectedDogownerlast] = useState([]);
    let [selectednumber, setselectedDogphonenumber] = useState([]);

    //local storage list
    const [storageItems, setStorageItems] = useState([]);

   

    const DogCards = (props) => {
        const defaultImage = "https://picsum.photos/200";

        const onImageError = (e) => {
            e.target.src = defaultImage
          }

        return (
        <div id="mainContainer" onClick={() => 
                selectDog(props.name, props.sex, props.breed, props.present, props.age,
                props.chipNumber, props.ownerFirstName, props.ownerLastName, props.phonenumber)} key={Math.random()}>

            <div id="container" className='container'>
            <div><img src={props.img ? props.img : defaultImage} onError={onImageError} alt={props.name}/></div>
            <div><h3>{props.name}</h3></div>
            </div>
        </div>
        )
    }
    const DogSingleCard = (props) => {
        //Changes font color of "present" if present == 'true'
        let textColor = 'value4';
        if (props.present == 'true') {
            textColor = 'value4-present';
        }
        return (
            <div className="topContainer">
            <div id="cardContainer" key={Math.random()}>
            <div className="row">
                <div className="label">Name</div>
                <div className="value" id="value1">{props.name}</div>
            </div>
            <div className="row">
                <div className="label">Gender</div>
                <div className="value" id="value2">{props.sex}</div>
            </div>
            <div className="row">
                <div className="label">Breed</div>
                <div className="value" id="value3">{props.breed}</div>
            </div>
            <div className="row">
                <div className="label">Present?</div>
                <div className="value" id={textColor}>{props.present}</div>
            </div>
            <div className="row">
                <div className="label">Age</div>
                <div className="value" id="value5">{props.age}</div>
            </div>
            <div className="row">
                <div className="label">Chip number</div>
                <div className="value" id="value6">{props.chipNumber}</div>
            </div>
            <div className="row">
                <div className="label">Owner firstname</div>
                <div className="value" id="value7">{props.ownerFirstName}</div>
            </div>
            <div className="row">
                <div className="label">Owner lastname</div>
                <div className="value" id="value8">{props.ownerLastName}</div>
            </div>
            <div className="row">
                <div className="label">Phone number</div>
                <div className="value" id="value9">{props.phonenumber}</div>
            </div>
        </div>
        </div>
        )
    }

    //loading component for a few seconds while awaiting API fetch
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 2000);
    if (selectedDogName == "" && loading == true) {
        content = <LoadingScreen />;
    } if (selectedDogName == "" && loading == false) {
        content = dogNameList;
    } else if (selectedDogName != "") {
        content = <DogSingleCard name={selectedDogName} sex={selectedSex} breed={selectedBreed} present={selectedpresent}
        age={selectedage} chipNumber={selectedchip} ownerFirstName={selectedfirst} ownerLastName={selectedlast} phonenumber={selectednumber}/>;
    }
    const selectDog = (dogName, sex, breed, present, age, chip, ownerfirstname, ownerlastname, phonenumber) => {
        setselectedDogName(dogName);
        setselectedDogSex(sex);
        setselectedDogbreed(breed);
        setselectedDogpresent(present);
        setselectedDogage(age);
        setselectedDogchip(chip);
        setselectedDogownerfirst(ownerfirstname);
        setselectedDogownerlast(ownerlastname);
        setselectedDogphonenumber(phonenumber);
    }

    useEffect(() => {
        fetchData();
    }, [storageItems])

    const fetchData = () => {
        axios.get(apiURL)
        .then((response) => {

            localStorage.setItem('dogs', JSON.stringify(response.data.record.record));
            setStorageItems(JSON.parse(localStorage.getItem('dogs')));    

            setdogNameList(storageItems.map((dogs) => {
                return (
                    <DogCards name={dogs.name} sex={dogs.sex} breed={dogs.breed} 
                    present={dogs.present.toString()} age={dogs.age} chipNumber={dogs.chipNumber} ownerFirstName={dogs.owner.name} 
                    ownerLastName={dogs.owner.lastName} phonenumber={dogs.owner.phoneNumber} img={dogs.img} key={Math.random()}/>
                );
            })); 
        })
        .catch((error) => {
            if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            } else if (error.request) {
            console.log(error.request);
            } else {
            console.log('Error', error.message);
            }
        
        })
        .finally(function () {
            // always executed, not used right now
        }); 
    }
    return (
        <>
            <ul>
                {content}
            </ul>
        </>
    )
}
export default Dognames;