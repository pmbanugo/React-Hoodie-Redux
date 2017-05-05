import _ from 'lodash';
import PouchDB from 'pouchdb';
import Hoodie from '@hoodie/client';

import {
  FETCH_POSTS,
  DELETE_POST,
  CREATE_POST
} from './types';

const hoodie = new Hoodie({
  url: 'http://localhost:8000',
  PouchDB: PouchDB
});//This is costly to create always, move to a location where it's only created once.

hoodie.store.findAll().then(function (items) {
        console.log("List");
        for(var item of items) {
            console.log(item);
        }
});

export function fetchPosts(isInitialRender) {
  return dispatch => {
        hoodie.store.on('change', newPost => {
          hoodie.store.findAll().then(posts => {

            dispatch({
              type: FETCH_POSTS,
              payload: posts
            });
          });

    });

    if (isInitialRender) {
      hoodie.store.findAll().then(posts => {

            dispatch({
              type: FETCH_POSTS,
              payload: posts
            });
          });
    }
  };
}

export function createPost(post) {
  return dispatch => {
    console.log("New Post: ", post);
    hoodie.store.add({post: post, key: 1});
  }
}

export function deletePost(key) {
  return dispatch => hoodie.store.remove(key);
}
