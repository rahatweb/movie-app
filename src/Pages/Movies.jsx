import styled from "styled-components";
import gif from '../assets/images/loading.gif'

const Movies = ({ loading, allMovieData }) => {
  return (
    <MoviesComponent>
      {loading ? <img className="loading-img" src={gif} alt="loading" />:<div className="movie-container">
        {allMovieData.map((movie, index) => {
          const { Title, Year, Poster } = movie;

          return (
            <div className="card">
              <div className="image">
                <img src={Poster} alt="" />
              </div>
              <div className="card-content">
                <h2>{Title}</h2>
                <p>{Year}</p>
              </div>
            </div>
          );
        })}
      </div>}

     
    </MoviesComponent>
  );
};

const MoviesComponent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  
  .loading-img{
    height: 50px;
    width: 50px;
    position: absolute;
    top: 15rem;
    left: 50%;
  }

  .movie-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    padding: 4rem;
    .card {
      width: 100%;
      height: 100%;
      background-color: #e3d1d1;
      border-radius: 1rem;

      .image {
        padding: 1rem;
        img {
          width: 100%;
          height: 50%;
          border-radius: 1rem 1rem 0 0;
        }
      }

      .card-content {
        padding: 0rem 1rem 1rem 1rem;
      }
    }
  }
`;
export default Movies;
