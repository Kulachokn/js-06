'use script'
import users from "./users.js";

//==============================task-1============================================

// const getUserNames = users => users.map(({name}) => name);

//===========second==========

// const getUserNames = users => {
//     return users.map(user => user.name);
// };

// console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//==============================task-2============================================

// const getUsersWithEyeColor = (users, color) => {
//     return users.filter(users => users.eyeColor === color);
// };

// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//==============================task-3============================================

// const getUsersWithGender = (users, gender) => {
//     return users.filter(({users}) => gender === gender);
// };
//
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//==============================task-4============================================

// const getInactiveUsers = users => {
//     return users.filter(users => !users.isActive);
// };
//
// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//==============================task-5============================================

// const getUserWithEmail = (users, email) => {
//     return users.find(user => user.email === email);
// };
//
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

//==============================task-6============================================

// const getUsersWithAge = (users, min, max) => {
//     return users.filter(user => min < user.age && user.age < max);
// };
//
// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//==============================task-7============================================

// const calculateTotalBalance = users => {
//     return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
// };
//
// console.log(calculateTotalBalance(users)); // 20916

//==============================task-8============================================

// const getUsersWithFriend = (users, friendName) => {
//     return users.filter(user => user.friends.includes(friendName)).map(user => user.name);
// };
//
// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//==============================task-9============================================

// const getNamesSortedByFriendsCount = users => {
//     return  [...users].sort((a, b) => a.friends.length > b.friends.length).map(users => users.name);
// };
//
// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//==============================task-10============================================


// const getSortedUniqueSkills = users =>
//     users.reduce((allSkills, user) => allSkills.concat(user.skills), [])
//         .filter((skill, index, skills) => skills.indexOf(skill) === index)
//         .sort();
//
// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// const getSortedUniqueSkills = users =>
//     // 1. get arr of skills
//     users.reduce((totalSkills, user) => {
//         totalSkills.push(...user.skills);
//
//         // 2. remove duplicate skills
//         let uniq = [...new Set(totalSkills)];
//
//         // 3. sort A-Z
//         const result = uniq.sort();
//         return result;
//     }, []);
//
// console.log(getSortedUniqueSkills(users));

// const getSortedUniqueSkills = users =>
//     users
//         .reduce((allSkills, user) => {
//             allSkills.push(...user.skills);
//             return allSkills;
//         }, [])
//         .reduce((filterSkills, allSkills) => {
//             if (!filterSkills.includes(allSkills)) {
//                 filterSkills.push(allSkills);
//                 return filterSkills;
//             }
//             return filterSkills;
//         }, [])
//         .sort();
//
// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// const getSortedUniqueSkills = users => {
//     const skillsArray = [];
//
//     users.forEach(user =>
//         user.skills.forEach(skill =>
//             // skillsArray.includes(skill) ? null : skillsArray.push(skill),
//             !skillsArray.includes(skill) ? skillsArray.push(skill) : null,
//         ),
//     );
//     skillsArray.sort();
//
//     return skillsArray;
// };
//
// console.log(getSortedUniqueSkills(users));


