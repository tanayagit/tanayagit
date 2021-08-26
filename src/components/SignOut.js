import { Button } from '@material-ui/core'
import React from 'react'
import { auth } from '../firebase.js'

function SignOut() {
    return (
        <div className="button">
            <Button onClick={() => auth.signOut()} > Sign Out </Button>
        </div>
    )
}

export default SignOut
