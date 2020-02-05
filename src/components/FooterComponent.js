import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from "@material-ui/core/Grid";



function FooterComponent() {
    return (
        <AppBar position="relative">
                    <div style={{
                        width: '450px',
                        margin: '30px auto',
                        flex: '0 0 auto',
                        textAlign: 'center'
                    }}
                    >
                      Todo App by Ann &copy; 2020
                        
                    </div>
                
        </AppBar>
    );
}

export default FooterComponent;