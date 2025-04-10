
import Overview from "../../components/GolfLocations/MoreDetailComponents/Overview";
import PhotoGallery from "../../components/GolfLocations/MoreDetailComponents/PhotoGallery";
import HeroSection from "../../components/HomeComponents/HeroSection/HeroSection";


export default function page() {
  return (
   <div className=" ">
    
     <HeroSection buttonsHidden="hidden" maxWidth="max-w-[818px]" headerText="Victoria Golf Resort" normalText="“If ever there was an antique piece then this would be it. Very little has changed over the years including the clubhouse which is remarkably beautiful and intimate (and all that)......The golf is laid out on only 92 acres / 37 ha so you can imagine how creative the layout is. This is adventure golf at its best and its enthralling. I could play this course everyday and still be entertained and have a blast”. - Paul Jansen Golf Course Architect." imageLocation="/home/kandyhome.jpeg"/>
     <Overview  details={[
      { label: 'Name', value: 'Victoria Golf Resort', valueColor: 'text-customGold' },
      { label: 'Location', value: ' Rajawella, off Digana, Kandy.', valueColor: 'text-customGold' },
      { label: 'Established', value: '1999', valueColor: 'text-customGold' },
      { label: 'Fairways', value: 'Native cow grass & Bermuda', valueColor: 'text-customGold' },
      { label: 'Other', value: "Caddies are available, Pro shop", valueColor: 'text-customGold' },
      { label: 'Par', value: '73', valueColor: 'text-customGold' },
      { label: 'Slope rating', value: '72.1/131', valueColor: 'text-customGold' },
      { label: 'Greens', value: 'TIFDWARF', valueColor: 'text-customGold' },
      {label:'Website Link',value:'Victoria Golf Resort',valueColor: 'text-customGold',webLink:'https://www.golfsrilanka.com/'},
      { label: 'Description', value: 'Resort course within closed community', valueColor: 'text-customGold' },
    ]}/>
     <PhotoGallery photos={[
  {
    id: 1,
    src: '/videos/Kandy.mp4',
    alt: 'Golfer taking a swing',
    className: 'col-span-2 row-span-2',
    type:'video',
    poster: '/home/nuwara/1.png'
  },
  {
    id: 2,
    src: '/home/nuwara/22.png',
    alt: 'Group of golfers on course',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 3,
    src: '/home/nuwara/3.png',
    alt: 'Golf course fairway view',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 4,
    src: '/home/nuwara/4.png',
    alt: 'Golfers on green course',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 5,
    src: '/home/nuwara/5.png',
    alt: 'Golfer near clubhouse',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 6,
    src: '/home/nuwara/6.png',
    alt: 'Golfer near clubhouse',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 7,
    src: '/home/nuwara/7.png',
    alt: 'Golfer near clubhouse',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 8,
    src: '/home/nuwara/8.png',
    alt: 'Golfer near clubhouse',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 9,
    src: '/home/nuwara/9.png',
    alt: 'Golfer near clubhouse',
    className: 'col-span-1 row-span-1'
  },
]}  />
   
     
   </div>
  );
}
