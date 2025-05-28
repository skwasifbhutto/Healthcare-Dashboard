import lungsImg from '../assets/Lungs.jpg';
import teethImg from '../assets/Teeth.jpg';
import boneImg from '../assets/Bone.jpg';


const anatomyStatus = [
  { id: 1, name: 'Healthy Heart', position: { top: '20%', left: '80%' }, color: '#4caf50' },
  { id: 2, name: 'Healthy Leg', position: { top: '55%', left: '25%' }, color: '#00bcd4' },
  { id: 3, name: 'Lungs', date: '26 Oct 2021',image: lungsImg, color: '#f44336', progress: 70 },
  { id: 4, name: 'Teeth', date: '26 Oct 2021',image: teethImg, color: '#4caf50', progress: 80 },
  { id: 5, name: 'Bone', date: '26 Oct 2021',image: boneImg, color: '#ff5722', progress: 60 ,},
];

export default anatomyStatus;
