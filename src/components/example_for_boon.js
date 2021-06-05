import {Component, useState, useEffect} from 'react'
import NextButton from './common/NextButton'
import BackButton from './common/BackButton'

const MainPage = () => {
    const [step, setStep] = useState(0)
    const [flavourFormData, setFlavourFormData] = useState(null)
    const [colorFormData, setColorFormData] = useState(null)

    const nextStep = () => setStep(Math.min(1, step + 1))
    const prevStep = () => setStep(Math.max(0, step - 1))
    
    const renderForm = () => {
        switch(step) {
            case 0:
                return <FlavourForm formData={flavourFormData} setFormData={setFlavourFormData} nextStep={nextStep}/>
            case 1:
                return <ColorForm formData={colorFormData} setFormData={setColorFormData} prevStep={prevStep}/>
        }
    }

    return (
        <>
        <div>
            Step: {step}
            <p>FORM ONE DATA: {JSON.stringify(flavourFormData, null, '\t')}</p>
            <p>FORM TWO DATA: {JSON.stringify(colorFormData, null, '\t')}</p>
            
        </div>
        <br/>
        <br/>
        {renderForm()}
        </>
    )
}

class FlavourForm extends Component {
    constructor(props) {
        super(props)
        if (props.formData == null) {
            this.state = {chocolate: false, vanilla: false, lavendar: false}
            props.setFormData({...this.state})
        } else {
            this.state = {...props.formData}
        }
    }

    onCheckboxTicked = (flavour) => {
        this.setState({
            ...this.state,
            [flavour]: !this.state[flavour]
        })
    }

    onDone = () => {
       this.props.setFormData(this.state)
       this.props.nextStep()
    }

    render() {
        return(
        <>
        <label>
            Chocolate
            <input 
                name="chocolate"
                type="checkbox" 
                checked={this.state.chocolate} 
                onChange={() => this.onCheckboxTicked('chocolate')} />
        </label>
        <label>
            Vanilla
            <input 
                name="vanilla"
                type="checkbox" 
                checked={this.state.vanilla} 
                onChange={() => this.onCheckboxTicked('vanilla')} />
        </label>
        <label>
            Lavendar
            <input 
                name="lavendar"
                type="checkbox" 
                checked={this.state.lavendar} 
                onChange={() => this.onCheckboxTicked('lavendar')} />
        </label>
        <NextButton nextStep={this.onDone}/>
        </>
        )
    }
}

const ColorForm = (props) => {
    const [colorFormData, setColorFormData] =
        useState(props.formData == null
            ? {red: false, blue: false, green: false}
            : {...props.formData})
    
    useEffect(() => {
        if (props.formData == null) {
            props.setFormData({...colorFormData})
        }
    }, [])

    const onCheckboxTicked = (colour) => {
        setColorFormData({
            ...colorFormData,
            [colour]: !colorFormData[colour]
        })
    }

    const onDone = () => {
        props.setFormData(colorFormData)
        props.prevStep()
    }

    return(
        <>
        <label>
            Red
            <input 
                name="red"
                type="checkbox" 
                checked={colorFormData.red} 
                onChange={() => onCheckboxTicked('red')} />
        </label>
        <label>
            Blue
            <input 
                name="blue"
                type="checkbox" 
                checked={colorFormData.blue} 
                onChange={() => onCheckboxTicked('blue')} />
        </label>
        <label>
            Green
            <input 
                name="green"
                type="checkbox" 
                checked={colorFormData.green} 
                onChange={() => onCheckboxTicked('green')} />
        </label>
        <BackButton prevStep={() => onDone()}/>
        </>
    )
}

export default MainPage;