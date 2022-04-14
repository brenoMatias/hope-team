import './Galery.css';
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { videoData } from './videos-data2';
import ReactPlayer from 'react-player';
import { videoData2 } from './localVideos';


function Videos() {
  const [users] = useState(videoData.slice(0, 60));
  const [pageNumber, setPageNumber] = useState(0);
  const [localVideos] = useState(videoData2.slice(0, 60))


  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((video) => {
      return (

        <div className="user">
          <h3>{video.title}</h3>
          <iframe className='video-item' allowfullscreen="allowfullscreen" src={video.src} alt={video.title} title={video.title}></iframe>
        </div>
      );   
    });

    const displayUsers2 = localVideos
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((video) => {
      return (

      <div className="user">
        <ReactPlayer
        className='react-player'
        url= {video.url}
        width={video.width}
        height={video.height}
        controls = {true}
        />
    </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
   <div className="cardsList"> 
    <div className="main">
      {displayUsers}
      {displayUsers2}
      </div>
      <div>

      <ReactPaginate
        previousLabel={"Anterior"}
        nextLabel={"Pŕoximo"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
    </div>
  );
}

export default Videos;

//pagination 
// https://www.youtube.com/watch?v=HANSMtDy508
// library: react paginate

//first thing: install the package
// npm install paginate
// second: import component
// import ReacPaginate
// https://www.npmjs.com/package/react-paginate