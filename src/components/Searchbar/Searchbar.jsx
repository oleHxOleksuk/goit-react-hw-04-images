import {Component} from "react";
import styles from './search-bar.module.scss'
class Searchbar extends Component {
  render() {
    return(
      <form className={styles.form}>
        <div>
          <input name='search' placeholder='search'/>
        </div>
      </form>
    )
  }
}
export default Searchbar
