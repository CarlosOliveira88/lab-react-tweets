import User from './user'
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

// function Tweet({ tweet }) {

//   console.log('props =' + tweet);

//   return (
//     <div className="tweet">
//       <img
//         src={tweet.user.image}
//         className="profile"
//         alt="profile"
//       />

//       <div className="body">
//         <div className="top">
//           {/* <span className="user">
//             <span className="name">{tweet.user.name}</span>
//             <span className="handle">@{tweet.user.handle}</span>
//           </span> */}
//           <User name={tweet.user.name} handle={tweet.user.handle} />

//           {/* <span className="timestamp">{tweet.timestamp}</span> */}
//           <Timestamp timestamp={tweet.timestamp} />

//         </div>

//         <p className="message">
//           {/* {tweet.message} */}
//           <Message message={tweet.message} />

//         </p>

//         <div className="actions">
//           {/* Font Awesome icons
//           <i className="far fa-comment"></i>
//           <i className="fas fa-retweet"></i>
//           <i className="far fa-heart"></i>
//           <i className="fas fa-share"></i> */}
//           <Actions />
//         </div>
//       </div>

//       <i className="fas fa-ellipsis-h"></i>
//     </div>
//   );
// }

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage imageUrl={props.tweet.user.image} />

      <div className="body">

        <div className="top">
          <User name={props.tweet.user.name} handle={props.tweet.user.handle} />
          <Timestamp timestamp={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />
        <Actions />

      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}


export default Tweet;
