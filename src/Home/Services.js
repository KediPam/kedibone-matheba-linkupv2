import computer from '../../assets/computer.png' 
import geometry from '../../assets/geometry.png' 
import dance from '../../assets/dance.png' 
import paint from '../../assets/paint.png' 
import img4 from '../../assets/img4.png' 

const Services = [
    {
        name: "Lets Dance",
        email: "dance@gmail.com",
        contactNumber: "0795135209",
        rating: "3",
        avatar: dance,
        coord: {latitude: -26.037903, longitude:28.069633 },

    },
    {
        name: "Angelic Voice",
        email: "ac@gmail.com",
        contactNumber: "0795135209",
        rating: "3",
        avatar: img4,
        coord: {latitude: -26.037903, longitude:28.069633 },

    }, {
        name: "Lets Learn Math",
        email: "llm@gmail.com",
        contactNumber: "0795135209",
        rating: "5",
        avatar: geometry,
        coord: {latitude: -26.037903, longitude:28.069633 },

    },
    {
        name: "Lets Code",
        email: "code@gmail.com",
        contactNumber: "0795135209",
        rating: "5",
        avatar: computer,
        coord: {latitude: -26.037903, longitude:28.069633 },

    },{
        name: "Happy Art",
        email: "art@gmail.com",
        contactNumber: "0795135209",
        rating: "4",
        avatar: paint,
        coord: {latitude: -26.037903, longitude:28.069633 },

    },
];

export default Services