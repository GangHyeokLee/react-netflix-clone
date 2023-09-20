import axios from "../api/axios";
import React, { useEffect, useState } from 'react'
import "./row.css"
import MovieModal from "./MovieModal";

export default function Row({ title, id, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const [movieSelcted, setMovieSelcted] = useState({})

    useEffect(() => {
        fetchMovieData();
    }, [])

    const fetchMovieData = async () => {
        const request = await axios.get(fetchUrl);

        // console.log("row", request)
        setMovies(request.data.results)
    }

    const handleClick = (movie) => {
        setModalOpen(true);
        setMovieSelcted(movie);
    }

    return (
        <section className="row">
            <h2>{title}</h2>
            <div className="slider">
                <div className="slider__arrow-left" onClick={() => {
                    document.getElementById(id).scrollLeft -= window.innerWidth - 80;
                }}>
                    <span
                        className="arrow"

                    >
                        {"<"}
                    </span>
                </div>

                <div id={id} className="row__posters">
                    {movies.map((movie) => (
                        <img
                            key={movie.id}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                            onClick={() => handleClick(movie)}
                        />
                    ))}
                </div>
                <div className="slider__arrow-right" onClick={() => {
                    document.getElementById(id).scrollLeft += window.innerWidth - 80;
                }}>
                    <span
                        className="arrow"
                    >{">"}</span>
                </div>
            </div>

            {
                modalOpen && (
                    <MovieModal
                        {...movieSelcted} setModalOpen = {setModalOpen}
                    />
                )
            }
        </section>
    )
}
