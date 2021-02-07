
const Profile = ({fullName, bio, profession,im, handleName}) => {
const styleObject = {color :"green"};
  return (
    <div style={styleObject}>
      <h2>{fullName}</h2>
      <h2>{bio}</h2>
      <h2>{profession}</h2>
     <img src={im}></img>   
     <button onClick={() => handleName("wajih")}>Details</button> 
    </div>
  );

Profile.defaultProps = {
  im:
    "https://colegioclassea.com.br/wp-content/themes/PageLand/assets/img/avatar/avatar.jpg",
  fullName: "waj"
};

};

export default Profile;