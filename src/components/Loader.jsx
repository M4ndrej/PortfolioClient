import {Fragment} from "react"
import LoaderIcon from '../assets/loaderIcon.svg';
export default function Loader(){

   return(
      <Fragment>
        <img src={LoaderIcon}/>
      </Fragment>
   )
}