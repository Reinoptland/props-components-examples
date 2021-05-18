function ImageCard(props) {
  // regel 1: props toegevoegd als parameter
  console.log("WHAT ARE PROPS?", props);
  return (
    <>
      <h2>{props.subject}</h2>
      <img src={`https://source.unsplash.com/1600x900/?${props.subject}`} />
    </>
  );
}

export default ImageCard;
