import React from "react";
// import { Carousel } from 'react-carousel-minimal';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getgallary } from "./archive_api.js";

import ImageGallery from 'react-image-gallery';
import css from "./Gallary.css";

const url = "https://i.pinimg.com/originals/cc/16/77/cc167732d9d40ea6b29183c45b6ced39.jpg";
function Gallary() {
  const [data, setdata] = useState([
    {
      original: url,
      thumbnail: url,
    }
  ]);

  const { search } = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      let dat = await getgallary(search);
      console.log(dat);
      if (dat)
        setdata(dat);
    }
    fetchData();
  }, [search]);

  const images = [
    {
      original: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  //  const data = [

  //     {
  //       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
  //       caption: "San Francisco"
  //     },
  //     {
  //       image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
  //       caption: "Scotland"
  //     },
  //     {
  //       image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
  //       caption: "Darjeeling"
  //     },
  //     {
  //       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
  //       caption: "San Francisco"
  //     },
  //     {
  //       image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
  //       caption: "Scotland"
  //     },
  //     {
  //       image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
  //       caption: "Darjeeling"
  //     },
  //     {
  //       image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
  //       caption: "San Francisco"
  //     },
  //     {
  //       image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
  //       caption: "Scotland"
  //     },
  //     {
  //       image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
  //       caption: "Darjeeling"
  //     }
  //   ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div>
       <ImageGallery items={data} showBullets = "true" onErrorImageURL = {url} autoPlay = "true" />
      {/* <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 10px"
        }}>
          <Carousel
            data={data}
            time={1000}
            width="1100px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="200px"
            style={{
              textAlign: "center",
              maxWidth: "1100px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div> */}
    </div>
  );
}

export default Gallary;