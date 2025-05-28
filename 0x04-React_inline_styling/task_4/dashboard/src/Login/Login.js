import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

export default function Login() {
    return (
        <div className={css(styles.AppBody)}>
            <p>
                Login to access the full dashboard
            </p>
            <form className={css(styles.AppBodyForm, styles.small)}>
                <div className={css(styles.inputGroup)}>
                    <label htmlFor="email" className={css(styles.AppBodyLabel)}>
                        Email
                    </label>
                    <input 
                        type="email" 
                        id="email"
                        name="email" 
                        className={css(styles.AppBodyInput)}
                    />
                </div>
                <div className={css(styles.inputGroup)}>
                    <label htmlFor="password" className={css(styles.AppBodyLabel)}>
                        Password
                    </label>
                    <input 
                        type="password" 
                        id="password"
                        name="password" 
                        className={css(styles.AppBodyInput)}
                    />
                </div>
                <button type="submit" className={css(styles.AppBodyButton)}>
                    OK
                </button>
            </form>
        </div>
    );
}

const styles = StyleSheet.create({
    AppBody: {
        padding: '36px 24px',
        '@media (max-width: 600px)': {
            padding: '24px 16px'
        }
    },
    
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
    },
    
    AppBodyInput: {
        padding: '8px 16px 8px 8px',
        border: '1px solid #D3D3D3',
        borderRadius: '3px',
        width: '100%',
        boxSizing: 'border-box',
        '@media (max-width: 600px)': {
            padding: '12px 16px 12px 8px',
            fontSize: '16px'
        }
    },
    
    AppBodyLabel: {
        marginRight: '5px',
        marginBottom: '4px',
        display: 'block'
    },
    
    AppBodyForm: {
        display: 'flex',
        gap: '1rem',
        alignItems: 'end',
        '@media (max-width: 600px)': {
            flexDirection: 'column',
            alignItems: 'stretch',
            gap: '1.5rem'
        }
    },
    
    AppBodyButton: {
        border: '1px solid #D3D3D3',
        borderRadius: '3px',
        background: 'transparent',
        width: '50px',
        height: '34px',
        cursor: 'pointer',
        '@media (max-width: 600px)': {
            width: 'auto',
            height: 'auto',
            padding: '12px 24px'
        }
    },
    
    small: {
       
    }
});