import {Link, useHistory} from 'react-router-dom';
import image from './Menu.png';

const Navbar = ({ searchText, setSearchText, searchResults }) => {
   let btnClicked = false;
   const history = useHistory();
   const updateSearchText = (e) => {
       history.push('/search')
       setSearchText(e.target.value)
       if(window.innerWidth < 768 || e.target.value===""){
            document.querySelector("#autoSuggestion").style.display = "none"; 
       }
       else {
       document.querySelector("#autoSuggestion").style.display = "block";
       }
   }
   const searchSubmit = (evt) => {
    evt.preventDefault()
    setSearchText(document.querySelector("input").value)
    document.querySelector("input").value = "";
    document.querySelector("#input").value = "";
    document.querySelector("#autoSuggestion").style.display = "none";
        if (btnClicked){
            document.querySelector("#window").style.height = "0px";
            btnClicked = false;
        }
        else {
            document.querySelector("#window").style.height = "0px";
            btnClicked = false;
        }
    }   
   function classNameChange () {
    if (!btnClicked){
        document.querySelector("#window").style.height = "160px";
        btnClicked = true;
    }
    else {
        document.querySelector("#window").style.height = "0px";
        btnClicked = false;
    }
    }
    
        const searchResultsAuto = searchResults.map( (obj, i) => {
            let movieTitle = obj.original_title;
            document.querySelector("#autoSuggestion").style.height = "auto";
            const autoComplete = () => {
                let val = document.querySelectorAll("li").value = `${movieTitle}`;
                document.querySelector("input").value = `${val}`;
                document.querySelector("#autoSuggestion").style.height = "0px";
                // setSearchText(val);
            }
            
            return <li onClick= {autoComplete} key={i} className="card1"> {movieTitle} </li>
            
            
        })
   
    return (
        <div id="navbar">
            <div className="container">
                <div className="navbar_flexbox">
                    <div><Link className="logo" to="/">Moviebrowser.</Link></div>
                    <div id="navbar_menu" className="navbar_flexbox">
                        <div><Link className="navbar_items" to="/about">About</Link></div>
                        <div><Link className="navbar_items" to="/">Home</Link></div>
                        <div><a className="navbar_items" href="mailTo:sksingh.jhs@gmail.com">Contact Us</a></div>
                        <div id="searchBar" className="navbar_items">
                            <form>
                                <input className="search_bar" type="search" placeholder="Search" value= {searchText} onChange={updateSearchText}/>
                                <button className="btn" type="submit" onClick={searchSubmit}>Search</button>
                            </form>
                        </div>
                        
                    </div>
                    <div id="toggle" onClick={classNameChange} className="menu_toggle">
                        <img width="25px" src={image} alt="menutoggle"/>
                    </div>  
                </div>
                <ul id="autoSuggestion">
                {searchResultsAuto}
                </ul>
            </div>
            <div id="window" className="menu_toggle_window">
                <div id="navItem"><Link onClick={classNameChange} className="navbar_items" to="/about">About</Link></div>
                <div><Link onClick={classNameChange} className="navbar_items" to="/">Home</Link></div>
                <div><a onClick={classNameChange} className="navbar_items" href="mailTo:sksingh.jhs@gmail.com">Contact Us</a></div>
                <div className="navbar_items">
                    <form>
                        <input id="input" className="search_bar" type="search" placeholder="Search" value= {searchText} onChange={updateSearchText}/>
                        <button className="btn" type="submit" onClick={searchSubmit} >Search</button>
                    </form>
                </div> 
            </div>
             
        </div>   
    )
    }
    
export default Navbar;