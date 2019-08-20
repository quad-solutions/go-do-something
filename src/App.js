import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import './_i18n';

import poweredByGoogle from './powered_by_google_on_non_white.png'

import red from '@material-ui/core/colors/red'
import pink from '@material-ui/core/colors/pink'
import purple from '@material-ui/core/colors/purple'
import deepPurple from '@material-ui/core/colors/deepPurple'
import indigo from '@material-ui/core/colors/indigo'
import blue from '@material-ui/core/colors/blue'
import lightBlue from '@material-ui/core/colors/lightBlue'
import cyan from '@material-ui/core/colors/cyan'
import teal from '@material-ui/core/colors/teal'
import green from '@material-ui/core/colors/green'
import lightGreen from '@material-ui/core/colors/lightGreen'
import lime from '@material-ui/core/colors/lime'
import yellow from '@material-ui/core/colors/yellow'
import amber from '@material-ui/core/colors/amber'
import orange from '@material-ui/core/colors/orange'
import deepOrange from '@material-ui/core/colors/deepOrange'
import brown from '@material-ui/core/colors/brown'

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import { AppBar, Toolbar, IconButton, FormControlLabel, Checkbox, SwipeableDrawer, Divider } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import StoreIcon from "@material-ui/icons/Store"
import MenuItem from '@material-ui/icons/Menu'

import CookieConsent, { Cookies } from "react-cookie-consent";

import { useTranslation } from 'react-i18next'

import actions from './_activities'

function App() {

   const { t } = useTranslation()

   const colors = [
      red,
      pink,
      purple,
      deepPurple,
      indigo,
      blue,
      lightBlue,
      cyan,
      teal,
      green,
      lightGreen,
      lime,
      yellow,
      amber,
      orange,
      deepOrange,
      brown,
   ]


   /**
    * Setup action types for the checkbox field and for later selection and picking usage.
    * The types don't have to be created again. If they are defined in at least one of the activities, they will be available throughout the app.
    */

   const actionTypes = [...new Set([].concat.apply([], actions.map(a => a.type)))]
   const [selectedActionTypes, setSelectedActionTypes] = useState(Object.assign({}, ...actionTypes.map(ac => {return { [ac]: true }} )))
   
   const handleActionTypeChange = name => event => {
      setSelectedActionTypes({ ...selectedActionTypes, [name]: event.target.checked });
    };


   const actionTags = [...new Set([].concat.apply([], actions.map(a => a.tags)))]
   const [selectedActionTags, setSelectedActionTags] = useState(Object.assign({}, ...actionTags.map(at => {return { [at]: true }} )))
   
   const handleActionTagChange = name => event => {
      setSelectedActionTags({ ...selectedActionTags, [name]: event.target.checked });
    };

   const [bgColor, setBgColor] = useState("")
   const [action, setAction] = useState({})

   useEffect(() => {
      setBgColor(colors[Math.floor(Math.random() * colors.length)])
      setNewActivity()
   }, [])

   function setNewActivity(){

      let possibleActions = actions.filter((action) => {

         // first get the keys that are currently active
         const activeActionTypes = Object.keys(selectedActionTypes).filter(k => selectedActionTypes[k] === true)
         const activeActionTags = Object.keys(selectedActionTags).filter(k => selectedActionTags[k] === true)

         // now check which keys are also present in each activity
         const matchingTypes = action.type.some(r => activeActionTypes.includes(r))
         const matchingTags = action.tags.some(r => activeActionTags.includes(r))

         // only if both are matching return true
         return matchingTypes && matchingTags
      })

      setAction(getNewAction(possibleActions))
      setPlacesData([])
   }

   // function that makes sure that you never get the same action again, that is currently selected.
   function getNewAction(possibleActions){
      const newAction = possibleActions[Math.floor(Math.random() * possibleActions.length)]
      return (newAction !== action)? newAction : getNewAction(possibleActions)
   }

   function getPlaces() {

      if(Cookies.get('CookieConsent')){
         if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(useLocationInfoToQueryPlaceData, noLocationData)
         } else {
            noLocationData()
         }
      }else{
         openSnackbar(t('accept-privacy-for-search'))
      }
   }

   const results = useRef(null)

   function useLocationInfoToQueryPlaceData(position) {
      const lng = position.coords.longitude;
      const lat = position.coords.latitude;

      // radius in meter
      const radius = 1000

      if (lng !== null && lat !== null) {
         const service = new window.google.maps.places.PlacesService(results.current)
         service.textSearch({
            location: {
               lat: lat,
               lng: lng
            },
            radius: radius,
            query: action.name
         }, callback)
      } else {
         openSnackbar(t('location-not-found'))
      }
   }

   function callback(results, status) {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
         setPlacesData(results)
      }else{
         openSnackbar(t('no-place-found'))
      }
   }

   function noLocationData() {
      openSnackbar(t('no-location-data'))
   }

   const [snackbarState, setSnackbarState] = useState({
      open: false,
      text: 'no text, yet'
   })

   function openSnackbar(text) {
      setSnackbarState({
         open: true,
         text: text
      })
   }

   function closeSnackbar() {
      setSnackbarState({
         ...snackbarState,
         open: false
      })
   }

   const [placesData, setPlacesData] = useState([])

   function isOpenNow(place) {
      if (typeof place.opening_hours === "undefined") {
         return <div></div>
      } else {
         if (place.opening_hours.open_now === true) {
            return (
               <div style={{ display: 'flex', alignItems: 'center' }}>
                  <StoreIcon />
                  <Typography variant="body2" component="p">
                     {t('currently-open')}
                  </Typography>
               </div>
            )
         } else {
            return (
               <div style={{ display: 'flex', alignItems: 'center' }}>
                  <StoreIcon />
                  <Typography variant="body2" component="p">
                     {t('currently-closed')}
                  </Typography>
               </div>
            )
         }
      }
   }

   function renderPlace(place) {
      return (
         <Card key={place.place_id} style={{ textAlign: 'left', margin: '5%' }}>
            <CardActionArea>
               <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">{place.name}</Typography>
                  <Typography variant="body2" component="p">
                     {place.formatted_address}
                  </Typography>
                  {isOpenNow(place)}

               </CardContent>
            </CardActionArea>
            <CardActions>
               <Button size="small" color="primary" target="_blank" href={`https://www.google.com/maps/search/?api=1&query=${action.name}&query_place_id=${place.place_id}`}>
                  {t('visit-on-maps')}
               </Button>
            </CardActions>
         </Card>
      )
   }

   const [drawerOpen, setDrawerOpen] = useState(false)
   const [privacyOpen, setPrivacyOpen] = useState(false)

   return (
      <div style={{ backgroundColor: bgColor[500], minHeight: '80vh', textAlign: 'center' }} className="App">
         <AppBar position="sticky" style={{backgroundColor: bgColor[900]}} >
            <Toolbar>
               <IconButton onClick={()=> setDrawerOpen(true)}>
                  <MenuItem fontSize="large" style={{color: 'white'}} />
               </IconButton>
               <Typography variant="h5" component="h2">
                  <b>Go Do Something</b>
               </Typography>
            </Toolbar>
         </AppBar>
         <SwipeableDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} onOpen={() => setDrawerOpen(true)}>
            <div style={{display: 'inline-grid', margin: '5%', width: '70vw'}}>
               <Typography variant="h5" component="h2" gutterBottom >{t('group-settings')}</Typography>


               {actionTypes.map((at, index) => {
                  return(
                     <FormControlLabel
                     key={`${at}-${index}`}
                     control={
                        <Checkbox checked={selectedActionTypes[at]} onChange={handleActionTypeChange(at)} value={`checked${at}`} />
                     }
                     label={t(at)}
                     />
                  )
               })}
               <br/>
               <Typography variant="h5" component="h2" gutterBottom >{t('activity-type')}</Typography>

               {actionTags.map((at, index) => {
                  return(
                     <FormControlLabel
                     key={`${at}-${index}`}
                     control={
                        <Checkbox checked={selectedActionTags[at]} onChange={handleActionTagChange(at)} value={`checked${at}`} />
                     }
                     label={t(at)}
                     />
                  )
               })}

               <Divider/>
               <div style={{textAlign: 'left' }}>
                  <Button onClick={() => setPrivacyOpen(true)}>{t('privacy-policy')}</Button>
               <Divider/>
               <br/>
                  a <a href={'https://quad.solutions'}>Quad Solutions</a> app
               </div>
            </div>
         </SwipeableDrawer>

         <SwipeableDrawer open={privacyOpen} onClose={() => setPrivacyOpen(false)} onOpen={() => setPrivacyOpen(true)}>
            <div style={{display: 'inline-grid', margin: '0%', padding: '5%', width: '70vw', overflowY: 'auto'}}>
               <Typography variant="h5" component="h2" gutterBottom >{t('privacy-policy')}</Typography>

               <Typography variant="body2" component="p" gutterBottom >
                  {t('pp-pt1')}
               </Typography>
               <Typography variant="body2" component="p" gutterBottom >
                  {t('pp-pt2')}
               </Typography>
               <Typography variant="body2" component="p" gutterBottom >
                  {t('pp-pt3')}
               </Typography>

               <Typography variant="h6" component="h2" gutterBottom >{t('pp-pt4')}</Typography>
               <Typography variant="body2" component="p" gutterBottom >
                  {t('pp-pt5')}
                  <br/>
                  {t('pp-pt6')}<b id="email"/>.
               </Typography>


               <Typography variant="h6" component="h2" gutterBottom >Information about the data processing</Typography>

               <Typography variant="h6" component="h2" gutterBottom >Cookies</Typography>

               <Typography variant="body2" component="p" gutterBottom >
                  We use cookies on our website. Cookies are small text files or other storage technologies stored on your computer by your browser. These cookies process certain specific information about you, such as your browser, location data, or IP address.  
                  <br/>
                  This processing makes our website more user-friendly, efficient, and secure, allowing us, for example, to display our website in different languages or to offer a shopping cart function.
                  <br/>
                  The legal basis for such processing is Art. 6 Para. 1 lit. b) GDPR, insofar as these cookies are used to collect data to initiate or process contractual relationships.
                  <br/>
                  If the processing does not serve to initiate or process a contract, our legitimate interest lies in improving the functionality of our website. The legal basis is then Art. 6 Para. 1 lit. f) GDPR.
                  <br/>
                  When you close your browser, these session cookies are deleted.
               </Typography>

               <Typography variant="h6" component="h2" gutterBottom >Third-party Cookies</Typography>
               <Typography variant="body2" component="p" gutterBottom >
                  If necessary, our website may use cookies from companies with whom we cooperate for the purpose of advertising, analyzing, or providing core features of our website.

                  Please refer to the following information for details, in particular for the legal basis and purpose of such third-party collection and processing of data collected through cookies.
               </Typography>

               <Typography variant="h6" component="h2" gutterBottom >Disabling cookies</Typography>
               <Typography variant="body2" component="p" gutterBottom >
                  You can refuse the use of cookies by changing the settings on your browser. Likewise, you can use the browser to delete cookies that have already been stored. However, the steps and measures required vary, depending on the browser you use. If you have any questions, please use the help function or consult the documentation for your browser or contact its maker for support. Browser settings cannot prevent so-called flash cookies from being set. Instead, you will need to change the setting of your Flash player. The steps and measures required for this also depend on the Flash player you are using. If you have any questions, please use the help function or consult the documentation for your Flash player or contact its maker for support.
                  <br/>
                  If you prevent or restrict the installation of cookies, not all of the functions on our site may be fully usable.
               </Typography>


               <Typography variant="h6" component="h2" gutterBottom >Contact</Typography>
               <Typography variant="body2" component="p" gutterBottom >
                  If you contact us via email or the contact form, the data you provide will be used for the purpose of processing your request. We must have this data in order to process and answer your inquiry; otherwise we will not be able to answer it in full or at all.
                  <br/>
                  The legal basis for this data processing is Art. 6 Para. 1 lit. b) GDPR.
                  <br/>
                  Your data will be deleted once we have fully answered your inquiry and there is no further legal obligation to store your data, such as if an order or contract resulted therefrom.
               </Typography>


               <Typography variant="h6" component="h2" gutterBottom >Google Places</Typography>
               <Typography variant="body2" component="p" gutterBottom >
                  This application uses Google Maps features. The use of Google Maps features and content is subject to the current version of (1) Google Maps/Earth Additional Terms of Service at <a href="https://maps.google.com/help/terms_maps/">https://maps.google.com/help/terms_maps/</a> and (2) Google Privacy Policy at <a href="https://www.google.com/policies/privacy/">https://www.google.com/policies/privacy/</a>.
                  <br/>
                  If you fail to comply with the applicable terms of the Google Maps/Google Earth Additional Terms of Service, some functions of this application may not work properly.
               </Typography>
               
               <Typography variant="h6" component="h2" gutterBottom >Github Pages</Typography>
               <Typography variant="body2" component="p" gutterBottom >
                  This application is hosted on Github Pages.
                  <br/>
                  Github may collect technical Information from visitors, including logs of visitos IP addresses, to maintain the security and integrity of the website and service.
                  <br/>
                  For more information, please see <a href="https://help.github.com/en/articles/github-privacy-statement">https://help.github.com/en/articles/github-privacy-statement</a>
               </Typography>      

            </div>
         </SwipeableDrawer>


         <Typography variant="h2" component="h2" gutterBottom style={{ paddingTop: "20vh" }}>
            <b>{(action)? t(action.name) : t('no-action')}</b>
         </Typography>

         <Button variant="contained" color="primary" onClick={setNewActivity} style={{ marginRight: '5%' }}>{t('new-activity-button')}</Button>
         <Button variant="contained" color="secondary" onClick={getPlaces} >{t('where-button')}</Button>

         <br />


         <div style={{ marginTop: '2vh', height: "60vh", overflow: 'auto' }}>
            {placesData.map((place) => {
               return renderPlace(place)
            })}

            <img
               src={poweredByGoogle}
               alt="Powered By Google"
            />
         </div>

         <div ref={results}></div>

         <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            key={`snackbar`}
            open={snackbarState.open}
            onClose={closeSnackbar}
            ContentProps={{
               'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{snackbarState.text}</span>}
         />

         <CookieConsent
            style={{backgroundColor: deepPurple[900]}}
         >
            {t('pp-consent-1')}
            <br/>
            {t('pp-consent-2')}
            <Button size="small" color='primary' onClick={() => setPrivacyOpen(true)}>{t('privacy-policy')}</Button>.
         </CookieConsent>

      </div>
   );
}

export default App;
