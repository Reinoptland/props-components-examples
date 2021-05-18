function TextContent(props) {
  console.log("PROPS IN TEXT CONTENT:", props);
  return <p>{props.children}</p>;
}

export default TextContent;
