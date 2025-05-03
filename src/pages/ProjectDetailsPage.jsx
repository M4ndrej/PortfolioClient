import {Fragment} from "react"
import Navbar  from "./../layouts/NavBar";
import Footer from './../layouts/Footer';
import ProjectDetails from "../components/ProjectDetails";
export default function ProjectDetailsPage(){

   return(
      <Fragment>
        <Navbar/>
        <ProjectDetails/>
        <Footer/>
      </Fragment>
   )
}