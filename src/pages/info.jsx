// loader info in details

import React from "react"
import { useEffect } from "react"
import { Router, useNavigation } from "react-router-dom"

// in previous version of router we use useEffect to fetch data but
//when this useEffect will after initial render so first we load the page
// and then fetching will start and then print it on browser
// but in new React Router dom loader is function which fetch data before
//it render so it provide prefetching of data and loader must return something
// event at least null otherwise it will return error
//always remember loader is not hook its function it also contain meny info 
//like params ,request ,context also

//=====================================
//=====================================
// useNavigation hook is most important it show what is happening in our
//app now means current status of app if page is loading or submitting like
//const navigation=useNavigation()
// console.log(navigation) wil return object with bunch of info like state also
// which is useful in homelayout we have used it show state like idle or
//loading lecture no 383
// in latest react router dom we automatic get context prop we can 