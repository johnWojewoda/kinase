import { promiseActionTypes } from 'redux/promiseHelpers';

export const PORT_NAME = 'TENT';

export const ADD_COLLECTION_MAPPING = 'ADD_COLLECTION_MAPPING';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const DELETE_COLLECTION_MAPPING = 'DELETE_COLLECTION_MAPPING';
export const LOAD_ANNOTATIONS = promiseActionTypes('LOAD_ANNOTATIONS');
export const LOAD_ANNOTATIONS_PROXY = 'LOAD_ANNOTATIONS_PROXY';
export const SELECT_ELEMENT_PROXY = 'SELECT_ELEMENT_PROXY';
export const SET_CONTEXT_KEY = 'SET_CONTEXT_KEY';
export const SET_CURRENT_FIELD = 'SET_CURRENT_FIELD';
export const UPDATE_FIELD = 'UPDATE_FIELD';
