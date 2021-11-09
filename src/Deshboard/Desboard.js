import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddDoctoc from './AddDoctoc';
import AddGallery from './AddGallery';
import AddServices from './AddServices';
import Header from './Header';
import DesboardService from './DesboardService';
import DesbordDoctors from './DesbordDoctors';
import DesboardGallery from './DesboardGallery';

const Desboard = () => {
    return (
        <div className="grid grid-cols-5 gap-4">
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/desboard/service">
                        <DesboardService></DesboardService>
                    </Route>
                    <Route path="/desboard/doctor">
                        <DesbordDoctors></DesbordDoctors>
                    </Route>
                    <Route path="/desboard/gallery">
                        <DesboardGallery></DesboardGallery>
                    </Route>
                    <Route path="/add-service">
                        <AddServices></AddServices>
                    </Route>
                    <Route path="/add-doctor">
                        <AddDoctoc></AddDoctoc>
                    </Route>
                    <Route path="/add-gallery">
                        <AddGallery></AddGallery>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Desboard;