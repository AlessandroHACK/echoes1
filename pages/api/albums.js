import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

// you can also fetch all records at once via getFullList
const records = await pb.collection('albums').getFullList({
    sort: '-created',
});