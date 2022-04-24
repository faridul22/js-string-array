function megaFrind(friends) {
    if (Array.isArray(friends) == false) {
        return 'please provide an array';
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
};
const friends = ['Abul', 'Babul', 'kuddus', 'Habul'];
const myMegaFriend = megaFrind(2445);
// console.log(myMegaFriend);

if (friends.indexOf('Habul') != -1) {
    // console.log('habul exists');
}
else {
    // console.log('habul not exists');
}

if (friends.includes('Habul') == true) {
    console.log('habul exists using includes');
}