// import axios from 'axios';

// export const newChat = (title, projectId, username, secret, callback) => {
//   axios
//     .post(
//         `https://api.chatengine.io/chats/`,
//         { title: title },
//         { headers: {
//             "Public-Key": projectId,
//             "User-Name": username,
//             "User-Secret": secret
//         } }
//     )

//     .then((response) => {
//       callback && callback(response.data);
//     })

//     .catch((e) => console.log('New Chat Error', e));
// };
