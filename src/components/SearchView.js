import Hero from './Hero';
import {Link} from 'react-router-dom';

const MovieCard = ({ movie }) => {
    let posterURL = "";
    const path = `/movies/${movie.id}`;
    if (movie.poster_path == null){
        posterURL = "http://ht.ksdr1.net/wp-content/uploads/sites/3/2016/06/no-picture-available-icon-8.png"
    }
    else {
        posterURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    }
    return (
        <div className="card flexbox">  
            <div> <img width="300px" src={posterURL} alt={movie.original_title}></img></div>
            <div className="bottom_block">
                <h3>{movie.original_title}</h3>
                <div><Link to={path}><button className="btn1">Show deatils</button></Link></div>
            </div>
            
        </div>
    )
}
const SearchView = ({ keyWord, searchResults }) => {
    const title= `Your are searcing for ${keyWord}..`
    if (searchResults.length > 0){
        const searchResultsHtml = searchResults.map( (obj, i) => {
        return <MovieCard movie={obj} key={i}/>
        })
        return (
            <>
            <Hero text={title}/>
        
            <div className="container">
                <div className="movie_flexbox">
                {searchResultsHtml}
                </div> 
            </div>
            </>
        )}
    else if (keyWord!==""){
        return (
            <>
            <Hero text={title}/>
            <div className="container">
                <div>
                    <h3 style={{textAlign:'left'}}>No Results found!</h3> 
                    <h3 style={{textAlign:'left'}}>Kindly try another keyword..</h3> 
                </div> 
            </div>
            </>
        )}
    else {
        return (
            <>
            <Hero text={title}/>
            <div className="container">
            </div>
            </>
        )
    }
}

export default SearchView;