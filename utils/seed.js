import DB from './db.js';
import Campground from '../models/campground.js';
import {cities} from './cities.js';
import {descriptors, places} from './seedHelpers.js'

const sample = array => array[Math.floor(Math.random() * array.length)];
 
 
const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '68715aee44204e777ff79039',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: `https://picsum.photos/400?random=${Math.random()}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore natus ipsa ducimus laudantium sint illo quam quod, at dicta impedit maiores illum fuga ratione, hic cupiditate incidunt, voluptatibus libero nobis!\nRecusandae neque facilis id. Inventore harum tempore debitis itaque corrupti aliquam esse corporis obcaecati dicta perspiciatis ratione maxime fuga explicabo, est, molestiae dignissimos suscipit blanditiis? Veniam asperiores vero natus aut!',
            price
        })
        await camp.save();
    }
}
 
seedDB();
// console.log('Should have seeded');
// image: `https://picsum.photos/400?random=${Math.random()}`,