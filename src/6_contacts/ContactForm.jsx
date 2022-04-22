import {useState} from 'react';


const submitStyle={
    width: 'fit-content',
    padding: '0 8px',
    cursor: 'pointer'
};


export default function ContactForm(){
    const [styleSubmit,setStyleSubmit] = useState(submitStyle)
    
    const handleEnter = () =>{
        setStyleSubmit(state => {
            return {...state,backgroundColor: 'rgb(155,242,234,0.8)'}
        })
    }
    
    const handleLeave = () => {
        setStyleSubmit(state => {
            return { ...state, backgroundColor: "#9BF2EA" };
        })
    }


    return(
        <div className="form">
            <form>
                <input type={'text'} placeholder={'Email'} name='email'/>
                <input type={'text'} placeholder={'Name'} name='name'/>
                <textarea name="message" placeholder={'Message'}></textarea>
                <input type={'submit'} value='submit' style={styleSubmit} onMouseEnter={handleEnter} onMouseLeave={handleLeave}/>
            </form>

        </div>
    )
}

