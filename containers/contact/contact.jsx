import React, {useState} from 'react';
import { contactStyle } from '../../styles/globalStyles';

function Contact() {
    return (
        <div style={contactStyle}>
            <div style={{width: '28%'}}>
                <h2 style={{ fontWeight: 'bold', margin:'0'}}>Como nós podemos ajudar você?</h2>
                <div style={{ width: '10rem', height: '0.25rem', backgroundColor: '#FFC300', border: 'none', marginBottom: '1rem'}} />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec elementum lorem, pellentesque euismod ante.</p>
                </div>
            <div>
                <form style={{ border: '1px solid #444444',
                    padding:'1rem', 
                    backgroundColor: 'transparent', 
                    display: 'flex', 
                    flexDirection: 'column',
                    gap: '0.2rem'}} action="">

                    <h3 style={{fontWeight: 'bold', margin: '0'}}>Envie-nos uma mensagem!</h3>
                    <div style={{ width: '10rem', height: '0.25rem', backgroundColor: '#FFC300', border: 'none', marginBottom: '2rem'}} />
                    <input style={{ width: '100%', padding: '0.5rem'}} type="text" placeholder='Nome completo' /><br/>
                    <input style={{ width: '100%', padding: '0.5rem'}} type="email" placeholder='Email' /><br/>
                    <textarea style={{ overflowY: 'scroll', resize: 'none', width:'100%', height: '5rem'}} name="Mensagem" placeholder="Mensagem"></textarea>
                    <input type="button" value="ENVIAR"
                    style={{
                        backgroundColor: '#FFC300',
                        color: 'black',
                        fontWeight: 'bold',
                        transition: 'all 0.3s ease',
                        padding: '0.5rem',
                        margin: '0 auto',
                        marginTop: '2rem',
                        fontSize: '1rem',
                        width: '10rem',
                        borderStyle: 'none',
                        borderRadius: '4px'
                    }} />
                    </form>   
            </div>
        </div>
    );
}

export default Contact;
