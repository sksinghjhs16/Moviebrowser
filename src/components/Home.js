import Hero from './Hero';

const Home = () => {
    return (
        <>
        <Hero text="Welcome in the World of Movies."/>
        
        <div className="container">
            <h2>You can search movies here.</h2>        
        </div>
        </>
    )
}
// https://api.themoviedb.org/3/search/movie?api_key=14c46932b9b87948ea22f6bb7b24eaef&language=en-US&query=avenger&page=1&include_adult=false
export default Home;