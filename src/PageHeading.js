function PageHeading(props) {
  console.log("WHAT ARE PROPS IN PAGEHEADING:", props);
  return <h1>{props.pageTitle}</h1>;
}

export default PageHeading;
