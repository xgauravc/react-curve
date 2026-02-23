const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1,
  padding: 20,
};

export function PostComponent({name, subtitle, time, image, description}) {
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img
          src={image}
          // src={
          //   "https://images.pexels.com/photos/29182989/pexels-photo-29182989.jpeg "
          // }
          style={{ width: 30, height: 30, borderRadius: 20 }}
        />
        <div style={{ fontSize: 12, marginLeft: 10 }}>
          <div>
            <b>{name}</b>
          </div>
          <div>{subtitle}</div>
          {/* <div>Promoted</div> */}
          {time && <div style={{display:"flex"}}>
            <div>{time}</div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXokezpThD-zoNH8Oc7oLzSg3i8-RPLbOgRw&s" alt=""
              style={{ width: 12, height: 12}}
            />

          </div>}
        </div>
      </div>
      <div style={{ fontSize: 12 }}>
        {description}
        {/* Is your infrastructure keeping pace with your AI ambitions? */}
      </div>
    </div>
  );
}