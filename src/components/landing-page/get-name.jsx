import SingleTextInput from 'components/common/single-text-input'

const GetName = ({ onSubmit, onBack = null }) => (
    <SingleTextInput
        label="What should we call you?"
        submitButtonLabel="Next"
        onSubmit={onSubmit}
        backButtonLabel="Back"
        onBack={onBack}
    />
)

export default GetName
