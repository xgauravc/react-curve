import { useState } from 'react';

export function NotificationComponent() {
  const [count, setCount] = useState(1);

  // setCount(2);
  console.log("in")
  setInterval(function(){
    setCount(count+1)
  },1000)

  
  return (
    <div>
      <div style={{display:"flex"}}>
        <div style={{ marginLeft:100, paddingLeft:10, paddingTop:5, background: "red", borderRadius:30, width:20, height:25}}>{ count }</div>
      </div>
      {/* <div> */}
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAACUCAMAAADMOLmaAAAAY1BMVEX///9EREQ2NjaPj4/8/PxAQEBycnL5+fnd3d08PDw5OTlHR0cuLi7v7+/a2toyMjLn5+dmZmZhYWF+fn6Hh4dSUlJZWVnR0dG9vb1ra2ubm5umpqavr6/Ly8vExMQpKSkiIiLimayaAAAD0klEQVR4nO2b23arIBBAgYAKeDcXY4z2/7/ygJrmZnsSIsg5a/ZD25WHujMwA+KIEAAAAAAAAAAA3kIvP+j0t29Q6qfXAyH1N4SK9FQFVZP6Kaic8q0gnAtCtrmXjjQPMqyROAsi3wy1TlgRORlKUYVrKz1BUfuFR0OMGf5q1xZ6gqIdx99IsV9b6AFdXmL8HUP1O07WdnqAoqiXNzGUvS451J90USaH+MYQy/isBf0xVI6NwLfwTehVEGnaMHwP26Q+LNOjQ3jeYoIfEazqEi/W6LA7EvIYwSGKnBR1Mm551pLUFz5UQszoTbORBIch0mspqku3O87krN34qZCncM2MyY89u9GZpS+idaaivuahyH5zm8jKwwp+yjBE6X4uQWZm436NPa3Okew1QZXV/QGt4BjthHxhjDWSy9S1HkJJwP+udh3oIHdbFFWZ2TyvIr9Btk4HWV2sjt8SVBvG2uVMpCjZvZolF9gud+anx7ghLybJN5I0Lsc5f7ES3rGPXOmpUDQ/bxZ+hm/cGeb7dyrNhBxmopORpqh7N5FH4s7VfpZWJoOsbqIDVxvufPduIl8cXRWczmAWjkGsHRmeiGEISeNGMNwaxVB9K1dHYsnR1JAXbk5z1IJiNsrO1ubo7V3DNY5uFr7I1E/hZqv9gSFLnVTs/9rQ3Sgb5rKOIRiCIRiCIRg6NDT1+xcM/V/1HBmmxhtYV3ubg+HNqIJ3DvwQao1OHAbEyXYMh3+/Mbxd1oZb66OsT8sL01s9NQ8L2wc3WjAyTxQHBVE/T27NjuZGspNlQ0VScGlesnlp/56++2SQ1TAPx18252JyNM+TIYjD0Y1Nw6b/KIQY943dbE7N15MLwtbT5uGL52YHc3fwMrr+w6UN80J8NAmnIJaRlSYXVazD4r3noT9BygRZ6BaiKKmWEcSS6KfNSwuqOjM9RVlgnDGvbCjWC0VwgNjo8Sw/T+MrfL/8UwE629tlTLz8INNsSUHWW0jl44LzUIrSQkFshw6qV1tsftPDljJFlcPFZiIJLDycUhV7gwURQpAPEQJvbDw906te12yWoOlCZGHZG3ui6BJ41WTsB0M78RyrNxF/o+5QgzlabwxRUmaC6zS/gYhsn/ihqCzCYKZSShZ49BrNKXteaXTfhR8x1OTxzGLYe/WyVHXf9iyHrb5Pgs/tfpI760N7DVpjdr/tYa76k16F1l/sZozZV+1R/NClBZ+zcQYyzsrz2koPDG+gJO2Rx3GWZaxofXvTbFJEyaE+Naf6nHiVIwPTW9WPHwEAAAAAAAAAAAAAAAAAAFjlD20DMR8nH1ZzAAAAAElFTkSuQmCC"
          alt=""
        />
      {/* </div> */}
    </div>
  );
}
