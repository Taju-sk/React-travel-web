// DestinationsSection.js
import React from 'react';


const destinationsData = [
  {
    id: 1,
    name: 'Paris',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLSPtYa33xcsYdl86VobgEJeTxvTt797IXSM8Yk7CCHw&s',
    description: 'Experience the romance of Paris with its iconic landmarks and vibrant culture.'
  },
  {
    id: 2,
    name: 'Tokyo',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKhGCYlomMlU_EwFPmFFgp_bvb6Jn7SqOl40F9upvlog&s',
    description: 'Discover the bustling streets, ancient temples, and modern marvels of Tokyo.'
  },
  {
    "id": 3,
    "name": "Sydney",
    "image": "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_640.jpg",
    "description": "Explore the iconic landmarks, stunning harbor, and lively atmosphere of Sydney."
  },
  {
    "id": 4,
    "name": "India",
    "image": "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
    "description": "Experience the rich cultural heritage, diverse landscapes, and spiritual wonders of India."
  },
  {
      "id": 5,
      "name": "Palestine",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6HO0QugYqRebb3hnnqfYPMF_174zwyJIsFaFDFLEggg&s",
      "description": "Explore the ancient history, vibrant culture, and scenic landscapes of Palestine."
  },
  {
      "id": 6,
      "name": "Pakistan",
      "image": "https://t4.ftcdn.net/jpg/01/11/62/69/360_F_111626900_x7qXUA0gyTqeZd5a4RMXtgkvfz9vN84A.jpg",
      "description": "Discover the majestic mountains, bustling cities, and rich heritage of Pakistan."
  }
  
  
  
];

const DestinationsSection = () => {
  return (
    <section id="destinations" className="destinations">
      <h2>Popular Destinations</h2>
      <div className="destination-list">
        {destinationsData.map(destination => (
          <div key={destination.id} className="destination">
            <img src={destination.image} alt={destination.name} />
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DestinationsSection;

