import PropTypes from "prop-types";



export default function Profile({ Fullname, Curriculum, Profession, myFunction, children }) {
  return (
    <div>
      <h1>{Fullname}</h1>
      <h2>{Curriculum}</h2>
      <h3>{Profession}</h3>

      <button onClick={() => myFunction(Fullname)}>press button</button>
      {children}
    </div>
  );
}

Profile.defaultProps = {
  name: "John Doe"
};

Profile.propTypes = {
  bio: PropTypes.string
};