import React from 'react';

class SubmitButton extends React.Component {
    render() {
        return (
            <div className="submitButton">
                <button
                    className='button'
                >
                    {this.props.text}
                </button>
            </div>
        )
    }
}

export default SubmitButton;