import React from 'react';
import 'App.css'
import {BackDropLoader} from "components/BackDropLoader";
import {Header} from "components/Header";
import {AppContainer} from "components/appContainer/AppContainer";
import PersistentDrawerLeft from "components/persistentDrawerLeft/PersistentDrawerLeft";




function App() {
    return (
        <div className="App">
            {/*<Header*/}
            {/*    linkToGithub={'https://github.com/Vladimirkasperovich'}*/}
            {/*    linkToLinkedin={'https://www.linkedin.com/in/vladimir-kasperovich-38b157243/'}*/}
            {/*    linkToFacebook={'https://www.facebook.com/vladimir.kasperovich.7'}*/}
            {/*    changeSideBarStatus={() => console.log(1)}*/}
            {/*/>*/}
            {/*<main className='main'>*/}
            {/*    <AppContainer/>*/}
            {/*    <BackDropLoader/>*/}
            {/*</main>*/}
            <PersistentDrawerLeft/>

        </div>
    );
}

export default App;

