import {Component} from "react";


import Searchbar from "../Searchbar/Searchbar";

class ImageFinder extends Component {
  state = {
    items:[],
    loading: false,
    error: null,
  }
  render() {
    return(
      <>
        <Searchbar/>
      </>
    )
  }

}
export default ImageFinder
