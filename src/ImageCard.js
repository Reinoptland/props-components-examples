function ImageCard(props) {
  // regel 1: props toegevoegd als parameter
  console.log("WHAT ARE PROPS?", props);
  return (
    <div>
      <h2>{props.subject}</h2>
      <img src={`https://source.unsplash.com/1600x900/?${props.subject}`} />
    </div>
  );
}

export default ImageCard;
